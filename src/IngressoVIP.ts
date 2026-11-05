import { Ingresso } from "./Ingresso";

export class IngressoVIP extends Ingresso {
    private valorAdicional: number;

    constructor(codigo: string, valor: number, nomeEvento: string, valorAdicional: number) {
        super(codigo, valor, nomeEvento)
        this.valorAdicional = valorAdicional
    }
    getValorAdicional(): number {
        return this.valorAdicional
    }
    setValorAdicional(valorAdicional: number): void {
        this.valorAdicional = valorAdicional
    }
    calcularValor(): number {
        return this.getValor() + this.valorAdicional
    }
    exibirDados(): string {
        return super.exibirDados() + 
        "\n Valor adicional: " + this.valorAdicional + 
        "\n Valor VIP: " + this.calcularValor() + "\n"
    }
}
