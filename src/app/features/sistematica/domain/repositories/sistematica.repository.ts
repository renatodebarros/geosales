import { Observable } from "rxjs";
import { GoogleGeoDataModel } from "src/app/core/shared/utils/domain/model/google-geodata.model";

export abstract class SistematicaRepository {
    abstract getCSVData(vendorFile: string): Observable<any>;
}
