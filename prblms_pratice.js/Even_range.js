// function even(start,end) {
//     let even = [];
//     for (let i = 0; i <= 10; i++) {
//         if (1%2 == 0){
//             even.push(i);
//         }
//     }
//     console.log("even numbers found:" , even);
//     return even;
// }
// console.log(even(0,10));
function even(start, end) {
    console.log("Start:", start);  // Debugging statement for start
    console.log("End:", end);      // Debugging statement for end
    
    let evenNumbers = [];          // Initialize an empty array to hold even numbers

    for (let i = start; i <= end; i++) {
        console.log("Current i:", i);  // Debugging statement for each value of i in the loop

        if (i % 2 === 0) { // Check if the number is even
            console.log("Even number found:", i); // Debugging statement for each even number
            evenNumbers.push(i); // Add the even number to the array
        }
    }

    console.log("Even numbers found:", evenNumbers); // Final debugging output for even numbers array
    return evenNumbers; // Return the array of even numbers
}

// Call the function and print the result
console.log(even(0, 10)); // Expected output: [0, 2, 4, 6, 8, 10]
