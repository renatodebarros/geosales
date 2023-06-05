// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    googleMapsKey: "AIzaSyBJUgLhMd5M_-L2-0oBOvOsLg6QuQMe1Fk",
    urlFileMunicipios: "http://localhost:8081/arqdrone/Municipios/",
    urlFilePrevisao: "http://localhost:8081/arqdrone/Previsao/",
    urlFileVendedores: "http://localhost:8081/arqdrone/Vendedores/",
    urlFileSistematica: "http://localhost:8081/arqdrone/Sistematica/",
    urlFileClientes: "http://localhost:8081/arqdrone/Clientes/",
    geoJsonPath: "./assets/json/geojson/",
    googleGeoData: "https://maps.googleapis.com/maps/api/geocode/json?",
    version: "1.2.7",
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
