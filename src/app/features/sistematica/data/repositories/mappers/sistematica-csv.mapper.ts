import { MapperOneWay } from "src/app/core/shared/utils/mapper";
import { SistematicaModel } from "../../../domain/models/sistematica.model";
import { SistematicaEntity } from "../../entities/sistematica.entity";
import { ParseCSV } from "src/app/core/shared/utils/data-source/parse-csv";

export class SistematicaCsvMapper
    implements MapperOneWay<string, Array<SistematicaModel>>
{
    mapFrom(param: string): Array<SistematicaModel> {
        return (ParseCSV.getData(param) as Array<SistematicaEntity>).map(
            (item: SistematicaEntity, i: number) => {
                return {
                    bairro: item.Bairro,
                    cep: item.Cep,
                    cliente: item.Cliente,
                    contato: item.Contato,
                    diasInativado: item["Dias Inativado"],
                    diasInativados: item["Dias Inativado"],
                    dtCadastro: item["Dt.Cadastro"],
                    dtPrevisaoInativacao: item["Dt.Prev.Inativação"],
                    email: item["E-mail"],
                    endereco: item.Endereço,
                    gerenteNacional: item["Gerente Nacional"],
                    gerenteRegional: item["Gerente Regional"],
                    IBGE: item.IBGE,
                    item: item.Item,
                    lat: item.lat,
                    lng: item.lng,
                    loja: item.Loja,
                    municipio: item.Municipio,
                    nomeCliente: item["Nome Cliente"],
                    nomeVendedor: item["Nome Vendedor"],
                    notaFiscal: item["Nota Fiscal"],
                    status: item.Status,
                    supervisor: item.Supervisor,
                    telefone: item.Telefone,
                    tipo: item.Tipo,
                    uf: item.UF,
                    ultimaCompra: item["Ultima Compra"],
                    vendedor: item.Vendedor,
                };
            }
        );
    }
}
