function Airport() {}

Airport.prototype.land = function(plane, weather) {
  if (weather === "stormy") {
    return "It's too stormy to land!";
  } else {
    return plane + " landed";
  }
};

Airport.prototype.takeOff = function(plane, weather) {
  if (weather === "stormy") {
    return "It's too stormy to take off!";
  } else {
    return plane + " taken off";
  }
};
