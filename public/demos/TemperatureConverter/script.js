document.addEventListener('DOMContentLoaded', () => {
  const tempInput = document.getElementById('temp-input');
  const unitSelect = document.getElementById('unit-select');
  const convertBtn = document.getElementById('convert-btn');
  const errorMsg = document.getElementById('error-msg');

  const valCelsius = document.getElementById('val-celsius');
  const valFahrenheit = document.getElementById('val-fahrenheit');
  const valKelvin = document.getElementById('val-kelvin');

  const resCelsiusCard = document.getElementById('res-celsius');
  const resFahrenheitCard = document.getElementById('res-fahrenheit');
  const resKelvinCard = document.getElementById('res-kelvin');

  function convertTemperature() {
    const rawVal = tempInput.value.trim();
    errorMsg.textContent = '';

    // Empty check
    if (rawVal === '') {
      errorMsg.textContent = 'Please enter a numerical value.';
      resetDisplays();
      return;
    }

    const value = parseFloat(rawVal);

    // Non-numeric check
    if (isNaN(value)) {
      errorMsg.textContent = 'Invalid input: Please enter a valid number.';
      resetDisplays();
      return;
    }

    const selectedUnit = unitSelect.value;
    let celsius, fahrenheit, kelvin;

    // Conversion formulas
    if (selectedUnit === 'celsius') {
      celsius = value;
      fahrenheit = (value * 9) / 5 + 32;
      kelvin = value + 273.15;
    } else if (selectedUnit === 'fahrenheit') {
      celsius = ((value - 32) * 5) / 9;
      fahrenheit = value;
      kelvin = celsius + 273.15;
    } else if (selectedUnit === 'kelvin') {
      celsius = value - 273.15;
      fahrenheit = (celsius * 9) / 5 + 32;
      kelvin = value;
    }

    // Absolute Zero Validation
    if (celsius < -273.15) {
      errorMsg.textContent = 'Absolute zero error: Value cannot be below -273.15°C (0 K).';
      resetDisplays();
      return;
    }

    // Display formatted results
    valCelsius.textContent = `${celsius.toFixed(2)} °C`;
    valFahrenheit.textContent = `${fahrenheit.toFixed(2)} °F`;
    valKelvin.textContent = `${kelvin.toFixed(2)} K`;

    // Highlight selected source unit card
    resCelsiusCard.classList.toggle('active', selectedUnit === 'celsius');
    resFahrenheitCard.classList.toggle('active', selectedUnit === 'fahrenheit');
    resKelvinCard.classList.toggle('active', selectedUnit === 'kelvin');
  }

  function resetDisplays() {
    valCelsius.textContent = '-- °C';
    valFahrenheit.textContent = '-- °F';
    valKelvin.textContent = '-- K';

    resCelsiusCard.classList.remove('active');
    resFahrenheitCard.classList.remove('active');
    resKelvinCard.classList.remove('active');
  }

  convertBtn.addEventListener('click', convertTemperature);

  // Real-time calculation on keyup or unit select change
  tempInput.addEventListener('input', convertTemperature);
  unitSelect.addEventListener('change', convertTemperature);
});
