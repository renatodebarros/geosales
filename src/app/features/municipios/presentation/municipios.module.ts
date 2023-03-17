import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MunicipiosRoutingModule } from "./municipios-routing.module";
import { ExpansaoVendasComponent } from "./expansao-vendas/expansao-vendas.component";
import { VendasMunicipioComponent } from "./vendas-municipio/vendas-municipio.component";
import { MunicipiosDataModule } from "../data/data.module";

@NgModule({
    declarations: [ExpansaoVendasComponent, VendasMunicipioComponent],
    imports: [CommonModule, MunicipiosRoutingModule, MunicipiosDataModule],
})
export class MunicipiosModule {}
