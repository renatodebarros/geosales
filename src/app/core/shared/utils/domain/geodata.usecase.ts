import { Observable } from "rxjs";
import { GoogleGeoDataModel } from "./model/google-geodata.model";
import { UseCase } from "./use-case";
import { GeoDataRepository } from "./repository/geodata.repository";

export class GeoDataUseCase implements UseCase<string, GoogleGeoDataModel> {
    constructor(private geoDataRepository: GeoDataRepository) {}
    execute(param: string): Observable<GoogleGeoDataModel> {
        return this.geoDataRepository.getGeoData(param);
    }
}
