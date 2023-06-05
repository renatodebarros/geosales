import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SistematicaComponent } from "./sistematica/sistematica.component";
import { DataModule } from "../data/data.module";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "primeng/api";
import { SistematicaRoutingModule } from "./sistematica-routing.module";

@NgModule({
    declarations: [SistematicaComponent],
    imports: [
        CommonModule,
        DataModule,
        HttpClientModule,
        SharedModule,
        SistematicaRoutingModule,
    ],
})
export class SistematicaModule {}
