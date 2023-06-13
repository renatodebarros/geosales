import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SistematicaCSVUseCase } from "../domain/usecases/sistematica-csv.usecase";
import { SistematicaRepository } from "../domain/repositories/sistematica.repository";
import { SistematicaGeoDataImplementationRepository } from "./repositories/sistematica.implementation.repository";
import { GeoDataRepository } from "src/app/core/shared/utils/domain/repository/geodata.repository";
import { GeoDataUseCase } from "src/app/core/shared/utils/domain/geodata.usecase";
import { GeoDataImplementationRepository } from "src/app/core/shared/utils/data/repository/geodata.implementation.repository";

const sistematicaCsvUseCaseFactory = (
    sistematicaRepository: SistematicaRepository
) => new SistematicaCSVUseCase(sistematicaRepository);

export const sistematicaCSVUseCaseProvider = {
    provide: SistematicaCSVUseCase,
    useFactory: sistematicaCsvUseCaseFactory,
    deps: [SistematicaRepository],
};

const geoDataFactory = (geoDataRepository: GeoDataRepository) =>
    new GeoDataUseCase(geoDataRepository);

export const geoDataUseCaseProvider = {
    provide: GeoDataUseCase,
    useFactory: geoDataFactory,
    deps: [GeoDataRepository],
};

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        sistematicaCSVUseCaseProvider,
        {
            provide: SistematicaRepository,
            useClass: SistematicaGeoDataImplementationRepository,
        },
        geoDataUseCaseProvider,
        {
            provide: GeoDataRepository,
            useClass: GeoDataImplementationRepository,
        },
    ],
})
export class DataModule {}
