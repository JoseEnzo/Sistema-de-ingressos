import { Ingresso } from "./Ingresso";
import { IngressoVIP } from "./IngressoVIP";
import { VetorIngressos } from "./VetorIngressos";

const vetorIngressos = new VetorIngressos();
const ingresso = new Ingresso("", 0, "");
let opc: number;
class IngressoTest {
  main() {
    console.log(
      `1. Cadastrar ingresso Comum.
    2. Cadastrar ingresso VIP.
    3. Apresentar os dados de um ingresso.
    4. Apresentar os dados de todos os ingressos cadastrados.
    5. Alterar o valor de um ingresso.
    6. Alterar o valor adicional de um ingresso VIP.
    7. Remover um ingresso.
    8. Encerrar o programa.  
    `,
    );
    do {
      opc = parseInt(prompt("Digite sua opção: ")!);
      switch (opc) {
        case 1:
          console.log('Você escolheu a opção Cadastrar Ingresso comum: ')
          let codigoComum = prompt("Digite o codigo do ingresso: ")!;
          let valorComum = parseFloat(prompt("Digite o valor do ingresso: ")!);
          let nomeEventoComum = prompt("Digite o nome do evento: ")!;
          const novoIngresso = new Ingresso(
            codigoComum,
            valorComum,
            nomeEventoComum,
          );
          let verificarComum = vetorIngressos.adicionar(novoIngresso);
          if (verificarComum == true) {
            console.log("Ingresso adicionado com sucesso!");
          }
          break;
        case 2:
          console.log('Você escolheu a opção Cadastrar Ingresso VIP: ')
          let codigoVIP = prompt("Digite o codigo do ingresso: ")!;
          let valorVIP = parseFloat(prompt("Digite o valor do ingresso: ")!);
          let nomeEventoVIP = prompt("Digite o nome do evento: ")!;
          let valorAdicional = parseFloat(prompt("Digite o valor adicional: ")!,);

          const novoIngressoVIP = new IngressoVIP(
            codigoVIP,
            valorVIP,
            nomeEventoVIP,
            valorAdicional,
          );

          let verificarVIP = vetorIngressos.adicionar(novoIngressoVIP);
          if(verificarVIP == true){
            console.log('Ingresso adicionado com sucesso!')
          }
          break;
        case 3:
          console.log('Você escolheu apresentar os dados de um ingresso: ')
          let codigoDesejado = prompt("Digite o codigo desejado: ")!;
          let posicao3 = vetorIngressos.localizar(codigoDesejado) 
          if (posicao3 == -1) {
            console.log('Ingresso não encontrado!')
          } else {
            console.log(vetorIngressos.getIngresso()[posicao3].exibirDados())
          }
          break;
        case 4:
          console.log(vetorIngressos.listar())
          break;
        case 5:
          let codigoAlterar = parseInt(
            prompt(
              "Digite o codigo que você deseja alterar o valor do ingresso comum: ",
            )!,
          );
          if (codigoAlterar !== -1) {
            let valorAlterar = parseFloat(prompt("Digite o novo valor: ")!);
            ingresso.setValor(valorAlterar);
          }
          break;
      }
    } while (opc !== 8);
  }
}
const IngressoMostrar = new IngressoTest();
IngressoMostrar.main();
