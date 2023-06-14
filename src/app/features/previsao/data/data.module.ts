import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrevisaoRepository } from "../domain/repositories/previsao-repository";
import { PrevisaoCSVUseCase } from "../domain/usecases/previsao-getCSV.usecase";
import { PrevisaoImplementationRepository } from "./repositories/previsao.implementation.repository";
import { GeoDataUseCase } from "src/app/core/shared/utils/domain/geodata.usecase";
import { GeoDataRepository } from "src/app/core/shared/utils/domain/repository/geodata.repository";
import { GeoDataImplementationRepository } from "src/app/core/shared/utils/data/repository/geodata.implementation.repository";

const previsaoUseCaseFactory = (previsaoRepository: PrevisaoRepository) =>
    new PrevisaoCSVUseCase(previsaoRepository);

const previsaoUseCaseProvider = {
    provide: PrevisaoCSVUseCase,
    useFactory: previsaoUseCaseFactory,
    deps: [PrevisaoRepository],
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
        previsaoUseCaseProvider,
        {
            provide: PrevisaoRepository,
            useClass: PrevisaoImplementationRepository,
        },
        geoDataUseCaseProvider,
        {
            provide: GeoDataRepository,
            useClass: GeoDataImplementationRepository,
        },
    ],
})
export class DataModule {}
