export const calculate = (num1, operator, num2) => {
  
  if (typeof num1 !== "number" || typeof num2 !== "number" || !operator) {
    throw new Error("check the values, should be numbers and operator");
  }

  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
  }
};
