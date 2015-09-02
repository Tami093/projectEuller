var assert = require("assert");
var CalcModSmallNumber = require("../app/smallNumber");



describe('Questão Teste 1',function() {
        var small;
        beforeEach(function() {
            small = new CalcModSmallNumber();
        });

        it('Calaculo o menor número que o resto da divisão entre 1 e 20 seja 0 ', function() {
            var resultado = small.calcSmall();

          //  console.log("Teste 1",resultado);
            assert.equal(resultado,true);

        });


        // it('Calaculo o menor número que o resto da divisão entre 1 e 20 seja 0 ', function() {
        //     var resultado = small.calcSmall(4520);
        //     //console.log("Teste 1",resultado);
        //     assert.equal(resultado,-1);

        // });

        // it('Calaculo o menor número que o resto da divisão entre 1 e 20 seja 0 ', function() {
        //     var resultado = small.calcSmall(4520);
        //     //console.log("Teste 1",resultado);
        //     assert.equal(resultado,-1);

        // });
});

