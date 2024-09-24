function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;

    if (isNaN(temperatureInput) || temperatureInput === '') {
        alert('Please enter a valid number');
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let celsius, fahrenheit;

    if (unit === 'celsiusToFahrenheit') {
        // Convert Celsius to Fahrenheit
        fahrenheit = (temperature * 9/5) + 32;
        celsius = temperature;
    } else if (unit === 'fahrenheitToCelsius') {
        // Convert Fahrenheit to Celsius
        celsius = (temperature - 32) * 5/9;
        fahrenheit = temperature;
    }

    // Display the results
    document.getElementById('celsiusResult').textContent = `Celsius: ${celsius.toFixed(2)}`;
    document.getElementById('fahrenheitResult').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
}
