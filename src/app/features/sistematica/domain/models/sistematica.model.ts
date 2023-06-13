import { GoogleGeoDataModel } from "src/app/core/shared/utils/domain/model/google-geodata.model";

export interface SistematicaModel {
    bairro: string;
    cep: string;
    cliente: string;
    contato?: string;
    diasInativado?: number;
    dtCadastro?: string;
    dtPrevisaoInativacao?: string;
    email?: string;
    endereco: string;
    gerenteNacional?: string;
    gerenteRegional?: string;
    googleGeoData?: GoogleGeoDataModel;
    IBGE: string;
    infoWindowContent?: string;
    item: number;
    lat: number;
    lng: number;
    loja: string;
    municipio: string;
    nomeCliente?: string;
    nomeVendedor?: string;
    notaFiscal?: string;
    status: string;
    supervisor: string;
    telefone: string;
    tipo: string;
    uf: string;
    ultimaCompra?: string;
    vendedor: string;
}
