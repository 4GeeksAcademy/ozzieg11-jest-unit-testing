test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("Conversion from USD to JPY (based on oneEuroIs rates)", () => {
    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(10)).toBeCloseTo(1462.62, 2);
});

test("Conversion from JPY to GBP (1 JPY = 0.0072 GBP)", function() {
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(1000)).toBeCloseTo(5.56);
})
