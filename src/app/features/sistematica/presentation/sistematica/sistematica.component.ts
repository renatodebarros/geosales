import { Component, OnInit } from "@angular/core";
import { SistematicaCSVUseCase } from "../../domain/usecases/sistematica-csv.usecase";
import { MapOptionsConfig } from "src/app/core/shared/utils/map-options-config";
import { ActivatedRoute, Params } from "@angular/router";
import { MessageService } from "primeng/api";
import { SistematicaModel } from "../../domain/models/sistematica.model";
import * as d3 from "d3-array";
import { finalize } from "rxjs";
import { RollupModel } from "src/app/core/shared/utils/domain/model/rollup.model";
import { GeoDataUseCase } from "src/app/core/shared/utils/domain/geodata.usecase";
import { GoogleGeoDataModel } from "src/app/core/shared/utils/domain/model/google-geodata.model";
import { StatusColorPipe } from "src/app/core/shared/utils/pipes/status-color.pipe";
import {
    MapStyleApple,
    MapStyleSilver,
} from "src/app/core/shared/utils/map-styles/map-styles.const";
import { InfoWindowDataSource } from "../../data/data-sources/infowindow-content.datasource";
import { TittleMapEnum } from "src/app/core/shared/utils/enums/tittle-map-enum";
import { SpinnerMapMessageEnum } from "src/app/core/shared/utils/enums/spinner-map-messages.enum";

declare var google: any;
@Component({
    selector: "app-sistematica",
    templateUrl: "./sistematica.component.html",
    styleUrls: ["./sistematica.component.scss"],
})
export class SistematicaComponent implements OnInit {
    private vendorFile: string;

    bounds: any;
    carregando: boolean = false;
    dataviewLayout: string = "grid";
    resumo: Array<RollupModel>;
    map: any;
    nomeVendedor: string;
    options: any;
    overlays: Array<any> = new Array<any>();
    sistematicaData: Array<SistematicaModel> = new Array<SistematicaModel>();
    titulo: string = "TOTAL POR STATUS";
    tituloMapa: string = TittleMapEnum.SISTEMATICA;
    tipoSpinner: SpinnerMapMessageEnum = SpinnerMapMessageEnum.SISTEMATICA;

    constructor(
        private activatedRoute: ActivatedRoute,
        private geoDataUseCase: GeoDataUseCase,
        private messageService: MessageService,
        private sistematicaCsvUseCase: SistematicaCSVUseCase,
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

    private getSistematica(): void {
        this.sistematicaCsvUseCase
            .execute(this.vendorFile)
            .pipe(
                finalize(() => {
                    this.summaryData();
                })
            )
            .subscribe((result: Array<SistematicaModel>) => {
                this.sistematicaData = result;
            });
    }

    private setPlaces(): void {
        this.sistematicaData.forEach((item: SistematicaModel) => {
            let address: string = `${item.endereco}-${item.bairro},${item.municipio}-${item.uf}`;
            address = address.replace(/ /g, "+");

            this.geoDataUseCase
                .execute(address)
                .subscribe((result: GoogleGeoDataModel) => {
                    this.setMarker(item, result);
                });
        });
        this.carregando = false;
    }

    private setMarker(
        item: SistematicaModel,
        geoData: GoogleGeoDataModel
    ): any {
        let address: string = `${item.endereco}-${item.bairro},${item.municipio}-${item.uf}`;
        address = address.replace(/ /g, "+");

        const lat: number = geoData.results[0].geometry.location.lat;
        const lng: number = geoData.results[0].geometry.location.lng;

        let titleAddress = `${geoData.results[0].address_components[1].short_name}, \n ${geoData.results[0].address_components[0].short_name} 
         - ${geoData.results[0].address_components[2].short_name}\n;`;

        let marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            label: {
                color: "#0000000",
                fontWeight: "bold",
                fontSize: "12px",
                text: `${item.item} - ${titleAddress}`,
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
                anchor: new google.maps.Point(12, 20),
            },
            zIndex: +item.item,
            optimized: true,
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
                this.sistematicaData,
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
            this.getSistematica();
        } catch {
            this.messageService.add({
                severity: "error",
                summary: "Arquivo",
                detail: "Arquivo não localizado",
            });
        }
    }

    setMap(event: any): void {
        this.carregando = true;
        this.map = event.map;
        this.setStyles(event);
        setTimeout(() => {
            this.setPlaces();
        }, 6000);
        this.setStyle(event.map);
    }

    setStyles(event): void {
        event.map.mapTypes.set("styled_silver", MapStyleSilver);
        event.map.setMapTypeId("styled_silver");

        event.map.mapTypes.set("styled_apple", MapStyleApple);
        event.map.setMapTypeId("styled_apple");
    }
}
