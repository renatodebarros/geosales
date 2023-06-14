import { Component, OnInit } from "@angular/core";
import { RollupModel } from "src/app/core/shared/utils/domain/model/rollup.model";
import { PrevisaoModel } from "../../domain/models/previsao.model";
import { PrevisaoCSVUseCase } from "../../domain/usecases/previsao-getCSV.usecase";
import { ActivatedRoute, Params } from "@angular/router";
import { MessageService } from "primeng/api";
import { MapOptionsConfig } from "src/app/core/shared/utils/map-options-config";
import { finalize } from "rxjs";
import * as d3 from "d3";
import {
    MapStyleApple,
    MapStyleSilver,
} from "src/app/core/shared/utils/map-styles/map-styles.const";
import { InfoWindowDataSource } from "src/app/features/sistematica/data/data-sources/infowindow-content.datasource";
import {
    AddressModel,
    GoogleGeoDataModel,
} from "src/app/core/shared/utils/domain/model/google-geodata.model";
import { StatusColorPipe } from "src/app/core/shared/utils/pipes/status-color.pipe";
import { GeoDataUseCase } from "src/app/core/shared/utils/domain/geodata.usecase";

declare var google: any;
@Component({
    selector: "app-previsao",
    templateUrl: "./previsao.component.html",
    styleUrls: ["./previsao.component.scss"],
})
export class PrevisaoComponent implements OnInit {
    private vendorFile: string;

    bounds: any;
    carregando: boolean = false;
    dataviewLayout: string = "grid";
    latlng: Array<any> = new Array<any>();
    map: any;
    nomeVendedor: string;
    options: any;
    overlays: Array<any> = new Array<any>();
    polylines: Array<any> = new Array<any>();
    previsaoData: Array<PrevisaoModel> = new Array<PrevisaoModel>();
    resumo: Array<RollupModel>;
    strokeColor: string = "#FF0000";
    strokeOpacity: number = 8.5;
    strokeWeight: number = 1.5;
    titulo: string = "TOTAL POR STATUS";
    tituloMapa: string = "MAPA EXPLORATÓRIO DE VENDAS - PREVISÃO";

    constructor(
        private activatedRoute: ActivatedRoute,
        private geoDataUseCase: GeoDataUseCase,
        private messageService: MessageService,
        private previsaoCsvUseCase: PrevisaoCSVUseCase,
        private statusColor: StatusColorPipe
    ) {
        this.options = MapOptionsConfig.get();
        this.bounds = new google.maps.LatLngBounds();
        this.setVendorFile();
    }

