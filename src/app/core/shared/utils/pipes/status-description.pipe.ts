import { Pipe, PipeTransform } from "@angular/core";
import { statusData } from "../json/entity/status.index";

@Pipe({
    name: "statusDescription",
})
export class StatusDescriptionPipe implements PipeTransform {
    transform(value: string): string {
        return statusData.find((x) => x.id === value.toLocaleUpperCase())
            .description;
    }
}
