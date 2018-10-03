function Airport() {
   this.hangar = [];
   this.capacity = 1;
}

Airport.prototype.land = function(plane, weather) {
  if (weather === "stormy") {
    return "It's too stormy to land!";
  } else if (this.hangar.length === this.capacity) {
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
