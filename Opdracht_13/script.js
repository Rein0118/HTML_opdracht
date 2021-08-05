const age = 30
const isFemale = true
const driverStatus = "bob"
const firstName = "Eline"
const totalAmount = 26

if (age >= 18) {
    console.log("Kom binnen");
} else {
    console.log("Helaas, je bent nog te jong");
}

if (age >= 18 && age <= 25) {
    console.log("Hier heb je 50% korting");
} else {
    console.log("Helaas, geen korting voor jou");
}

if (firstName == "Sarah" || firstName == "Bram") {
    console.log("Mooie naam, hier heb je een gratis biertje");
} else {
    console.log("Helaas, geen gratis bier");
}

if (totalAmount > 100) {
    console.log("Hey Big Spender, hier een gratis fles champagne");
} else if (totalAmount > 50) {
    console.log("Alsjeblieft, gratis portie nachos");
} else if (totalAmount > 25) {
    console.log("Alsjeblieft, gratis (vega)bitterballen");
} else {
    console.log("Bestel meer en krijg gratis extra's");
}

if (isFemale) {
    console.log("Have fun!");
} else {
    console.log("No men allowed");
}

if (driverStatus === "bob") {
    console.log("Drive safe");
} else {
    console.log("Je bent geen bob, je mag niet rijden");
}
