export interface MunicipioGeoDataModel {
    type: string;
    properties: PropertyModel;
    geometry: GeometryModel;
    hasSalesMan?: boolean | null;
    features: Array<FetureModel>;
}

export interface GeometryModel {
    type: string;
    coordinates: Array<Array<number[]>>;
}

export interface PropertyModel {
    id: string;
    name: string;
    description: string;
    hasSales?: boolean;
}

export interface FetureModel {
    type: string;
    properties: PropertyModel;
    geometry: GeometryModel;
}
