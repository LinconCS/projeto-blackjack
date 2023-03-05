console.log('Boas vindas ao jogo de BlackJack!')

if(confirm('Quer iniciar uma nova rodada?')) {
    const cartaUmUsuario = comprarCarta()
    const cartaDoisUsuario = comprarCarta()
    const cartaUmComputador = comprarCarta()
    const cartaDoisComputador = comprarCarta()
    
    const pontuacaoUsuario = cartaUmUsuario.valor + cartaDoisUsuario.valor
    const pontuacaoComputador = cartaUmComputador.valor + cartaDoisComputador.valor
    
    console.log(`Usuário - cartas: ${cartaUmUsuario.texto} ${cartaDoisUsuario.texto} - pontuação ${pontuacaoUsuario}`)
    console.log(`Computador - cartas: ${cartaUmComputador.texto} ${cartaDoisComputador.texto} - pontuação ${pontuacaoComputador}`)
    
    if (pontuacaoUsuario <= 21 && pontuacaoComputador <= 21) {
        if (pontuacaoUsuario > pontuacaoComputador) {
            console.log('O usuário ganhou!')
        } else if (pontuacaoComputador > pontuacaoUsuario) {
            console.log('O computador ganhou!')
        } else if (pontuacaoUsuario === pontuacaoComputador)
            console.log('Empate!')
        }
    if (pontuacaoUsuario > 21 || pontuacaoComputador> 21) {
        if (pontuacaoUsuario > 21)
            console.log('O usuário estourou, computador ganhou!')
        } else if (pontuacaoComputador > 21) {
            console.log('O computador estourou, usuário ganhou!')
        } else if (pontuacaoUsuario > 21 && pontuacaoComputador > 21) {
            console.log('Ninguém ganhou!')
        }
} else {
    console.log('O jogo acabou.')
}