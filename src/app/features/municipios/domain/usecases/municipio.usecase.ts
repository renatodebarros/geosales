import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core/shared/utils/domain/use-case';
import { MunicipioGeoDataModel } from '../models/municipio-geodata.model';
import { MunicipioRepository } from '../repositories/municipio-geodata.repository';

export class MunicipioUseCase
  implements UseCase<string, Array<MunicipioGeoDataModel>>
{
  constructor(private municpioRepository: MunicipioRepository) {}

  execute(param: string): Observable<MunicipioGeoDataModel[]> {
    return this.municpioRepository.getPolygnon(param);
  }
}
