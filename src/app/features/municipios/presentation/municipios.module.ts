import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MunicipiosRoutingModule } from "./municipios-routing.module";
import { ExpansaoVendasComponent } from "./expansao-vendas/expansao-vendas.component";
import { VendasMunicipioComponent } from "./vendas-municipio/vendas-municipio.component";
import { MunicipiosDataModule } from "../data/data.module";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "src/app/core/shared/shared.module";

@NgModule({
    declarations: [ExpansaoVendasComponent, VendasMunicipioComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        MunicipiosRoutingModule,
        MunicipiosDataModule,
        SharedModule,
    ],
})
export class MunicipiosModule {}
