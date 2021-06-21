  // The code below is used when the buttons are used and also connects the button to the check area function button.
document.getElementById('multiply').addEventListener('click', calculate)

let firstNum = 0
let secondNum = 0
let counter = 0
let answer = 0

  // The function below repersents the two values that are placed in the boxes when multiplyed.
function calculate () {
firstNum = document.getElementById('first').value
secondNum = document.getElementById('second').value
firstNum = parseInt(firstNum)
secondNum = parseInt(secondNum)

  // Here below this code displays the answer with the for function. firstNum x secondNum.
 for (counter = 0; counter < firstNum; counter++) {
   answer = answer + secondNum
}
document.getElementById('answer').innerHTML = answer
}
