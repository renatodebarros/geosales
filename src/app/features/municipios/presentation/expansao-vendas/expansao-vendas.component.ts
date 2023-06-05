import {
    FetureModel,
    IMunicipioGeoDataModel,
} from "./../../domain/models/municipio-geodata.model";
import { ActivatedRoute, Params } from "@angular/router";
import { MunicipiosCsvUseCase } from "./../../domain/usecases/municipio-csv.usecase";
import { Component, OnInit } from "@angular/core";
import { MunicipioPolygnonUseCase } from "../../domain/usecases/municipio-polygnon.usecase";
import { MunicipioModel } from "../../domain/models/municipios.model";
import { MapOptionsConfig } from "src/app/core/shared/utils/map-options-config";
import { distinct, from } from "rxjs";
import { MessageService } from "primeng/api";
import { MapStyleSilver } from "src/app/core/shared/utils/map-styles/map-styles.const";
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
        private activatedRoute: ActivatedRoute,
        private messageService: MessageService
    ) {
        this.options = MapOptionsConfig.get();
        this.setVendorFile();
    }

    setVendorFile(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.vendorFile = params.id;
        });
    }

    ngOnInit(): void {
        try {
            this.getMunicipios();
        } catch {
            this.messageService.add({
                severity: "error",
                summary: "Arquivo",
                detail: "Arquivo não localizado",
            });
        }
    }

    private fetchData(municipios: Array<MunicipioModel>): void {
        if (municipios.length > 0) {
            this.nomeVendedor = municipios[0].vendedor;
            this.municipios = municipios;
            this.titulo = `TOTAL DE MUNICÍPIOS: ${municipios.length}`;
            this.groupEstados();
        }
    }

    private fetchDataPolygnon(
        map: any,
        geoData: Array<IMunicipioGeoDataModel>
    ): void {
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

                        geoJson.features[0].geometry = geo.geometry;

                        map.data.addGeoJson(geoJson);
                        this.setStyle(map);
                        this.fitBound(map);
                    }
                }
            });
        });
        this.carregando = false;
    }

    private fitBound(map: any): void {
        if (map.data !== undefined) {
            let bounds = new google.maps.LatLngBounds();
            // Loop through features
            map.data.forEach(function (feature) {
                var geo = feature.getGeometry();
                geo.forEachLatLng(function (LatLng) {
                    bounds.extend(LatLng);
                });
            });

            map.fitBounds(bounds);
        }
    }

    private getMunicipios(): void {
        this.municipiosCsvUseCase.execute(this.vendorFile).subscribe(
            (result: Array<MunicipioModel>) => {
                this.fetchData(result);
            },
            (error: any) => {
                this.messageService.add({
                    severity: "error",
                    summary: "Arquivo",
                    detail: "Arquivo não localizado",
                });
            }
        );
    }

    private generatePolygnon(map: any): void {
        this.carregando = !this.carregando;

        this.estados.forEach((item: any) => {
            this.municipioPolygnonUseCase
                .execute(item.uf)
                .subscribe((result: Array<IMunicipioGeoDataModel>) => {
                    this.fetchDataPolygnon(map, result);
                });
        });
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

    setMap(event: any): void {
        this.carregando = true;
        this.setStyles(event);
        setTimeout(() => {
            this.generatePolygnon(event.map);
        }, 6000);

        this.map = event.map;
    }

    private setStyle(map: any): void {
        map.data.setStyle(function (feature) {
            let hasSales: boolean = feature.getProperty("hasSales");
            let id: number = feature.getProperty("name");
            return {
                feature: "loc",
                title: id,
                fillColor: hasSales ? "#a9d18d" : "#ffc000",
                strokeWeight: 0.5,
            };
        });
    }

    setStyles(event): void {
        event.map.mapTypes.set("styled_silver", MapStyleSilver);
        event.map.setMapTypeId("styled_silver");
    }
}
