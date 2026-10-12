// Recommend an activity using the weather conditions supplied below.
const temperature = 12;
const isRaining = false;
const windSpeed = 24;
let recommendation;

if (isRaining) {
    recommendation = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    recommendation = "Go swimming.";
} else if ((temperature < 15 && windSpeed > 20) || (temperature <= 5 && windSpeed > 10)) {
    recommendation = "Too cold and windy \u2014 stay home.";
} else {
    recommendation = "Perfect day for a walk.";
}

console.log(recommendation);