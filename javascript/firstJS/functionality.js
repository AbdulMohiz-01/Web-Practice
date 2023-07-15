let valueOfBtn = document.querySelector('button');
valueOfBtn.addEventListener('click', sum);
function sum(){
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;
    var result = parseInt(num1)+parseInt(num2);
    document.getElementById('result').textContent =result;
}