import { Observable, map, pipe } from "rxjs";
import { PrevisaoModel } from "../../domain/models/previsao.model";
import { PrevisaoRepository } from "../../domain/repositories/previsao-repository";
import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { mappers } from "../entities/mappers/mapper.index";

@Injectable({ providedIn: "root" })
export class PrevisaoImplementationRepository implements PrevisaoRepository {
    constructor(private http: HttpClient) {}

    getCSVData(param: string): Observable<Array<PrevisaoModel>> {
        let header = new HttpHeaders({
            Accept: "text/csv; charset=utf-8,%EF%BB%BF",
            "Content-Type": "text/csv; charset=utf-8,%EF%BB%BF",
        });

        return this.http
            .get<string>(`${environment.urlFileSistematica}${param}.csv`, {
                headers: header,
                responseType: "text" as "json",
            })
            .pipe(map(mappers.csvMapper.mapFrom));
    }
}
