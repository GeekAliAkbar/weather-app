const fs = require('fs');

// const data = {
//     name: 'ali',
//     address: 'pune',
// };
// const objectString = JSON.stringify(data);
// fs.writeFileSync('1-json.json', objectString);

// const dataBuffer = fs.readFileSync('1-json.json')
// const data = JSON.parse(dataBuffer.toString());
// console.log(data.name);

// const fileData = fs.readFileSync('1-json.json');
// const fileDataString = fileData.toString();

// const fileDataJson = JSON.parse(fileDataString);
// fileDataJson.name = 'Aliakbar';
// fileDataJson.age = 32;

// fs.writeFileSync('1-json.json', JSON.stringify(fileDataJson));

const party = {
    name: 'Birthday Party',
    printGuestList() {
        console.log('Welcome to ', this.name);
    },
};

party.printGuestList();