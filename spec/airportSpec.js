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

   describe("#takeOff", function() {
     it("Should take off a plane", function() {
       expect(airport.takeOff('plane', 'sunny')).toEqual("plane taken off");
     });
     it("Should not allow a plane to take off when the weather is stormy", function() {
       expect(airport.takeOff('plane', 'stormy')).toEqual("It's too stormy!");
     });
   });


 });
