import { Component } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
    version: string = environment.version;
    imageUrl: string = "brand.png";
}
