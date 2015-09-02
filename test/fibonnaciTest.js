
var assert = require("assert");
var Fibo = require("../app/fibonacci");
//var bignum = require('bignum');


describe('Questão Teste 1',function() {
        var calc;
        beforeEach(function(){
            calc = new Fibo();

        });
       // this.timeout(60000);
      

        //  it('Calcular o fibonacci de 1 e retornar 1 ',function() {
        //     var resultado  = calc.calcFibonnaci(1);
        //     console.log(resultado);
        //     assert.equal(resultado,1);
        // });


        // //  it('Calcular o fibonacci de 2 e retornar 2 ',function() {
        // //     var resultado  = calc.calcFibonnaci(2);
        // //     //console.log("Teste 1",calc.calcFibonnaci);
        // //     assert.equal(resultado,2);
        // // });

        // //  it('Calcular o fibonacci de 3 e retornar 3 ',function() {
        // //     var resultado  = calc.calcFibonnaci(3);
        // //     //console.log("Teste 1",calc.calcFibonnaci);
        // //     assert.equal(resultado,3);
        // // });

        //  it('Calcular o fibonacci de 5 e retornar 8',function() {
        //     var resultado  = calc.calcFibonnaci(5);
        //     //console.log("Teste 1",calc.calcFibonnaci);
        //     assert.equal(resultado,8);
        // });
        //   it('Calcular o fibonacci de 20 e retornar 13',function() {
        //     var resultado = calc.calcFibonnaci(15);
        //     //console.log("Teste 1",calc.calcFibonnaci);
        //     assert.equal(resultado,987);
        // });
        
        //   it('Calcular o fibonacci de 12 e retornar 798 ',function() {
        //     var resultado  = calc.calcFibonnaci(12);
        //     //console.log("Teste 1",calc.calcFibonnaci);
        //     assert.equal(resultado,233);
        // });

         // it('Calcular o fibonacci de 2000 e retornar 798 ',function() {
         //    var resultado  = calc.calcFibonnaci(33);
         //    console.log(resultado);
         //    assert.equal(resultado,5702887);
         //    });
        

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

        // //  it('Verificar se o número é par gerado na sequencia do fibonacci e retornar a soma dos pares ',function() {
        // //     var resultado  = calc.sumPar(12);
        // //     //console.log("Teste 1",calc.calcFibonnaci);
        // //     assert.equal(resultado,188);
        // // });


        //  it('Verificar se o número é par gerado na sequencia do fibonacci e retornar a soma dos pares ',function() {
        //     var resultado  = calc.sumPar(12);
        //     //console.log("Teste 1",calc.calcFibonnaci);
        //     assert.equal(resultado,188);
        // });

});
