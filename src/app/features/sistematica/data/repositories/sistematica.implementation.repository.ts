import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, switchMap } from "rxjs";
import { environment } from "src/environments/environment";
import { SistematicaRepository } from "../../domain/repositories/sistematica.repository";

import * as mappers from "./mappers/mappers.index";
import { SistematicaModel } from "../../domain/models/sistematica.model";
import { SrvRecord } from "dns";
import { GoogleGeoDataEntity } from "src/app/core/shared/utils/entity/google-geodata.entity";
import { GoogleGeoDataModel } from "src/app/core/shared/utils/domain/google-geodata.model";
import { InfoWindowDataSource } from "../data-sources/infowindow-content.datasource";
import { isMaster } from "cluster";

@Injectable({ providedIn: "root" })
export class SistematicaGeoDataImplementationRepository
    implements SistematicaRepository
{
    constructor(private http: HttpClient) {}
    getCSVData(vendorFile: string): Observable<any> {
        let header = new HttpHeaders({
            Accept: "text/csv; charset=utf-8,%EF%BB%BF",
            "Content-Type": "text/csv; charset=utf-8,%EF%BB%BF",
        });

        return this.http
            .get<string>(`${environment.urlFileSistematica}${vendorFile}.csv`, {
                headers: header,
                responseType: "text" as "json",
            })
            .pipe(
                map(mappers.sistematicaCSVMapper.mapFrom),
                switchMap((result: Array<SistematicaModel>) => {
                    console.log("Switch Mapel", result);

                    result.forEach((item: SistematicaModel) => {
                        let address: string = `${item.endereco}+${item.bairro}+${item.uf}`;

                        this.getGeoPostalCode(address).subscribe(
                            (result: GoogleGeoDataModel) => {
                                item.googleGeoData = result;
                            }
                        );
                    });

                    return result;
                })
            );
    }

    private getGeoPostalCode(params: string): Observable<GoogleGeoDataEntity> {
        return this.http.get<GoogleGeoDataEntity>(
            `${environment.googleGeoData}key=${
                environment.googleMapsKey
            }&address=${params.replace(" ", "+")}`
        );
    }
}
