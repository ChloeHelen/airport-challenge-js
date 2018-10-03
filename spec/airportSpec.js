 describe("Airport", function() {
   var airport;

   beforeEach(function() {
     airport = new Airport();
   });

   describe("#land", function() {
     it("Should land a plane", function() {
       expect(airport.land('plane')).toEqual("plane landed");
     });
   });
 });
