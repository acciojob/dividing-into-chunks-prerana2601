// script.js
function divideArray() {
    // Get user inputs
    const arrayInput = document.getElementById('arrayInput').value;
    const maxSum = parseInt(document.getElementById('maxSum').value, 10);

    // Validate inputs
    if (!arrayInput || isNaN(maxSum) || maxSum <= 0) {
        alert('Please enter a valid array and maximum sum.');
        return;
    }

    // Convert the input string to an array of numbers
    const arr = arrayInput.split(',').map(Number);

    // Function to divide the array
    function divide(arr, n) {
        const result = [];
        let currentSubarray = [];
        let currentSum = 0;

        for (const num of arr) {
            if (currentSum + num > n) {
                result.push(currentSubarray);
                currentSubarray = [];
                currentSum = 0;
            }
            currentSubarray.push(num);
            currentSum += num;
        }

        if (currentSubarray.length > 0) {
            result.push(currentSubarray);
        }

        return result;
    }

    // Get the result
    const result = divide(arr, maxSum);

    // Display the result
    document.getElementById('result').textContent = JSON.stringify(result, null, 2);
}
