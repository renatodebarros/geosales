import { MunicipiosGeoDataImplementationRepository } from "./repositories/municipios-geodata.implementation.repository";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MunicipioGeoDataRepository } from "../domain/repositories/municipio-geodata.repository";
import { MunicipioPolygnonUseCase } from "../domain/usecases/municipio-polygnon.usecase";

const municipiosUseCaseFactory = (
    municipioRepository: MunicipioGeoDataRepository
) => new MunicipioPolygnonUseCase(municipioRepository);

export const municipiosUseCaseProvider = {
    provide: MunicipioPolygnonUseCase,
    useFactory: municipiosUseCaseFactory,
    deps: [MunicipioGeoDataRepository],
};

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        {
            provide: MunicipioGeoDataRepository,
            useClass: MunicipiosGeoDataImplementationRepository,
        },
    ],
})
export class MunicipiosDataModule {}
