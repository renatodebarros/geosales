import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SistematicaCSVUseCase } from "../domain/usecases/sistematica-csv.usecase";
import { SistematicaRepository } from "../domain/repositories/sistematica.repository";
import { SistematicaGeoDataImplementationRepository } from "./repositories/sistematica.implementation.repository";

const sistematicaCsvUseCaseFactory = (
    sistematicaRepository: SistematicaRepository
) => new SistematicaCSVUseCase(sistematicaRepository);

export const sistematicaCSVUseCaseProvider = {
    provide: SistematicaCSVUseCase,
    useFactory: sistematicaCsvUseCaseFactory,
    deps: [SistematicaRepository],
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
    ],
})
export class DataModule {}
