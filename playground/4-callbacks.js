// setTimeout(() => {
//     console.log('2 seconds done');
// }, 1000);

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const body = {
//             lat: 0,
//             long: 0,
//         };
//         callback(body);
//     }, 3000);
// };

// geocode('Mumbai', (body) => {
//     console.log(body);
// });


const add = (number1, number2, returnSum) => {
    setTimeout(() => {
        returnSum(number1 + number2);
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})