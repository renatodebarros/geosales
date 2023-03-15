import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MunicipiosRoutingModule } from './municipios-routing.module';
import { ExpansaoVendasComponent } from './expansao-vendas/expansao-vendas.component';
import { VendasMunicipioComponent } from './vendas-municipio/vendas-municipio.component';


@NgModule({
  declarations: [
    ExpansaoVendasComponent,
    VendasMunicipioComponent
  ],
  imports: [
    CommonModule,
    MunicipiosRoutingModule
  ]
})
export class MunicipiosModule { }
