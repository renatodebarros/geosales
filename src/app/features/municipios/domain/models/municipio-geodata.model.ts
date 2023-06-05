export interface IMunicipioGeoDataModel {
    type: string;
    properties: IPropertyModel;
    geometry: IGeometryModel;
    hasSalesMan?: boolean | null;
    features: Array<FetureModel>;
}

export interface IGeometryModel {
    type: string;
    coordinates: Array<Array<number[]>>;
}

export interface IPropertyModel {
    id: string;
    name: string;
    description: string;
    hasSales?: boolean;
}

export interface FetureModel {
    type: string;
    properties: IPropertyModel;
    geometry: IGeometryModel;
}
