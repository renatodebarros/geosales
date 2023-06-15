import { Component, Input } from "@angular/core";
import { SpinnerMapMessageEnum } from "../../utils/enums/spinner-map-messages.enum";

@Component({
    selector: "app-spinner-map",
    templateUrl: "./spinner-map.component.html",
    styleUrls: ["./spinner-map.component.scss"],
})
export class SpinnerMapComponent {
    @Input("carregando") carregando: boolean = false;
    @Input("tipo") mensagem: SpinnerMapMessageEnum;
}
