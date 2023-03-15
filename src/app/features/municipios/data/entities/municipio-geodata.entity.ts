export interface MunicipioGeoDataEntity {
  type: string;
  properties: PropertyEntity;
  geometry: GeometryEntity;
  hasSalesMan?: boolean | null;
}

export interface GeometryEntity {
  type: string;
  coordinates: Array<Array<number[]>>;
}

export interface PropertyEntity {
  id: string;
  name: string;
  description: string;
}
