export interface GoogleGeoDataEntity {
    results: Array<AddressEntity>;
    status: string;
}

export interface AddressEntity {
    address_components: AddressComponentEntity[];
    formatted_address: string;
    geometry: GeometryEntity;
    place_id: string;
    types: string[];
}

export interface AddressComponentEntity {
    long_name: string;
    short_name: string;
    types: string[];
}

export interface GeometryEntity {
    bounds: BoundsEntity;
    location: Location;
    location_type: string;
    viewport: BoundsEntity;
}

export interface BoundsEntity {
    northeast: Location;
    southwest: Location;
}

export interface Location {
    lat: number;
    lng: number;
}
