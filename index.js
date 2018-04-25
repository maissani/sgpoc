 let {FractionCalc} = require('./models/index');

let testVar = new FractionCalc();

testVar.add(1,2,1,4);

let toto = testVar.getResult();

console.log(toto);
