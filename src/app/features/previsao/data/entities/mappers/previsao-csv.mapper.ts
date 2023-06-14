import { MapperOneWay } from "src/app/core/shared/utils/mapper";
import { PrevisaoModel } from "../../../domain/models/previsao.model";
import { PrevisaoEntity } from "../previsao.entity";
import { ParseCSV } from "src/app/core/shared/utils/data/data-source/parse-csv";

export class PrevisaoCSVMapper
    implements MapperOneWay<string, Array<PrevisaoModel>>
{
    mapFrom(param: string): Array<PrevisaoModel> {
        return (ParseCSV.getData(param) as Array<PrevisaoEntity>).map(
            (item: PrevisaoEntity, i: number) => {
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
