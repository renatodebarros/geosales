import { Observable } from "rxjs";

export abstract class ExpansaoDataRepository {
    abstract getCSVData(vendorFile: string): Observable<any>;
}
