import { Observable } from "rxjs";
import { UseCase } from "src/app/core/shared/utils/domain/use-case";
import { MunicipioGeoDataModel } from "../models/municipio-geodata.model";
import { MunicipioGeoDataRepository } from "../repositories/municipio-geodata.repository";

export class MunicipioPolygnonUseCase
    implements UseCase<string, Array<MunicipioGeoDataModel>>
{
    constructor(private municipioRepository: MunicipioGeoDataRepository) {}

    execute(param: string): Observable<MunicipioGeoDataModel[]> {
        return this.municipioRepository.getPolygnon(param);
    }
}
