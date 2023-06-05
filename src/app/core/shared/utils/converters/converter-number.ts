export class ConvertNumber {
    static toLocaleBr(
        value: number,
        minimumFractionDigits: number = 0,
        maximumFractionDigits: number = 2
    ): string {
        return value.toLocaleString("pt-BR", {
            minimumFractionDigits: minimumFractionDigits,
            maximumFractionDigits: maximumFractionDigits,
            useGrouping: true,
        });
    }
}
