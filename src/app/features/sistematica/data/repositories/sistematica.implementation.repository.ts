import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, switchMap } from "rxjs";
import { environment } from "src/environments/environment";
import { SistematicaRepository } from "../../domain/repositories/sistematica.repository";

import * as mappers from "./mappers/mappers.index";
import { SistematicaModel } from "../../domain/models/sistematica.model";
import { GoogleGeoDataEntity } from "src/app/core/shared/utils/entity/google-geodata.entity";
import { GoogleGeoDataModel } from "src/app/core/shared/utils/domain/google-geodata.model";
import { geoDataMapper } from "./mappers/mappers.index";

@Injectable({ providedIn: "root" })
export class SistematicaGeoDataImplementationRepository
    implements SistematicaRepository
{
    constructor(private http: HttpClient) {}
    getCSVData(vendorFile: string): Observable<Array<SistematicaModel>> {
        let header = new HttpHeaders({
            Accept: "text/csv; charset=utf-8,%EF%BB%BF",
            "Content-Type": "text/csv; charset=utf-8,%EF%BB%BF",
        });

        return this.http
            .get<string>(`${environment.urlFileSistematica}${vendorFile}.csv`, {
                headers: header,
                responseType: "text" as "json",
            })
            .pipe(map(mappers.sistematicaCSVMapper.mapFrom));
    }

    getGeoPostalCode(params: string): Observable<GoogleGeoDataModel> {
        return this.http
            .get<GoogleGeoDataEntity>(
                `${environment.googleGeoData}key=${
                    environment.googleMapsKey
                }&address=${params.replace(" ", "+")}`
            )
            .pipe(map(geoDataMapper.mapFrom));
    }
}
