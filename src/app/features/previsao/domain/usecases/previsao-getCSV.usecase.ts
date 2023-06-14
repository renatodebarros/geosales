import { UseCase } from "src/app/core/shared/utils/domain/use-case";
import { PrevisaoModel } from "../models/previsao.model";
import { Observable } from "rxjs";
import { PrevisaoRepository } from "../repositories/previsao-repository";

export class PrevisaoCSVUseCase
    implements UseCase<string, Array<PrevisaoModel>>
{
    constructor(private previsaoRepository: PrevisaoRepository) {}

    execute(param: string): Observable<Array<PrevisaoModel>> {
        return this.previsaoRepository.getCSVData(param);
    }
}
