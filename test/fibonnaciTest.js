
var assert = require("assert");
var Fibo = require("../app/fibonacci");



describe('Questão Teste 1',function() {
        var calc;
        beforeEach(function(){
            calc = new Fibo();

        });
        
      

         it('Calcular o fibonacci de 32 e retornar ',function() {
            var resultado  = calc.calcFibonnaci(32);
          console.log(resultado);
            assert.equal(resultado,3524578);
          });
        
         it('Verificar se o número é par gerado na sequencia do fibonacci e retornar a soma dos pares ',function() {
            var resultado  = calc.sumPar(32);
            console.log("Teste resultado",resultado);
            assert.equal(resultado,4613732);
        });


});
