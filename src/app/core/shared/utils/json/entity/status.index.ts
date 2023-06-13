import { StatusEntity } from "./status.entity";

export const statusData: Array<StatusEntity> = new Array<StatusEntity>(
    { id: "A", description: "Ativo", color: "green" },
    { id: "B", description: "Bloqueado", color: "black" },
    { id: "D", description: "Desabilitado", color: "gray" },
    { id: "E", description: "Encerrado", color: "firebrick" },
    { id: "F", description: "Fornecedor / Frete", color: "lightcoral" },
    { id: "I", description: "Inativo", color: "darkred" },
    {
        id: "IC",
        description: "Inativo com Pendencia Cadastral.",
        color: "crimson",
    },
    { id: "H", description: "Habilitado", color: "blue" },
    { id: "K", description: "Colaborador/ Funcionário", color: "oranged" },
    { id: "P", description: "Propect", color: "gold" },
    { id: "PF", description: "Pendencia Financeira", color: "yellow" },
    {
        id: "M",
        description: "Cliente sem Faturamento Restrito de Crédito no mercado",
        color: "coral",
    },
    { id: "O", description: "Observação", color: "lightyellow" },
    {
        id: "R",
        description: "Restrito de Crédito no mercado",
        color: "darkkhaki",
    },
    { id: "S", description: "Pendencia Sintegra", color: "thistle" },
    {
        id: "Y",
        description: "Restrito por Estratégia Comercial",
        color: "darkmagenta",
    },
    { id: "X", description: "CNAE", color: "palegreen" },
    { id: "Z", description: "Zona de Investigação", color: "greenyellow" },
    { id: "T", description: "Amostra", color: "mediumaquamarine" }
);
