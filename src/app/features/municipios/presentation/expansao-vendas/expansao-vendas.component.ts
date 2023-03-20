import {
    FetureModel,
    MunicipioGeoDataModel,
    PropertyModel,
} from "./../../domain/models/municipio-geodata.model";
import { ActivatedRoute, Params } from "@angular/router";
import { MunicipiosCsvUseCase } from "./../../domain/usecases/municipio-csv.usecase";
import { Component, OnInit } from "@angular/core";
import { MunicipioPolygnonUseCase } from "../../domain/usecases/municipio-polygnon.usecase";
import { MunicipioModel } from "../../domain/models/municipios.model";
import { MapOptionsConfig } from "src/app/core/shared/utils/map-options-config";
import { distinct, from } from "rxjs";
declare var google: any;

@Component({
    selector: "app-expansao-vendas",
    templateUrl: "./expansao-vendas.component.html",
    styleUrls: ["./expansao-vendas.component.css"],
})
export class ExpansaoVendasComponent implements OnInit {
    private vendorFile: string;

    carregando: boolean = false;
    dataviewLayout: string = "grid";
    estados: Array<any> = [];
    map: any;
    municipios: Array<MunicipioModel> = [];
    nomeVendedor: string;
    options: any;
    overlays: any;
    titulo: string = null;

    constructor(
        private municipioPolygnonUseCase: MunicipioPolygnonUseCase,
        private municipiosCsvUseCase: MunicipiosCsvUseCase,
        private activatedRoute: ActivatedRoute
    ) {
        this.options = MapOptionsConfig.get();
        console.log(this.options);
        this.setVendorFile();
    }

