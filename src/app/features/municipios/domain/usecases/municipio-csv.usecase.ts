import { Observable } from "rxjs";
import { UseCase } from "src/app/core/shared/utils/domain/use-case";
import { MunicipioGeoDataRepository } from "../repositories/municipio-geodata.repository";
export class MunicipiosCsvUseCase implements UseCase<string, any> {
    constructor(private municipioRepository: MunicipioGeoDataRepository) {}

    execute(param: string): Observable<any> {
        return this.municipioRepository.getCSVData(param);
    }
}
