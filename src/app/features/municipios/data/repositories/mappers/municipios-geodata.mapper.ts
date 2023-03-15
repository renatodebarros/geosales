import { Mapper } from 'src/app/core/shared/utils/mapper';
import { MunicipioGeoDataModel } from '../../../domain/models/municipio-geodata.model';
import { MunicipioGeoDataEntity } from '../../entities/municipio-geodata.entity';

export class MunicipiosGeodataMapper
  implements
    Mapper<Array<MunicipioGeoDataEntity>, Array<MunicipioGeoDataModel>>
{
  mapFrom(param: MunicipioGeoDataEntity[]): MunicipioGeoDataModel[] {
    return param;
  }
  mapTo(param: MunicipioGeoDataModel[]): MunicipioGeoDataEntity[] {
    return param;
  }
}
