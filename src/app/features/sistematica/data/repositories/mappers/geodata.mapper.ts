import { GoogleGeoDataModel } from "src/app/core/shared/utils/domain/google-geodata.model";
import { GoogleGeoDataEntity } from "src/app/core/shared/utils/entity/google-geodata.entity";
import { MapperOneWay } from "src/app/core/shared/utils/mapper";

export class GeoCodeDataMapper extends MapperOneWay<
    GoogleGeoDataEntity,
    GoogleGeoDataModel
> {
    mapFrom(param: GoogleGeoDataEntity): GoogleGeoDataModel {
        return param;
    }
}
