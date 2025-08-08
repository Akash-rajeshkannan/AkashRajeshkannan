function generateSeries() {
      const input = document.getElementById("inputNumber").value;
      const a = parseInt(input);
      let output = [];

      if (!isNaN(a) && a > 0) {
        for (let i = 0; i < a; i++) {
          output.push(2 * i + 1);
        }
        document.getElementById("output").innerText = output.join(", ");
      } else {
        document.getElementById("output").innerText = "Please enter a valid positive number.";
      }
    }