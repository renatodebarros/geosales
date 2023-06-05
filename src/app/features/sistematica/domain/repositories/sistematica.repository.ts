import { Observable } from "rxjs";

export abstract class SistematicaRepository {
    abstract getCSVData(vendorFile: string): Observable<any>;
}
