const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given("the calculator is cleared", function(){
  this.clearCalc();
});

When(/I add (\d+)\/(\d+) to (\d+)\/(\d+)/, function (int, int2, int3, int4) {
  this.add(int, int2, int3, int4);
});

Then(/the result sould be (\d+)\/(\d+)/, function(expectedResultTop, expectedResultDown){
  expect(this.getResult()).to.be.equal(expectedResultTop+ '/'+ expectedResultDown);
});