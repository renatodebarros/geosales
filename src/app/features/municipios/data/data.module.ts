import { MunicipiosGeoDataImplementationRepository } from "./repositories/municipios-geodata.implementation.repository";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MunicipioGeoDataRepository } from "../domain/repositories/municipio-geodata.repository";
import { MunicipioPolygnonUseCase } from "../domain/usecases/municipio-polygnon.usecase";
import { MunicipiosCsvUseCase } from "../domain/usecases/municipio-csv.usecase";

const municipiosGeoDataUseCaseFactory = (
    municipioRepository: MunicipioGeoDataRepository
) => new MunicipioPolygnonUseCase(municipioRepository);

const municipiosCsvUseCaseFactory = (
    municipioRepository: MunicipioGeoDataRepository
) => new MunicipiosCsvUseCase(municipioRepository);

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
    ],
})
export class MunicipiosDataModule {}
