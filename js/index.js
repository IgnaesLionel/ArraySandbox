// A-R-R-A-Y

let heroes = ["Mario","Luigi", "Princess Peach"]
heroes.push('Wario', 'Toad') //["Mario", "Luigi", "Princess Peach", "Wario", "Toad","]
heroes[heroes.length]="Sonic" //["Mario", "Luigi", "Princess Peach", "Wario", "Toad", "Sonic"]

heroes.pop() //["Mario", "Luigi", "Princess Peach", "Wario", "Toad"]
let removedHeroFromMyArray = heroes.pop() // heroes -> ["Mario", "Luigi", "Princess Peach", "Wario"] removedHeroFromMyArray -> "Toad"

heroes.shift() //["Luigi", "Princess Peach", "Wario"]
heroes.push('Sonic') // ["Sonic","Luigi", "Princess Peach", "Wario"]

removedHeroFromMyArray = heroes.shift()  // heroes -> ["Luigi", "Princess Peach", "Wario"]  removedHeroFromMyArray -> "Sonic"

heroes.unshift("Mario") //["Mario","Luigi", "Princess Peach", "Wario"]

heroes.indexOf("Princess Peach") //return 2
heroes.lastIndexOf("Princess Peach") //return 2 recherche par la fin

heroes.splice(1,2) //["Mario", "Wario"]
heroes.push("Princess Peach", "Wario") //["Mario", "wario", "Princess Peach", "wario"]
heroes.splice(1,2,"Hiro", "Baymax") //["Mario", "Hiro", "Baymax", "Wario"]   pos1 nb2

const mySlicedArray = heroes.slice(2,4) //["Baymax", "Wario"] [2] et [3] sans [4]
const heroesJoined = heroes.join(' , ') //Mario , Hiro , Baymax , Wario
const heroesSplited = heroesJoined.split(' , ')//["Mario", "Hiro", "Baymax", "Wario"]

heroes.reverse()// ["Wario", "Baymax", "Hiro", "Mario"]
heroes.sort() ///["Baymax", "Hiro", "Mario", "Wario"]

const myNewheroes = 'Baby indestructible'
const heroesConcatened = heroes.concat(myNewheroes) // ["Baymax", "Hiro", "Mario", "Wario", 'Baby indestructible' ]

// forEach
let outside = []
heroes.forEach(function (hero){outside.push(hero)}) // ["Baymax", "Hiro", "Mario", "Wario"]
outside = []
heroes.forEach(function (hero){outside.push(hero.toUpperCase())}) // ["BAYMAX", "HIRO", "MARIO", "WARIO"]
outside = []
heroes.forEach(function (hero){outside.push(hero.toLowerCase())}) //  ["baymax", "hiro", "mario", "wario"]
outside = []
heroes.forEach(function (hero, index){outside.push(hero.toLowerCase() + " " + index)}) //["baymax 0", "hiro 1", "mario 2", "wario 3"]
outside = []
heroes.forEach(function (hero, index, array){outside.push(`${index + 1}/${array.length} ${hero}`)})   //["1/4 Baymax", "2/4 Hiro", "3/4 Mario", "4/4 Wario"]


//------------------
const myNumbers= [4, 9, 16, 25, 54]
let sum = 0
myNumbers.forEach( (myNumber) => sum += myNumber)
//console.log(sum) // 108
let found = myNumbers.find(number => number > 34) //54

const map1 = myNumbers.map(x => x * 2)  //[8, 18, 32, 50, 108]
const map2 = myNumbers.map(Math.sqrt); //[2, 3, 4, 5, 7.3484692283495345]
const items = myNumbers.map(n => '<li>' + n + '</li>')
const html = '<ul>' + items.join("") + '</ul>'
//console.log (html)


//-------------STRING  Maj Minus replacement trim éparpillement en array et recollage
let bighero6 = "Big Hero 6 est une équipe de super-héros évoluant dans l'univers Marvel"
bighero6 = bighero6.toUpperCase() //BIG HERO 6 EST UNE ÉQUIPE DE SUPER-HÉROS ÉVOLUANT DANS L'UNIVERS MARVEL
bighero6 = bighero6.toLowerCase() //big hero 6 est une équipe de super-héros évoluant dans l'univers marvel
bighero6 = bighero6.replace("équipe", 'team'); //big hero 6 est une team de super-héros évoluant dans l'univers marvel
bighero6 = "      Big Hero 6 est une team de Super-héros évoluant dans l'Univers Marvel    "
bighero6 = bighero6.trim() //"Big Hero 6 est une team de Super-héros évoluant dans l'Univers Marvel"//
bighero6 = bighero6.split ('') // ["B", "i", "g", " ", "H", "e", "r", "o", "...]
bighero6 = bighero6.join('') // Big Hero 6 est une team de Super-héros évoluant dans l'Univers Marvel


let findMyDog = []
findMyDog = bighero6.search("team") // 19  mot qui commence a l'index 19

findMyDog = []
findMyDog = bighero6.charAt(19) // t  lettre a l'index 19
findMyDog = []
findMyDog=bighero6.indexOf("Super-héros"); //29 mot à l'index 29 en commençant par le début
findMyDog = []
findMyDog = bighero6.lastIndexOf("une");    //15 mot à l'index 15 en commençant par la fin
findMyDog = []
findMyDog = bighero6.match(/[A-Z]/g); //["B", "H", "S", "U", "M"]  retrouve les Majuscules -> array
findMyDog = []
findMyDog = typeof bighero6; // string
findMyDog = []
let objectString = new String('voici un object')
//console.log(typeof objectString); // return Object
objectString= objectString.valueOf(); // valueOf() renvoie la valeur primitive de l'objet String. object string -> string //Big Hero 6 est une team de Super-héros évoluant dans l'Univers Marvel
//console.log(typeof objectString); //  return string


//  createElement -> innerHtlm ou textContent -> appendChild Méthode brutal
//                -> Var 2 document.createTextNode ("bla") -> var1 appendchild(var2) Méthode plus propre

const here = document.getElementById("here")
const li_heroes = document.createElement('li')
li_heroes.textContent=heroes
here.appendChild(li_heroes)



// REFERENCE
// number et string n'utilise pas de reference.
let x = 20
let y = x
x= 22
//console.log(y) //20  pas de reference
// object
let a = ["mon","tableau"]
let b = a
a.push("ici")
//console.log(b)// ["mon", "tableau", "reference"]


//Object

let myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise",
  props : "not human"
};

myObj.props // "not human"
myObj["Space Name"] //"Kirk",

// trouver la longueur du plus grand mot
function findLongestWordLength(str) {
  var words = str.split(' ');
  var maxLength = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}
  //return str.length;
let findLongest= findLongestWordLength("The quick brown fox jumped over the lazy dog"); //retourn 6 -> jumped

// Number <-> string
let myNumber = 12.95
myNumber = parseInt(myNumber) //12 number
myNumber=myNumber.toString //"12" string
myNumber="12.95"
myNumber = parseFloat(myNumber) //12.95 number
