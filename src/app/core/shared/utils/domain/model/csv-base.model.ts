import { GoogleGeoDataModel } from "./google-geodata.model";

export interface CSVBaseModel {
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
    IBGE: string;
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
