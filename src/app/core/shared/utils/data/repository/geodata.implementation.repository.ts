import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, switchMap } from "rxjs";
import { environment } from "src/environments/environment";

import { GeoDataRepository } from "../../domain/repository/geodata.repository";
import { GoogleGeoDataModel } from "../../domain/model/google-geodata.model";
import { GoogleGeoDataEntity } from "../entity/google-geodata.entity";
import { mappers } from "./mappers/mapper.index";

@Injectable({ providedIn: "root" })
export class GeoDataImplementationRepository implements GeoDataRepository {
    constructor(private http: HttpClient) {}
    getGeoData(params: string): Observable<GoogleGeoDataModel> {
        return this.http
            .get<GoogleGeoDataEntity>(
                `${environment.googleGeoData}key=${
                    environment.googleMapsKey
                }&address=${params.replace(" ", "+")}`
            )
            .pipe(map(mappers.geoDataMapper.mapFrom));
    }
}
