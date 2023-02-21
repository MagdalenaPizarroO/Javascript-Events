// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	//your code goes here
	var numA = parseInt(stringA);
	var numB = parseInt(stringB);

	var sum = numA + numB;

	document.getElementById("resultNumber").value = sum;

}

document.getElementById("result").addEventListener("click", calculateSumListener);