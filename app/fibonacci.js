function Fibo() {

}

module.exports = Fibo;
var sequence = new Array();
Fibo.prototype.calcFibonnaci = function(number) {
    var anterior = 0;
    var atual = 1;
    for (var i = 0; i < number; i++) {
        atual = atual + anterior;
        anterior = atual - anterior;
        sequence[i] = atual;
        //console.log(sequence[i]);
    }
    return atual;
}
Fibo.prototype.sumPar = function(quandidade) {
    var soma = 0;
    for (var i = 0; i < quandidade; i++) {
      
        if (sequence[i]<4000000 && sequence[i]%2===0) {
          
            soma = soma + sequence[i];
        }
        else{
           console.log("O fibonacci passou de  4.000.000");
        }
    }
    console.log("soma",soma);
    return soma;
}
