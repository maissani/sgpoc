const { setWorldConstructor } =  require('cucumber');
const {FractionCalc} = require('../../models');

class World {
  constructor() {
    this.fractioncalc =  new FractionCalc();
  }

  clearCalc() {
    this.fractioncalc.clearCalculator();
  }

  add(a1,a2,b1,b2) {
    this.fractioncalc.add(a1,a2,b1,b2);
  }

  getResult() {
    return this.fractioncalc.getResult();
  }
}
setWorldConstructor(World);