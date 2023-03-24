let usuario = []
let computador = []

if (confirm(`Boas vindas ao jogo de BlackJack!
Quer iniciar uma nova rodada?`)) {

// Comprar as duas primeiras cartas do jogador e do computador e verificar se são dois Ases

let verificaAses = false
while (!verificaAses){
   usuario.push(comprarCarta())
   usuario.push(comprarCarta())
   computador.push(comprarCarta())
   computador.push(comprarCarta())
   if ((usuario[0].valor === 11 && usuario[1].valor === 11) ||
      (computador[0].valor === 11 && computador[1].valor === 11)) {
         usuario = []
         computador = []
   } else {
      verificaAses = true
   }
}


// Perguntar ao usuário se ele deseja comprar mais cartas até que ele não queira mais (Cancel)
let comprando = true
let i = 2

while (comprando && i <= usuario.length) {
   let textos = ""
   let pontos = 0
   for (let j = 0; j < i; j++) {
      let carta = usuario[j]
      textos += carta.texto + " "
      pontos += carta.valor
   }

   if (pontos > 21) {
      comprando = false
   } else {
      let confirmaCompra = confirm(
         `Suas cartas são ${textos}. A carta revelada do computador é ${computador[0].texto}.
Deseja comprar mais uma carta?`
      )

      if (confirmaCompra) {
         usuario.push(comprarCarta())
         i++
      } else {
         comprando = false
      }
   }
}
   
   // Realizar o cálculo dos pontos
   let pontuacaoComputador = 0;
   let pontuacaoUsuario = 0;
   let textosComputador = '';
   let textosUsuario = '';
   
   for (let i = 0; i < computador.length; i++) {
     pontuacaoComputador += computador[i].valor;
     textosComputador += computador[i].texto + '';
   }
   
   for (let i = 0; i < usuario.length; i++) {
     pontuacaoUsuario += usuario[i].valor;
     textosUsuario += usuario[i].texto + '';
   }
   
   // Compra de cartas do computador
   if (pontuacaoUsuario <= 21) {
      for (
         let i = 0, n = computador.length;
         pontuacaoComputador < pontuacaoUsuario && pontuacaoComputador <= 21;
         i++
         ) {
         computador.push(comprarCarta())
         pontuacaoComputador = 0
         textosComputador = ''
         for (let j = 0; j < computador.length; j++) {
            let carta = computador[j]
            pontuacaoComputador += carta.valor
            textosComputador += carta.texto + '' 
         }
      }
   }
  
   let resultadoFinal = ''
   // Verificação de quem foi o vencedor
   if (pontuacaoUsuario <= 21 && pontuacaoComputador <= 21){
         if (pontuacaoUsuario  > pontuacaoComputador)
      resultadoFinal = 'O usuário ganhou!'
         if (pontuacaoComputador > pontuacaoUsuario)
      resultadoFinal = 'O computador ganhou!'
         if (pontuacaoUsuario === pontuacaoComputador)
      resultadoFinal = 'Empate!'
   }
   if (pontuacaoUsuario > 21 || pontuacaoComputador> 21) {
         if (pontuacaoUsuario > 21)
         resultadoFinal = ('computador ganhou!')
         if (pontuacaoComputador > 21)
         resultadoFinal = ('usuário ganhou!')
   }
   

   // Mostrando o resultado final do jogo
   alert
      (`Usuário - Cartas: ${textosUsuario} - Pontuação: ${pontuacaoUsuario} 
Computador - Cartas: ${textosComputador} - Pontuação: ${pontuacaoComputador} 
${resultadoFinal}`)     

} else {

   alert('O jogo acabou.')
}