describe('Calculate monthly function tests', function() {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({amount: 200000, years: 15, rate: 6})).toEqual('1687.71');
    expect(calculateMonthlyPayment({amount: 500000, years: 12, rate: 6})).toEqual('4879.25');
  });
  
  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({amount: 1000, years: 10, rate: 12})).not.toEqual("14.34709484025873");
    expect(calculateMonthlyPayment({amount: 1000, years: 10, rate: 12})).toEqual("14.35");
  });
  
  it("should not return a result that is not a number", function() {
    expect(calculateMonthlyPayment({amount: 1000, years: 0, rate: 12})).not.toEqual("infinity");
    expect(calculateMonthlyPayment({amount: 1000, years: 10, rate: 0})).not.toBeNaN();
  });
});
