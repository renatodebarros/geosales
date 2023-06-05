import { Observable } from "rxjs";
import { IMunicipioGeoDataModel } from "../models/municipio-geodata.model";
export abstract class MunicipioGeoDataRepository {
    abstract getCSVData(vendorFile: string): Observable<any>;

    abstract getPolygnon(
        stateCode: string
    ): Observable<Array<IMunicipioGeoDataModel>>;
}
