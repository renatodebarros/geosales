import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PrevisaoRoutingModule } from "./previsao-routing.module";

import { StatusColorPipe } from "src/app/core/shared/utils/pipes/status-color.pipe";
import { PrevisaoComponent } from "./previsao/previsao.component";
import { SharedModule } from "src/app/core/shared/shared.module";
import { DataModule } from "../data/data.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [PrevisaoComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        PrevisaoRoutingModule,
        SharedModule,
        DataModule,
    ],
    providers: [StatusColorPipe],
})
export class PrevisaoModule {}
