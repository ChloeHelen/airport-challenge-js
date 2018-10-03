function Airport() {
   this.hangar = [];
   this.capacity = 10;
}

Airport.prototype.land = function(plane, stormy) {
  if (stormy === true) {
    return "It's too stormy to land!";
  } else if (this.hangar.length === this.capacity) {
    return "Airport is full";
  } else {
    this.hangar.push(plane);
    return plane + " landed";
  }
};

Airport.prototype.takeOff = function(plane, stormy) {
  if (stormy === true) {
    return "It's too stormy to take off!";
  } else {
    return plane + " taken off";
  }
};

Airport.prototype.isStormy = function() {
  return Math.floor(Math.random() * 11) > 8;
};
