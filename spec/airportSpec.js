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
       expect(airport.takeOff('plane')).toEqual("plane taken off");
     });
   });

 });
