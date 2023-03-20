import { ParseCSV } from "src/app/core/shared/utils/data-source/parse-csv";
import { MapperOneWay } from "src/app/core/shared/utils/mapper";
import { MunicipioModel } from "../../../domain/models/municipios.model";
import { MunicipioEntity } from "../../entities/municipios.entity";

export class MunicipiosCsvMapper
    implements MapperOneWay<string, Array<MunicipioModel>>
{
    mapFrom(param: string): Array<MunicipioModel> {
        return (ParseCSV.getData(param) as Array<MunicipioEntity>).map(
            (item: MunicipioEntity, i: number) => {
                i++;
                return {
                    id: i++,
                    descricaoResumo: (item["DESCRICAO MUNICIPIO"] ?? "").concat(
                        " ",
                        `(${(item.ESTADO ?? "").toUpperCase()})`
                    ),
                    vendedor: item.VENDEDOR,
                    uf: item.ESTADO,
                    codMunicipio: item["COD. MUNICIPIO"],
                    nome: item["DESCRICAO MUNICIPIO"],
                    latitude: item.LATITUDE,
                    longitude: item.LONGITUDE,
                    temVendedor:
                        (item["Tem Vendedor"] ?? "").toUpperCase() === "SIM",
                };
            }
        );
    }
}
