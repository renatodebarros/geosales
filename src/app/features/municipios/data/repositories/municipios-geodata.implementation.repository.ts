import { environment } from "./../../../../../environments/environment";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { IMunicipioGeoDataModel } from "../../domain/models/municipio-geodata.model";
import { MunicipioGeoDataRepository } from "../../domain/repositories/municipio-geodata.repository";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IMunicipioGeoDataEntity } from "../entities/municipio-geodata.entity";
import * as mappers from "./mappers/municipios-mappers.index";
import { GeoDataStates } from "src/app/core/shared/utils/json/geodata.index";

@Injectable({ providedIn: "root" })
export class MunicipiosGeoDataImplementationRepository
    implements MunicipioGeoDataRepository
{
    constructor(private http: HttpClient) {}
    getCSVData(vendorFile: string): Observable<any> {
        let header = new HttpHeaders({
            Accept: "text/csv; charset=utf-8,%EF%BB%BF",
            "Content-Type": "text/csv; charset=utf-8",
        });

        return this.http
            .get<string>(`${environment.urlFileMunicipios}${vendorFile}.csv`, {
                headers: header,
                responseType: "text" as "json",
            })
            .pipe(map(mappers.municipiosCsvMapper.mapFrom));
    }

    getPolygnon(stateCode: string): Observable<Array<IMunicipioGeoDataModel>> {
        return this.http
            .get<Array<IMunicipioGeoDataEntity>>(
                `${environment.geoJsonPath}${
                    GeoDataStates.find(
                        (x) => x.stateCode === stateCode.toLocaleLowerCase()
                    ).fileName
                }`
            )
            .pipe(map(mappers.municiopiosGeoDataMapper.mapFrom));
    }
}
