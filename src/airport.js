function Airport() {
   this.hangar = [];
}

Airport.prototype.land = function(plane, weather) {
  if (weather === "stormy") {
    return "It's too stormy to land!";
  } else if (this.hangar.length === 1) {
    return "Airport is full";
  } else {
    this.hangar.push(plane);
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
