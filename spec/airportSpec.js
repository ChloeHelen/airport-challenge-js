 describe("Airport", function() {
   var airport;

   beforeEach(function() {
     airport = new Airport();
   });

   describe("#land", function() {
     it("Should land a plane", function() {
       expect(airport.land('plane')).toEqual("plane landed");
     });
     it("Should not allow a plane land when the weather is stormy", function() {
       spyOn(Math, "random").and.returnValue(9);
       expect(airport.land('plane', airport.isStormy())).toEqual("It's too stormy to land!");
     });
     it("Should not allow a plane to land when the airport is full", function() {
       var i;
       for(i = 0; i < airport.capacity; i++) {
         airport.land('plane');
       }
       expect(airport.land('plane')).toEqual("Airport is full");
     });
   });

   describe("#takeOff", function() {
     it("Should take off a plane", function() {
       expect(airport.takeOff('plane')).toEqual("plane taken off");
     });
     it("Should not allow a plane to take off when the weather is stormy", function() {
       spyOn(Math, "random").and.returnValue(9);
       expect(airport.takeOff('plane', airport.isStormy())).toEqual("It's too stormy to take off!");
     });
   });

   describe("#isStormy", function() {
     it("Should return Stormy", function () {
       spyOn(Math, "random").and.returnValue(9);
       expect(airport.isStormy()).toEqual(true);
     });
   });
 });
