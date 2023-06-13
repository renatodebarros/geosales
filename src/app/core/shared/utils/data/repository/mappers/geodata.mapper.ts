import { GoogleGeoDataModel } from "src/app/core/shared/utils/domain/model/google-geodata.model";
import { GoogleGeoDataEntity } from "src/app/core/shared/utils/data/entity/google-geodata.entity";
import { MapperOneWay } from "src/app/core/shared/utils/mapper";

export class GeoCodeDataMapper extends MapperOneWay<
    GoogleGeoDataEntity,
    GoogleGeoDataModel
> {
    mapFrom(param: GoogleGeoDataEntity): GoogleGeoDataModel {
        return param;
    }
}
