import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
    constructor(private primengConfig: PrimeNGConfig) {}
    ngOnInit(): void {
        document.documentElement.style.fontSize = "11px";
        this.setPrimeNgConfig();
    }

    private setPrimeNgConfig(): void {
        this.primengConfig.ripple = true;
        this.primengConfig.setTranslation({
            startsWith: "Começa com",
            contains: "Contém",
            notContains: "Não contém",
            endsWith: "Termina com",
            equals: "Igual",
            notEquals: "Diferente",
            noFilter: "Sem Filtro",
            lt: "Menor que",
            lte: "Menor igual a",
            gt: "Maior que",
            gte: "Maior igual a",
            is: "é",
            isNot: "Não é",
            before: "antes",
            after: "depois",
            dateIs: "É data",
            dateIsNot: "Não é data",
            dateBefore: "Data antes de",
            dateAfter: "Data depois de",
            clear: "Limpar",
            apply: "Aplicar",
            matchAll: "Procurar em tudo",
            matchAny: "Procurar em qualquer",
            addRule: "Adicionar",
            removeRule: "Remover",
            accept: "Confirmar",
            reject: "Cancelar",
            choose: "Escolher",
            upload: "Upload",
            cancel: "Cancelar",
            dayNames: [
                "Domingo",
                "Segunda",
                "Terça",
                "Quarta",
                "Quinta",
                "Sexta",
                "Sábado",
            ],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
            monthNames: [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro",
            ],
            monthNamesShort: [
                "Jan",
                "Fev",
                "Mar",
                "Abr",
                "Mai",
                "Jun",
                "Jul",
                "Ago",
                "Set",
                "Out",
                "Nov",
                "Dez",
            ],
            today: "Hoje",
            weekHeader: "Semana",
            weak: "Fraco",
            medium: "Medium",
            strong: "Forte",
            passwordPrompt: "Senha",
            emptyMessage: "Nenhum registro encontrado",
            emptyFilterMessage: "Nenhum filtro aplicado",
            //translations
        });
    }
}
