var assert = require("assert");
var SumSquare = require("../app/sumOfSquare");



describe('Questão Teste',function() {
        var soma;
        beforeEach(function() {
            soma = new SumSquare();
        });

        it('Realizar a soma dos quadrado dos cem primeiros numeros, somar os cem primeiros numeros elevar ao quadrado ', function() {
            var resultado = soma.sum(1);
            //console.log("Teste 1",resultado);
            assert.equal(resultado,25164150);

        });
});
