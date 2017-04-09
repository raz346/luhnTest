var assert = require("chai").assert;
var luhnFormula = require("../lib/luhn");
describe("luhnformula", function() {
  it("should return true if a number is a valid", function() {
    var number =  79927398713;
    var result = luhnFormula(number);
    assert.isTrue(result);
  })

  it("should return false if a number is NOT a valid", function() {
    var number = 79927398710 ;
    assert.isFalse(luhnFormula(number));
    var result = luhnFormula(number);
    assert.isFalse(result);
  })
})