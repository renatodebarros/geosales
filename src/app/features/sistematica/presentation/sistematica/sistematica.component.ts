import { Component, OnInit } from "@angular/core";
import { SistematicaCSVUseCase } from "../../domain/usecases/sistematica-csv.usecase";
import { MapOptionsConfig } from "src/app/core/shared/utils/map-options-config";
import { ActivatedRoute, Params } from "@angular/router";
import { MessageService } from "primeng/api";
import { SistematicaModel } from "../../domain/models/sistematica.model";
import * as d3 from "d3-array";
@Component({
    selector: "app-sistematica",
    templateUrl: "./sistematica.component.html",
    styleUrls: ["./sistematica.component.scss"],
})
export class SistematicaComponent implements OnInit {
    private vendorFile: string;

    bounds: any;
    carregando: boolean = false;
    dataviewLayout: string = "grid";
    resumo: Array<{ key: string; value: number }> = [];
    map: any;
    nomeVendedor: string;
    options: any;
    overlays: any;
    titulo: string = "MAPA EXPLORATÓRIO DE VENDAS - SISTEMÁTICA";

    constructor(
        private sistematicaCsvUseCase: SistematicaCSVUseCase,
        private activatedRoute: ActivatedRoute,
        private messageService: MessageService
    ) {
        this.options = MapOptionsConfig.get();
        this.setVendorFile();
    }

    private setVendorFile(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.vendorFile = params.id;
        });
    }

    private getSistematica(): void {
        this.sistematicaCsvUseCase
            .execute(this.vendorFile)
            .subscribe((result: Array<SistematicaModel>) => {});
    }

    private summaryData(data: Array<SistematicaModel>): void {}

    ngOnInit(): void {
        try {
            this.getSistematica();
        } catch {
            this.messageService.add({
                severity: "error",
                summary: "Arquivo",
                detail: "Arquivo não localizado",
            });
        }
    }
}
