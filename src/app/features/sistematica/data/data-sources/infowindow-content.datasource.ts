import { ConvertNumber } from "src/app/core/shared/utils/converters/converter-number";
import { SistematicaModel } from "../../domain/models/sistematica.model";

export class InfoWindowDataSource {
    static getContent(data: SistematicaModel): string {
        let customerAddress: string =
            data.endereco ??
            "" + ", " + data.bairro + " - " + data.municipio + " - " + data.uf;

        let contentTemplate: string = `<div id="content">
        <h4 id="firstHeading" class="firstHeading">${data.nomeCliente}</h4>
        </div>
        <div id="bodyContent">
        <p>Latitude: ${data.lat}, Longitude: ${data.lng}</p>
        <p>Status: ${data.status}</p>
        <p>Ultima Compra: ${data.ultimaCompra}</p>
        <p>Dt. Prev. Inativação: ${data.dtPrevisaoInativacao}</p>
        <p>Dias Inativado: ${ConvertNumber.toLocaleBr(data.diasInativado)} </p>
        <p>Dt. Cadastro: ${data.dtCadastro} </p>
        <p>Endereço:${customerAddress}</p>
        <p>Detalhes: <a href="assets/images/customers/${data.cliente}${
            data.loja
        }.jpg" target="_blank"><b>Exibir Local<b/></a>
        &nbsp;&nbsp;<a href="https://www.google.com.br/maps/place/${customerAddress.replace(
            " ",
            "+"
        )} + "/@${data.lat},${
            data.lng
        }" + '" target="_blank"><b>Exibir no Google<b/></a> '
        </p>
        </div>
        <div id="siteNotice"></div>`;

        return contentTemplate;
    }
}
