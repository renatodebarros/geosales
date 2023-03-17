import { ExpansaoVendasComponent } from './expansao-vendas/expansao-vendas.component';
import { VendasMunicipioComponent } from './vendas-municipio/vendas-municipio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VendasMunicipioComponent,
  },
  {
    path: 'expansao',
    component: ExpansaoVendasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MunicipiosRoutingModule {}
