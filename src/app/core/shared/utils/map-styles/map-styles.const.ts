declare var google: any;

export const MapStyleSilver = new google.maps.StyledMapType(
    [
        { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
        {
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { weight: 1 }],
        },
        {
            elementType: "geometry.stroke",
            stylers: [
                { color: "#a29e76" },
                { visibility: "on" },
                { weight: 1.5 },
            ],
        },
        {
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
        },
        {
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }],
        },
        {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#f5f5f5" }],
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [{ color: "#bdbdbd" }],
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#eeeeee" }],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#e5e5e5" }],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }],
        },
        {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#dadada" }],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }],
        },
        {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [{ color: "#e5e5e5" }],
        },
        {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [{ color: "#eeeeee" }],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#c9c9c9" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }],
        },
    ],
    { name: "Prata" }
);

export const MapStyleApple = new google.maps.StyledMapType(
    [
        {
            featureType: "landscape.man_made",
            elementType: "geometry",
            stylers: [{ color: "#f7f1df" }],
        },
        {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [{ color: "#d0e3b4" }],
        },
        {
            featureType: "landscape.natural.terrain",
            elementType: "geometry",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi.business",
            elementType: "all",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi.medical",
            elementType: "geometry",
            stylers: [{ color: "#fbd3da" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#bde6ab" }],
        },
        {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffe15f" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#efd151" }],
        },
        {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }],
        },
        {
            featureType: "road.local",
            elementType: "geometry.fill",
            stylers: [{ color: "black" }],
        },
        {
            featureType: "transit.station.airport",
            elementType: "geometry.fill",
            stylers: [{ color: "#cfb2db" }],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#a2daf2" }],
        },
    ],
    { name: "Apple" }
);