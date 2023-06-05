import { Observable } from "rxjs";
import { UseCase } from "src/app/core/shared/utils/domain/use-case";
import { IMunicipioGeoDataModel } from "../models/municipio-geodata.model";
import { MunicipioGeoDataRepository } from "../repositories/municipio-geodata.repository";

export class MunicipioPolygnonUseCase
    implements UseCase<string, Array<IMunicipioGeoDataModel>>
{
    constructor(private municipioRepository: MunicipioGeoDataRepository) {}

    execute(param: string): Observable<IMunicipioGeoDataModel[]> {
        return this.municipioRepository.getPolygnon(param);
    }
}
