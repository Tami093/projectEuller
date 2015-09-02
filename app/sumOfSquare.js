function SumSquare() {

}
module.exports = SumSquare;

SumSquare.prototype.sum = function(number) {
    var soma = 0;
    var natural = 0;
    var resultado = 0;
    var square = 0;
    while (number <= 100) {
        soma = soma + Math.pow(number,2);

        natural = natural + number;

        number++;
    }
    square = Math.pow(natural, 2);
    resultado = square - soma;
   // console.log(resultado);
    return resultado;
}
