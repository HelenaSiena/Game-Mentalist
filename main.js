var numeroSecreto = parseInt(Math.random() * 1001);
var numeroInvalid = 0;
var numTentativas = 0;

function jogar(){
    numTentativas++;
    var chute = document.getElementById('number').value;

    if (chute == numeroSecreto) { 
        alert('Você acertou!! \o/ \n Números de tentativas feitas: ' + numTentativas + ' vezes!');
    } else if (chute > numeroSecreto){
        alert('O número é MENOR que este! ): \n Tente novamente! \n Até agora foram: ' + numTentativas + ' tentativas! ');
    } else if (chute < numeroSecreto){
        alert('O número é MAIOR que este! ): \n Tente novamente! \n Até agora foram: ' + numTentativas + ' tentativas! ');
    }
    if (chute == numeroInvalid) {
        alert('Você digitou o único número inválido! \n Tente novamente! ;) \n Até agora foram: ' + numTentativas + ' tentativas! ');
    }

}