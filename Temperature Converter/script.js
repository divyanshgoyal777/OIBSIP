function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const type = document.getElementById('type').value;
    const result = document.getElementById('result');

    if (isNaN(temp)) {
        result.textContent = 'Invalid Input';
        return;
    }

    let convertedTemp;

    if (type === 'celsius') {
        convertedTemp = (temp * 9 / 5) + 32;
        result.textContent = `${convertedTemp.toFixed(2)} °F`;
    } else if (type === 'fahrenheit') {
        convertedTemp = (temp - 32) * 5 / 9;
        result.textContent = `${convertedTemp.toFixed(2)} °C`;
    }
}
