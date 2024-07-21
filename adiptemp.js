const fsr = 50;
const fsr_velocity_limit = 100;
let velocity = 0;

velocity = map(fsr, 0, fsr_velocity_limit, 0, 127);
console.log(velocity); // Output: 63

fsr = 75;
velocity = map(fsr, 0, fsr_velocity_limit, 0, 127);
console.log(velocity); // Output: 95

fsr = 25;
velocity = map(fsr, 0, fsr_velocity_limit, 0, 127);
console.log(velocity); // Output: 31
