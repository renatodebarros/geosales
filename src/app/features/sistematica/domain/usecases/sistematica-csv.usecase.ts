import { Observable } from "rxjs";
import { UseCase } from "src/app/core/shared/utils/domain/use-case";
import { SistematicaRepository } from "../repositories/sistematica.repository";

export class SistematicaCSVUseCase implements UseCase<string, any> {
    constructor(private sistematicaRepository: SistematicaRepository) {}

    execute(param: string): Observable<any> {
        return this.sistematicaRepository.getCSVData(param);
    }
}
