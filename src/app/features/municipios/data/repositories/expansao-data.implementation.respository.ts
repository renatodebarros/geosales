import { Injectable } from "@angular/core";
import { ExpansaoDataRepository } from "../../domain/repositories/expansao-data.repository";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import * as mappers from "./mappers/municipios-mappers.index";
@Injectable({ providedIn: "root" })
export class ExpansaoDataImplementationRepository
    implements ExpansaoDataRepository
{
    constructor(private http: HttpClient) {}
    getCSVData(vendorFile: string): Observable<any> {
        let header = new HttpHeaders({
            Accept: "text/csv; charset=utf-8,%EF%BB%BF",
            "Content-Type": "text/csv; charset=utf-8",
        });

        return this.http
            .get<string>(`${environment.urlFileExpansao}${vendorFile}.csv`, {
                headers: header,
                responseType: "text" as "json",
            })
            .pipe(map(mappers.municipiosCsvMapper.mapFrom));
    }
}
