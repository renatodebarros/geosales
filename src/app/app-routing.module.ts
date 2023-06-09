import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "municipios",
        loadChildren: () =>
            import("./features/municipios/presentation/municipios.module").then(
                (m) => m.MunicipiosModule
            ),
    },
    {
        path: "sistematica",
        loadChildren: () =>
            import(
                "./features/sistematica/presentation/sistematica.module"
            ).then((m) => m.SistematicaModule),
    },
    {
        path: "previsao",
        loadChildren: () =>
            import("./features/previsao/presentation/previsao.module").then(
                (m) => m.PrevisaoModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
