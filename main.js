// Första uppgift, skriv hello worl i console i inspekt.

console.log("Hello World!");

//Uppgift - Deklarera en variabel age och tilldela din ålder till den. Skriv ut den i konsolen tillsammans med en beskrivning av åldern. Exempelvis, "detta är min ålder...".

let age = 25;
console.log("detta är min ålder", age);

// Deklarera tre variabler med hjälp av de tre olika nyckelorden som vi har lärt oss. Skriv ut dem alla i konsolen. Vad var skillnaden mellan dessa nyckelord?

let variableLet = "I am a viriable declared with let";

var variableVar = "I am a varriable declared var";

const varriableConst = "I am varriable delcared with const";

// Här ska vi logga dom tre alternativen
console.log(variableLet);
console.log(variableVar);
console.log(varriableConst);

// skillnaden av dom är att dom heter, let, var och konst.

//Deklarera tre olika variabler, en av varje datatyp. Tilldela dem värden och logga dem till konsolen i tre olika utskrifter.

//String "Skriv vad du vill i text form"
let emprireArmyString = "This is the Empire Army";
// Skriv enbart siffra
let armySizeNumber = 666;
// kan enbart säga om det är sant eller falskt, i dett fall är arme storleken 666 och då säger vi console.log att det är sant.
let armyCountInBoolean = true;

console.log(emprireArmyString);
console.log(armySizeNumber);
console.log(armyCountInBoolean);

//Uppgift ska det bli fel eller vadå?
const name = "Vincent";
console.log(name);

// Är detta det rätt svaret?
let myName = "Vincent";
console.log(myName);

// vi ger js en siffra (värde)
let stormTrooper1Shot = 10;
let stormTrooper2Shot = 5;
// Här säger vi till js att plussa ihop siffrorna, vi skriver let "sum" sum är namnet på vad js ska läsa in för att få resultatet i consolen, när vi skriver console.log
let sumStormTroopers = stormTrooper1Shot + stormTrooper2Shot;
// svaret ska nu bli 15 i console.log
console.log(
  "These storm troopers are usless, they shot",
  sumStormTroopers,
  "shots and still hit nothing, no wonder why the rebels always wins"
);
