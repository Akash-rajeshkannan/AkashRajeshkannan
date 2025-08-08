class Calculator {
    constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation;
    }

    calculate() {
        if (this.operation === "add") {
            return this.a + this.b;
        }
        else if (this.operation === "sub") {
            return this.a - this.b;
        }
        else if (this.operation === "mul"){
            return this.a * this.b;
        }
        else if (this.operation === "div") {
            if (this.b === 0) {
                return "Error: Division by zero!";
            }
            return this.a / this.b;
        }
        else {
            return "Invalid operation!";
        }
    }
}

function calculateResult() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;

    let calc = new Calculator(num1, num2, operation);
    document.getElementById("result").innerText = "Result: " + calc.calculate();
}
