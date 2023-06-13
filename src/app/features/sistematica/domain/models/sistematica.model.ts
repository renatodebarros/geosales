import { CSVBaseModel } from "src/app/core/shared/utils/domain/model/csv-base.model";
import { GoogleGeoDataModel } from "src/app/core/shared/utils/domain/model/google-geodata.model";

export interface SistematicaModel extends CSVBaseModel {
    googleGeoData?: GoogleGeoDataModel;
    infoWindowContent?: string;
}
