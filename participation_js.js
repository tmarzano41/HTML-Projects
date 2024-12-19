function calculateRectangle(){
    const width = parseFloat(prompt("How wide is the rectangle?"));
    const length = parseFloat(prompt("How long is the rectangle?"));

    const perimeter = 2*(width+length);
    const area = width*length;

    console.log(`the perimeter is: ${perimeter}`);
    console.log(`the area: ${area}`);
}
function calculateCircle(){
    const radius = parseFloat(prompt("What is the radius?"));

    const circumference = 2*Math.PI*radius;
    const area = Math.PI*Math.pow(radius, 2);

    console.log(`the circumference is: ${circumference}`);
    console.log(`the area: ${area}`);
}
function subtractNumbers(){
    const num1 = parseFloat(prompt("Enter the first number"));
    const num2 = parseFloat(prompt("Enter the second number"));

    const result = num1-num2;
    console.log(`The first number ${num1} minus the second number ${num2} is ${result}`);
}
function calculateTotalCost(items, price){
    const taxRate = .0625;
    const subtotal = items*price;
    return subtotal * (1 + taxRate);
}
function getSalesTotal(){
    const items = parseFloat(prompt("Enter the number of items: "));
    const price = parseFloat(prompt("Enter the price: "));

    const totalCost = calculateTotalCost(items, price);
    console.log(`The amount you owe is: ${totalCost}`);
}
calculateRectangle();
calculateCircle();
subtractNumbers();
getSalesTotal();