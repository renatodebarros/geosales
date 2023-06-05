import { Mapper } from "src/app/core/shared/utils/mapper";
import { IMunicipioGeoDataModel } from "../../../domain/models/municipio-geodata.model";
import { IMunicipioGeoDataEntity } from "../../entities/municipio-geodata.entity";

export class MunicipiosGeodataMapper
    implements
        Mapper<Array<IMunicipioGeoDataEntity>, Array<IMunicipioGeoDataModel>>
{
    mapFrom(param: IMunicipioGeoDataEntity[]): IMunicipioGeoDataModel[] {
        return param;
    }
    mapTo(param: IMunicipioGeoDataModel[]): IMunicipioGeoDataEntity[] {
        return param;
    }
}
