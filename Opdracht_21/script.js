let colors = ["yellow", "blue", "red", "orange"];
let i = 0;

while (colors[i]) {
    console.log(colors[i])
    i++
}

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach(element => console.log(element));


/* 1. Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
    For loop: 3 regels
    While loop: 5 regels
2. Hoeveel regels neemt mijn forEach method in beslag?
    2 regel
3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop?
   Welke methode vind je bijvoorbeeld leesbaar? Waarom?
4. Kun je een array method gebruiken op een object? Het antwoord is nee.
   Looping through the properties of an object:


let colors = {
    color1: "yellow",
    color2: "blue",
    color3: "red",
    color4: "orange",
    color5: "green"
}

Object.keys(colors).forEach((item) => {console.log(colors[item])});
 */