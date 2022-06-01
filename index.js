// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);


function writeCards(names, event) {
    names = ["Guadalupe", "Ollie", "Aki"]
    const sentCards = []
    for (let i = 0; i < names.length; i++) {
        let event = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        sentCards.push(event);
    }
    return sentCards;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


debugger;

function countDown(i){
    let countDown = i;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}
