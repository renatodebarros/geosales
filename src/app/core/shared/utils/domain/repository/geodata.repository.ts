import { Observable } from "rxjs";
import { GoogleGeoDataModel } from "../model/google-geodata.model";

export abstract class GeoDataRepository {
    abstract getGeoData(param: string): Observable<GoogleGeoDataModel>;
}
