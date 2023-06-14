import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrevisaoComponent } from "./previsao/previsao.component";

const routes: Routes = [
    {
        path: ":id",
        component: PrevisaoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PrevisaoRoutingModule {}
