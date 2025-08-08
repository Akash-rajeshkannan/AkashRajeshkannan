
    function countMultiples() {
      const input = document.getElementById('numberInput').value;
      const nums = input.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));

      const result = {};
      for (let i = 1; i <= 9; i++) {
        result[i] = nums.filter(num => num % i === 0).length;
      }

      let output = '<pre>{\n';
      for (let i = 1; i <= 9; i++) {
        output += `  ${i}: ${result[i]}`;
        if (i !== 9) output += ',\n';
      }
      output += '\n}</pre>';

      document.getElementById('outputArea').innerHTML = output;
    }
