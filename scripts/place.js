document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

const currentTemp = 45;
const currentWindSpeed = 5;
const windChillElement = document.getElementById('wind-chill');



if (currentTemp <= 15 && currentWindSpeed > 4.8) {
    const result = calculateWindChill(currentTemp, currentWindSpeed);
    windChillElement.textContent = `${result.toFixed(1)} °C`;
} else {

    windChillElement.textContent = "N/A";
};

function calculateWindChill(temp, speed) {
    return (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16))).toFixed(1);
}