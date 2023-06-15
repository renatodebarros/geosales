import { UseCase } from "src/app/core/shared/utils/domain/use-case";
import { MunicipioModel } from "../models/municipios.model";
import { Observable } from "rxjs";
import { ExpansaoDataRepository } from "../repositories/expansao-data.repository";

export class ExpansaoCsvUseCase
    implements UseCase<string, Array<MunicipioModel>>
{
    constructor(private expansaoDataRepository: ExpansaoDataRepository) {}

    execute(param: string): Observable<Array<MunicipioModel>> {
        return this.expansaoDataRepository.getCSVData(param);
    }
}