    setVendorFile(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.vendorFile = params.id;
        });
    }

    ngOnInit(): void {
        this.getMunicipios();
    }

    private getMunicipios(): void {
        this.municipiosCsvUseCase
            .execute(this.vendorFile)
            .subscribe((result: Array<MunicipioModel>) => {
                this.fetchData(result);
            });
    }

    private fetchData(municipios: Array<MunicipioModel>): void {
        if (municipios.length > 0) {
            this.nomeVendedor = municipios[0].vendedor;
            this.municipios = municipios;
            this.titulo = `TOTAL DE MUNICÍPIOS: ${municipios.length}`;
            this.groupEstados();
        }
    }

    private groupEstados(): void {
        from(
            this.municipios.map((item: MunicipioModel) => {
                return { uf: item.uf };
            })
        )
            .pipe(distinct((e: any) => e.uf))
            .subscribe((data) => {
                this.estados.push(data);
            });
    }

    private setOverlays(): void {
        let bounds = new google.maps.LatLngBounds();
        setTimeout(() => {
            // map will need some time to load

            this.overlays.forEach((marker) => {
                bounds.extend(marker.position);
                this.map.fitBounds(bounds); // Map object used directly
                this.map.panToBounds(bounds);
            });
        }, 6000);
    }

    setMap(event: any): void {
        this.setStyles(event);
        setTimeout(() => {
            this.generatePolygnon(event.map);
        }, 6000);

        this.map = event.map;
    }

    setStyles(event): void {
        var styledMapType = new google.maps.StyledMapType(
            [
                { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
                {
                    elementType: "geometry.fill",
                    stylers: [{ visibility: "on" }, { weight: 1 }],
                },
                {
                    elementType: "geometry.stroke",
                    stylers: [
                        { color: "#a29e76" },
                        { visibility: "on" },
                        { weight: 1.5 },
                    ],
                },
                {
                    elementType: "labels.icon",
                    stylers: [{ visibility: "off" }],
                },
                {
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#616161" }],
                },
                {
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#f5f5f5" }],
                },
                {
                    featureType: "administrative.land_parcel",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#bdbdbd" }],
                },
                {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [{ color: "#eeeeee" }],
                },
                {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#757575" }],
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{ color: "#e5e5e5" }],
                },
                {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#9e9e9e" }],
                },
                {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{ color: "#ffffff" }],
                },
                {
                    featureType: "road.arterial",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#757575" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{ color: "#dadada" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#616161" }],
                },
                {
                    featureType: "road.local",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#9e9e9e" }],
                },
                {
                    featureType: "transit.line",
                    elementType: "geometry",
                    stylers: [{ color: "#e5e5e5" }],
                },
                {
                    featureType: "transit.station",
                    elementType: "geometry",
                    stylers: [{ color: "#eeeeee" }],
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#c9c9c9" }],
                },
                {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#9e9e9e" }],
                },
            ],
            { name: "Prata" }
        );
        event.map.mapTypes.set("styled_silver", styledMapType);
        event.map.setMapTypeId("styled_silver");

        styledMapType = new google.maps.StyledMapType(
            [
                {
                    featureType: "landscape.man_made",
                    elementType: "geometry",
                    stylers: [{ color: "#f7f1df" }],
                },
                {
                    featureType: "landscape.natural",
                    elementType: "geometry",
                    stylers: [{ color: "#d0e3b4" }],
                },
                {
                    featureType: "landscape.natural.terrain",
                    elementType: "geometry",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "poi.business",
                    elementType: "all",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "poi.medical",
                    elementType: "geometry",
                    stylers: [{ color: "#fbd3da" }],
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{ color: "#bde6ab" }],
                },
                {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "road",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#ffe15f" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#efd151" }],
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#ffffff" }],
                },
                {
                    featureType: "road.local",
                    elementType: "geometry.fill",
                    stylers: [{ color: "black" }],
                },
                {
                    featureType: "transit.station.airport",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#cfb2db" }],
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#a2daf2" }],
                },
            ],
            { name: "Apple" }
        );
        event.map.mapTypes.set("styled_apple", styledMapType);
        event.map.setMapTypeId("styled_apple");
    }

    private generatePolygnon(map: any): void {
        let bounds = new google.maps.LatLngBounds();

        this.carregando = !this.carregando;

        this.estados.forEach((item: any) => {
            this.municipioPolygnonUseCase
                .execute(item.uf)
                .subscribe((result: Array<MunicipioGeoDataModel>) => {
                    this.fetchDataPolygnon(map, result);
                });
        });
    }

    private fetchDataPolygnon(
        map: any,
        geoData: Array<MunicipioGeoDataModel>
    ): void {
        let bounds = new google.maps.LatLngBounds();

        this.municipios.forEach((municipio: MunicipioModel) => {
            let query: string = "";
            query = municipio.nome
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .trim();

            Object.keys(geoData).forEach((item: any) => {
                if (item === "features") {
                    var geo = (
                        geoData[item] as unknown as Array<FetureModel>
                    ).find(
                        (x) =>
                            JSON.stringify(
                                x.properties.name
                                    .normalize("NFD")
                                    .replace(/[\u0300-\u036f]/g, "")
                            ).toUpperCase() === JSON.stringify(query)
                    );

                    if (geo !== undefined) {
                        var geoJson = {
                            type: "FeatureCollection",
                            features: [
                                {
                                    type: "Feature",
                                    properties: {
                                        name: municipio.id,
                                        opacity: 0.3,
                                        SD_NAME: "loc",
                                        hasSales: municipio.temVendedor,
                                    },
                                    geometry: {},
                                },
                            ],
                        };
                        // where "geoJsonData" is the data you retrieved

                        geoJson.features[0].geometry = geo.geometry;

                        map.data.addGeoJson(geoJson);

                        map.data.setStyle(function (feature) {
                            let hasSales: boolean =
                                feature.getProperty("hasSales");
                            let id: number = feature.getProperty("name");
                            return {
                                feature: "loc",
                                title: id,
                                fillColor: hasSales ? "#a9d18d" : "#ffc000",
                                fillOpacity: 0.15,
                                strokeWeight: 0.5,
                            };
                        });
                    }
                }
            });
        });
    }

    private setStyleTemVendedor(map: any, id: number) {}

    private setStyleSemVendedor(map: any, id: number) {
        map.data.setStyle(function () {
            return {
                feature: "loc",
                title: id,
                fillColor: "#ffc000",
                fillOpacity: 0.15,
                strokeWeight: 0.5,
            };
        });
    }
}
