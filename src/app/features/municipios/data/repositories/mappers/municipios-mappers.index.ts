import { MunicipiosCsvMapper } from "./municipios-csv.mapper";
import { MunicipiosGeodataMapper } from "./municipios-geodata.mapper";

const municiopiosGeoDataMapper: MunicipiosGeodataMapper =
    new MunicipiosGeodataMapper();

const municipiosCsvMapper: MunicipiosCsvMapper = new MunicipiosCsvMapper();

export { municiopiosGeoDataMapper, municipiosCsvMapper };
