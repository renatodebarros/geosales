export interface IMunicipioGeoDataEntity {
    type: string;
    properties: IPropertyEntity;
    geometry: IGeometryEntity;
    hasSalesMan?: boolean | null;
    features: any;
}

export interface IGeometryEntity {
    type: string;
    coordinates: Array<Array<number[]>>;
}

export interface IPropertyEntity {
    id: string;
    name: string;
    description: string;
}
