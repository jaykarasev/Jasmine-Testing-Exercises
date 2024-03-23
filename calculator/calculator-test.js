
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {amount: 10000, years: 10, rate: 4.5 };
  expect(calculateMonthlyPayment(values)).toEqual('103.64');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {amount: 10182, years: 10, rate: 5 };
  expect(calculateMonthlyPayment(values)).toEqual('108.00');
});

it("should be able to handle small loan amounts", function(){
  const values = {amount: 100, years: 5, rate: 5 };
  expect(calculateMonthlyPayment(values)).toEqual('1.89');
})

it("should handle terribly high interest rates", function(){
  const values = {amount: 10000, years: 30, rate: 99 };
  expect(calculateMonthlyPayment(values)).toEqual('825.00');
})