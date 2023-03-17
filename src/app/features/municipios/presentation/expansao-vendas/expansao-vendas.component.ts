import { Component, OnInit } from "@angular/core";
import { MunicipioPolygnonUseCase } from "../../domain/usecases/municipio-polygnon.usecase";

@Component({
    selector: "app-expansao-vendas",
    templateUrl: "./expansao-vendas.component.html",
    styleUrls: ["./expansao-vendas.component.css"],
})
export class ExpansaoVendasComponent implements OnInit {
    constructor(private municipiosUseCase: MunicipioPolygnonUseCase) {}
    ngOnInit(): void {
        this.municipiosUseCase.execute("sp");
    }
}