    private setVendorFile(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.vendorFile = params.id;
            this.nomeVendedor = params.id;
        });
    }

    private getPrevisao(): void {
        this.previsaoCsvUseCase
            .execute(this.vendorFile)
            .pipe(
                finalize(() => {
                    this.summaryData();
                    this.setPlaces();
                })
            )
            .subscribe((result: Array<PrevisaoModel>) => {
                this.previsaoData = result;
            });
    }

    private setMarker(item: PrevisaoModel, geoData: GoogleGeoDataModel): any {
        let address: string = `${item.endereco}-${item.bairro},${item.municipio}-${item.uf}`;
        address = address.replace(/ /g, "+");

        const lat: number = geoData.results[0].geometry.location.lat;
        const lng: number = geoData.results[0].geometry.location.lng;

        let titleAddress = `${geoData.results[0].address_components[1].short_name}, \n ${geoData.results[0].address_components[0].short_name} 
         - ${geoData.results[0].address_components[2].short_name}\n;`;

        let marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            label: {
                color: "#000",
                fontWeight: "bold",
                fontSize: "12px",
                text: `${item.item}`,
            },
            draggable: true,
            animation: google.maps.Animation.DROP,
            title: `Sequência:${item.item} (Status: ${item.status}) - ${item.nomeCliente}`,
            icon: {
                path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                fillColor: this.statusColor.transform(item.status),
                fillOpacity: 3,
                strokeColor: "#ffffff",
                strokeWeight: 1,
                scale: 1.5,
                anchor: new google.maps.Point(12, 24),
            },
            zIndex: +item.item,
        });

        let infowindow = new google.maps.InfoWindow({
            content: InfoWindowDataSource.getContent(item),
        });

        marker.addListener("click", function () {
            infowindow.open(this.map, marker);
        });

        this.bounds.extend(marker.getPosition());

        this.overlays.push(marker);
        this.map.fitBounds(this.bounds); // Map object used directly
        this.map.panToBounds(this.bounds);
    }

    private setPlaces(): void {
        this.previsaoData.forEach((item: PrevisaoModel) => {
            let address: string = `${item.endereco}-${item.bairro},${item.municipio}-${item.uf}`;
            address = address.replace(/ /g, "+");

            this.geoDataUseCase
                .execute(address)
                .subscribe((result: GoogleGeoDataModel) => {
                    let geoAddress: AddressModel = result.results[0];

                    if (result.status === google.maps.GeocoderStatus.OK) {
                        this.latlng.push(geoAddress.geometry.location);
                        this.setMarker(item, result);
                    } else {
                        console.log(`Error :${result} - Endereço : ${address}`);
                    }
                });
        });
        this.carregando = false;
    }

    private generateRoutes(map: any) {
        let stations = this.latlng.sort(
            (n1, n2) => parseInt(n1.item) - parseInt(n2.item)
        );

        let strokeColorOption: string = "#9D0AF1";
        let strokeOpacityOption: number = 0.5;
        let strokeWeightOption: number = 2.0;

        let polylineOptionsActual = new google.maps.Polyline({
            strokeColor: strokeColorOption,
            strokeOpacity: strokeOpacityOption,
            strokeWeight: strokeWeightOption,
        });

        var service = new google.maps.DirectionsService();
        // Divide route to several parts because max stations limit is 25 (23 waypoints + 1 origin + 1 destination)
        for (
            var i = 0, parts = [], max = 8 - 1;
            i < stations.length;
            i = i + max
        )
            parts.push(stations.slice(i, i + max + 1));

        // Service callback to process service results
        let service_callback = function (response, status) {
            if (status != "OK") {
                console.log("Directions request failed due to " + status);
                return;
            }
            let renderer = new google.maps.DirectionsRenderer({
                map: map,
                polylineOptions: polylineOptionsActual,
            });

            if (!map.gRenderers) map.gRenderers = [];
            map.gRenderers.push(renderer);

            renderer.setOptions({
                suppressMarkers: true,
                preserveViewport: true,
            });
            //this.setStyle(map);
            renderer.setDirections(response);
            renderer.setMap(map);
            let polylines = [];
            let bounds = new google.maps.LatLngBounds();
            let route = response.routes[0];
            let path = response.routes[0].overview_path;
            let legs = response.routes[0].legs;
            for (i = 0; i < legs.length; i++) {
                var polyline = new google.maps.Polyline({
                    map: map,
                    strokeColor: strokeColorOption,
                    strokeOpacity: strokeOpacityOption,
                    strokeWeight: strokeWeightOption,
                    path: [],
                });
                polylines.push(polyline);
                if (i == 1) {
                    polyline.setOptions({
                        strokeColor: strokeColorOption,
                        strokeOpacity: strokeOpacityOption,
                        strokeWeight: strokeWeightOption,
                    });
                }
                var steps = legs[i].steps;
                for (let j = 0; j < steps.length; j++) {
                    var nextSegment = steps[j].path;
                    for (let k = 0; k < nextSegment.length; k++) {
                        polyline.getPath().push(nextSegment[k]);
                        bounds.extend(nextSegment[k]);
                    }
                }
            }

            polyline.setMap(map);
            map.fitBounds(bounds);
            this.setStyle(map);
        };

        // Send requests to service to get route (for stations count <= 25 only one request will be sent)
        for (var i = 0; i < parts.length; i++) {
            // Waypoints does not include first station (origin) and last station (destination)
            let waypoints = [];
            for (let j = 1; j < parts[i].length - 1; j++)
                waypoints.push({
                    location: parts[i][j],
                    stopover: true,
                });
            // Service options
            // waypoints: waypoints,

            var service_options = {
                origin: parts[i][0],
                destination: parts[i][parts[i].length - 1],
                waypoints: waypoints,
                optimizeWaypoints: false,
                travelMode: "DRIVING",
            };
            // Send request
            service.route(service_options, service_callback);
        }

        this.carregando = false;
    }

    private setStyle(map: any): void {
        map.data.setStyle(function (feature) {
            let id: number = feature.getProperty("name");
            return {
                feature: "loc",
                title: id,
                fillColor: "blue",
                strokeWeight: 0.5,
                fillOpacity: 0.15,
            };
        });
    }

    private summaryData(): void {
        this.resumo = Array.from(
            d3.rollup(
                this.previsaoData,
                (v) => v.length,
                (d) => d.status
            ),
            ([key, value]) => ({
                key: key,
                value: value,
            })
        );
    }

    ngOnInit(): void {
        try {
            this.getPrevisao();
        } catch {
            this.messageService.add({
                severity: "error",
                summary: "Arquivo",
                detail: "Arquivo não localizado",
            });
        }
    }

    setStyles(event): void {
        event.map.mapTypes.set("styled_silver", MapStyleSilver);
        event.map.setMapTypeId("styled_silver");

        event.map.mapTypes.set("styled_apple", MapStyleApple);
        event.map.setMapTypeId("styled_apple");
    }

    setMap(event: any): void {
        this.carregando = true;
        this.map = event.map;
        this.setStyle(event.map);
        this.setStyles(event);
        setTimeout(() => {
            this.generateRoutes(event.map);
        }, 6000);
    }
}
