export class Ingresso {
    private codigo: string;
    private valor: number;
    private nomeEvento: string;

    constructor(codigo: string, valor: number, nomeEvento: string) {
        ((this.codigo = codigo),
            (this.valor = valor),
            (this.nomeEvento = nomeEvento));
    }

    setValor(valor: number): void {
        this.valor = valor;
    }
    getCodigo(){
        return this.codigo
    }
    getValor(){
        return this.valor
    }
    getNomeEvento(){
        return this.nomeEvento
    }
    exibirDados(): string {
        return "Codigo do Ingresso: " + this.codigo + 
        "\n Nome do evento: " + this.nomeEvento + 
        "\n Valor: " + this.valor + "\n"
    }
}
