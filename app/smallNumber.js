function CalcModSmallNumber() {

}
module.exports = CalcModSmallNumber;

CalcModSmallNumber.prototype.calcSmall = function() {
    var cont  = 16* 9 * 5 * 7 * 11 * 13 * 17 * 19;
   // console.log(cont);
    if(cont%20===0){
        //console.log(cont);
        return true;
    }
    else{
        return false;        
    }
}
