export interface GoogleGeoDataModel {
    results: Array<AddressModel>;
    status: string;
}

export interface AddressModel {
    address_components: AddressComponentModel[];
    formatted_address: string;
    geometry: GeometryModel;
    place_id: string;
    types: string[];
}

export interface AddressComponentModel {
    long_name: string;
    short_name: string;
    types: string[];
}

export interface GeometryModel {
    bounds: BoundsModel;
    location: Location;
    location_type: string;
    viewport: BoundsModel;
}

export interface BoundsModel {
    northeast: Location;
    southwest: Location;
}

export interface Location {
    lat: number;
    lng: number;
}
