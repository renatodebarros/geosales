import { GeoCodeDataMapper } from "./geodata.mapper";
import { SistematicaCsvMapper } from "./sistematica-csv.mapper";

const geoDataMapper: GeoCodeDataMapper = new GeoCodeDataMapper();
const sistematicaCSVMapper: SistematicaCsvMapper = new SistematicaCsvMapper();

export { geoDataMapper, sistematicaCSVMapper };
