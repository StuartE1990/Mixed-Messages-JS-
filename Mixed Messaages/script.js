//Random Number Generator
let randomNumber = Math.floor(Math.random() * 10);

// Message elements
const luckyNumber = randomNumber;
const luckyColor = ['Red', 'Blue', 'Green', 'Yellow', 'White', 'Orange', 'Pink', 'Purple', 'Black', 'Brown'];
const luckyAnimal = ['Cat', 'Dog', 'Monkey', 'Hamster', 'Mouse', 'Parrot', 'Turtle', 'Lion', 'Hawk', 'Elephant'];

// Function that selects an element for the final message using a random number
const elementSelector = array => {
    let index = randomNumber;
    for(let i = 0; i < array.length; i++) {
        if(array[index] === array[i]) {
            return array[i];
        }
    }
};

// Final function to be called to provide the mixed messages
const dailyLuck = () => {
    console.log("Good day! Today's date and time is " + Date() + "!");
    console.log('Your lucky number for today is ' + luckyNumber + '!');
    console.log('Your lucky color for today is ' + elementSelector(luckyColor) + '!');
    console.log('Finally, your lucky animal for today is ' + elementSelector(luckyAnimal) + '!');
    console.log('Come back tomorrow for more luck!');
};

dailyLuck();