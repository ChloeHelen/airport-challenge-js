// it "stores a plane in it's plane list when a plane is instructed to land" do
//    plane = Plane.new
//    allow(subject).to receive(:stormy?) { false }
//    subject.land_plane(plane)
//    expect(subject.plane_list.include?(plane)).to eq true
//  end
//
 describe("Airport", function() {
   var airport;

   beforeEach(function() {
     airport = new Airport();
   });

   describe("#land", function() {
     it("Should land a plane", function() {
       expect(airport.land()).toEqual("Landed");
     });
   });
 });
