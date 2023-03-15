export interface MunicipioGeoDataModel {
  type: string;
  properties: PropertyModel;
  geometry: GeometryModel;
  hasSalesMan?: boolean | null;
}

export interface GeometryModel {
  type: string;
  coordinates: Array<Array<number[]>>;
}

export interface PropertyModel {
  id: string;
  name: string;
  description: string;
}
