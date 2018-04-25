module.exports = class FractionCalc {
  constructor() {
    this.result = "";
  }

  clearCalculator() {
    this.result =  "";
  }

  gcd(a, b) {
    if (b) {
      return this.gcd(b, a % b);
    } else {
      return Math.abs(a);
    }
  }

  add(arga1,arga2,argb1,argb2) {
    let bottomMultiple = arga2 * argb2;
    let frac1 = arga1 * argb2;
    let frac2 = arga2 * argb1;
    let resultHaut = frac1 + frac2;
    let pgcd = this.gcd(arga2,argb2);
    const topResult = resultHaut/pgcd;
    const bottomResult =  bottomMultiple/pgcd;
    const result = topResult.toString()+ "/"+ bottomResult.toString();
    this.result = result;
  }

  getResult(){
    return this.result;
  }
}
