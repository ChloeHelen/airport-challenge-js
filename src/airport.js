function Airport() {}

Airport.prototype.land = function(plane) {
  return plane + " landed";
};

Airport.prototype.takeOff = function(plane) {
  return plane + " taken off";
};
