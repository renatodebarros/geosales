import { Observable } from "rxjs";
import { PrevisaoModel } from "../models/previsao.model";

export abstract class PrevisaoRepository {
    abstract getCSVData(param: string): Observable<Array<PrevisaoModel>>;
}
