let airPlane = function(passenger){
  this.airPlaneName = "Garuda";
  this.passengerTotal = passenger;
  return this
}

airPlane.prototype.status = function() {
  if (this.passengerTotal > 100) return 'Overload'
  else return 'Normal'
}

let objAirPlane = new airPlane(101);
console.log(objAirPlane.status())


//summary
/*
pilotName was undefined if I used arrow function to define in function expression
we should use general function and not arrow function
*/
/*
If we call pilotName directly, we will got error message
because pilotName function is child from airPlane
we should call parent first when we will call a child
*/
