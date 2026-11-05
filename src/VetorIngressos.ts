import { Ingresso } from "./Ingresso";
import { IngressoVIP } from "./IngressoVIP";
export class VetorIngressos {
  private ingressos: Ingresso[];
  constructor() {
    this.ingressos = [];
  }
  localizar(codigo: string): number {
    let i: number = 0;
    let posicao: number = -1;
    while (i < this.ingressos.length && posicao == -1) {
      if (codigo == this.ingressos[i].getCodigo()) {
        posicao = i;
      }
      i++;
    }
    return posicao;
  }
  remover(codigo: string): boolean {
    let posicaoRemover: number = this.localizar(codigo);
    let ok: boolean = false;
    if (posicaoRemover != -1) {
      this.ingressos.splice(posicaoRemover, 1);
      ok = true;
    }
    return ok;
  }
  alterarValor(codigo: string, valor: number): boolean {
    let posicaoAlterarValor: number = this.localizar(codigo);
    let ok: boolean = false;
    if (posicaoAlterarValor != -1) {
      this.ingressos[posicaoAlterarValor].setValor(valor);
      ok = true;
    }
    return ok;
  }
  alterarValorAdicional(codigo: string, valorAdicional: number): boolean {
    let posicaoAlterarValorAdicional: number = this.localizar(codigo);
    let ok: boolean = false;
    if (posicaoAlterarValorAdicional != -1) {
      if (this.ingressos[posicaoAlterarValorAdicional] instanceof IngressoVIP) {
        let ingressoVip: IngressoVIP = this.ingressos[posicaoAlterarValorAdicional] as IngressoVIP;
        ingressoVip.setValorAdicional(valorAdicional);
        ok = true;
      }
    }
    return ok;
  }
  adicionar(ingresso: Ingresso): boolean {
    let ok: boolean = false;
    if (this.localizar(ingresso.getCodigo()) == -1) {
      ok = true;
      this.ingressos.push(ingresso);
    }
    return ok;
  }
  listar(): string {
    let i: number = 0;
    let ingressosCadastrados: string = "";
    let vetor = []
    let mostrar: string = ""
    while (i < this.ingressos.length) {
      ingressosCadastrados = this.ingressos[i].exibirDados()
      vetor[i] = ingressosCadastrados
      mostrar = mostrar + vetor[i]
      i++
    }
    return mostrar;
  }
  getIngresso(): Ingresso[]{
    return this.ingressos
  }
  
}
