new Vue({
    el: "#app",
    data: {
      number1: 0,
      number2: 0,
      operator: "+",
      result: 0,
    },
    methods: {
      setOperator(newOperator) {
        this.operator = newOperator;
        this.calculateResult();
      },
      calculateResult() {
        const num1 = parseFloat(this.number1);
        const num2 = parseFloat(this.number2);
        if (!isNaN(num1) && !isNaN(num2)) {
          switch (this.operator) {
            case "+":
              this.result = num1 + num2;
              break;
            case "-":
              this.result = num1 - num2;
              break;
            case "*":
              this.result = num1 * num2;
              break;
            case "/":
              if (num2 !== 0) {
                this.result = num1 / num2;
              } else {
                this.result = "Tidak dapat membagi oleh 0";
              }
              break;
          }
        } else {
          this.result = "Masukkan angka yang valid";
        }
      },
    },
  });
  