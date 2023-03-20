export interface MunicipioModel {
    id: number;
    descricaoResumo: string;
    vendedor: string;
    uf: string;
    codMunicipio: string;
    nome: string;
    divisaoVendedor?: string;
    latitude: number;
    longitude: number;
    populacao?: number;
    prazoEntrg?: string;
    freteRevdv?: string;
    freteIndar?: string;
    vlFreteLUK?: string;
    perFreteCT?: string;
    vlFreteECT?: string;
    freteREVLN?: string;
    freteINDLN?: string;
    freteREVATL?: string;
    freteINDATL?: string;
    codTransp?: string;
    NomeTransp?: string;
    nreduzTrans?: string;
    temVendedor: boolean;
}
