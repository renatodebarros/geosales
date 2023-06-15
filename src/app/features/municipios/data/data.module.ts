import { MunicipiosGeoDataImplementationRepository } from "./repositories/municipios-geodata.implementation.repository";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MunicipioGeoDataRepository } from "../domain/repositories/municipio-geodata.repository";
import { MunicipioPolygnonUseCase } from "../domain/usecases/municipio-polygnon.usecase";
import { MunicipiosCsvUseCase } from "../domain/usecases/municipio-csv.usecase";
import { GeoDataUseCase } from "src/app/core/shared/utils/domain/geodata.usecase";
import { GeoDataRepository } from "src/app/core/shared/utils/domain/repository/geodata.repository";
import { GeoDataImplementationRepository } from "src/app/core/shared/utils/data/repository/geodata.implementation.repository";

const municipiosGeoDataUseCaseFactory = (
    municipioRepository: MunicipioGeoDataRepository
) => new MunicipioPolygnonUseCase(municipioRepository);

const municipiosCsvUseCaseFactory = (
    municipioRepository: MunicipioGeoDataRepository
) => new MunicipiosCsvUseCase(municipioRepository);

const geoDataFactory = (geoDataRepository: GeoDataRepository) =>
    new GeoDataUseCase(geoDataRepository);

const geoDataUseCaseProvider = {
    provide: GeoDataUseCase,
    useFactory: geoDataFactory,
    deps: [GeoDataRepository],
};

export const municipiosPolygnonUseCaseProvider = {
    provide: MunicipioPolygnonUseCase,
    useFactory: municipiosGeoDataUseCaseFactory,
    deps: [MunicipioGeoDataRepository],
};

export const municipiosCSVUseCaseProvider = {
    provide: MunicipiosCsvUseCase,
    useFactory: municipiosCsvUseCaseFactory,
    deps: [MunicipioGeoDataRepository],
};

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        municipiosPolygnonUseCaseProvider,
        municipiosCSVUseCaseProvider,
        {
            provide: MunicipioGeoDataRepository,
            useClass: MunicipiosGeoDataImplementationRepository,
        },
        geoDataUseCaseProvider,
        {
            provide: GeoDataRepository,
            useClass: GeoDataImplementationRepository,
        },
    ],
})
export class MunicipiosDataModule {}
