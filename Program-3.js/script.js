function generateSeries() {
    const input = document.getElementById('inputNumber').value;
    const a = parseInt(input);
    const outputArea = document.getElementById('outputArea');

    if (isNaN(a) || a <= 0) {
        outputArea.innerText = "Please enter a positive integer.";
        return;
    }

    const limit = a % 2 !== 0 ? a : a - 1;
    const result = [];

    for (let i = 0; i < limit; i++) {
        result.push(2 * i + 1);
    }

    outputArea.innerText = result.join(', ');
}