import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SistematicaComponent } from "./sistematica/sistematica.component";

const routes: Routes = [
    {
        path: ":id",
        component: SistematicaComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SistematicaRoutingModule {}
