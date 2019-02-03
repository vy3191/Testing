const helpers = require('./project-1');

// start testing!

describe('This should check Project-1 functionality' , () => {
   
     test('It should Multiply the given number by 10' , () => {
         
         expect(helpers.multiplyByTen(5)).toBe(50);
         expect(helpers.multiplyByTen("Lambda School")).toBe(NaN);
     });


});
