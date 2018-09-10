var nota = prompt('digite a  nota do aluno');
var media = 7;

if(nota>=media){
    document.write('aprovado');

}
else{
document.write('Reprovado');
}

var opcao = prompt('digite um numero');

switch($opcao){
    case '1': document.write('opção 1 foi selecionada');
    break;
    case '2': // tal tal tal
    break;
    default // "else"
    break;
}

// converter cadeia de caracteres em int

var num1 = prompt('digite o valor de A');
num1=parseInt(num1); //parsefloat etc