import { dsvFormat } from "d3";

export class ParseCSV {
    static getData(data: string): Array<any> {
        return dsvFormat(";").parse(data);
    }
}
