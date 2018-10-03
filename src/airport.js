function Airport() {}

Airport.prototype.land = function(plane) {
  return plane + " landed";
};

Airport.prototype.takeOff = function(plane, weather) {
  if (weather === "stormy") {
    return "It's too stormy!";
  } else {
  return plane + " taken off";
  }
};
