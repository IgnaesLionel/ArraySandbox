// ctrl + alt + f = prettier
///////////////////////////////////////////////////////////////////////////////// A-R-R-A-Y
let heroes = ["Mario","Luigi", "Princess Peach"]
//["Mario","Luigi", "Princess Peach"]

//ajoute 2 elements à la fin du array
heroes.push('Wario', 'Toad')
//["Mario", "Luigi", "Princess Peach", "Wario", "Toad","]

//ajoute 1 elements à la fin,  ancienne méthode
heroes[heroes.length]="Sonic"
//["Mario", "Luigi", "Princess Peach", "Wario", "Toad", "Sonic"]

//retire le denier élement
heroes.pop()
//["Mario", "Luigi", "Princess Peach", "Wario", "Toad"]

//retire le dernier et l'ajoute dans un autre array
let removedHeroFromMyArray = heroes.pop()
//["Mario", "Luigi", "Princess Peach", "Wario"] removedHeroFromMyArray -> "Toad"

//retire le premier élement du debut
heroes.shift() //["Luigi", "Princess Peach", "Wario"]

//ajoute 1 element au debut
heroes.unshift('Sonic') // ["Sonic","Luigi", "Princess Peach", "Wario"]

//retire le premier élement et l'ajoute dans un autre
removedHeroFromMyArray = heroes.shift()
//["Luigi", "Princess Peach", "Wario"]  removedHeroFromMyArray -> "Sonic"

//ajoute 1 élement au debut
heroes.unshift("Mario")
//["Mario","Luigi", "Princess Peach", "Wario"]

//recherche d'un élement
heroes.indexOf("Princess Peach") //return 2
heroes.indexOf("nimportequoi") //return -1 car il ne trouve pas
heroes.lastIndexOf("Princess Peach") //return 2 recherche par la fin

//couper un morceau d'array, départ à 1 et prends 2 cases
heroes.splice(1,2)
//["Mario", "Wario"]

heroes.push("Princess Peach", "Wario")
//["Mario", "wario", "Princess Peach", "Wario"]

//remplace deux élements à partir de l'index1 par deux nouveau
heroes.splice(1,2,"Hiro", "Baymax")
//["Mario", "Hiro", "Baymax", "Wario"]

heroes.push("MegaMan", "Ryu")
// ["Mario", "Hiro", "Baymax", "Wario", "MegaMan", "Ryu"]

//couper deux élement a partir de l'index 4 et les mets dans un nouveau array
const heroesSpliced = heroes.splice(4,2)
// ["Mario", "Hiro", "Baymax", "Wario"]   -> heroesSpliced =  ["MegaMan", "Ryu"]

//copier et colle tout les élements ensemble espacé par une virgule
const heroesJoined = heroes.join(' , ')
//Mario , Hiro , Baymax , Wario   string

//copier un string en élements tableau séparé par une virgule dans un nouveau array
const heroesSplited = heroesJoined.split(' , ')
//["Mario", "Hiro", "Baymax", "Wario"]

//retourne un array completement
heroes.reverse()// ["Wario", "Baymax", "Hiro", "Mario"]
//range l'array en ordre alpha et num
heroes.sort() ///["Baymax", "Hiro", "Mario", "Wario"]
let notSorted = ["z","a","r","A","b"]
notSorted.sort(insensible_a_la_case)
// ["a", "A", "b", "r", "z"]

//Recherche le string Baymax et laisse tous les élements passer sauf celui-ci,  filter peut filtrer du json id:1,
let myFilter = heroes.filter(el => {
  if (el != 'Baymax'){
    return true}})
// ["Hiro", "Mario", "Wario"]

//multiple recherche de filtrage
let myFilter2 = heroes.filter(el => {
  if (el !== 'Baymax' && el !== 'Hiro'){
    return true}})
// ["Mario", "Wario"]

//trier par ordre alpahbétique sans prendre en compte les maj
function insensible_a_la_case (a,b){
  if (a.toUpperCase() < b.toUpperCase()) return -1;
  if (a.toUpperCase() > b.toUpperCase()) return 1;
  return 0
}

//fusion de deux array
const myNewheroes = 'Baby indestructible'
heroes = heroes.concat(myNewheroes)
// ["Baymax", "Hiro", "Mario", "Wario", 'Baby indestructible' ]

//recherche d'une élement
if (heroes.includes("Baby indestructible" )) {} //action

// forEach
// copie d'une tableau
let outside = []
heroes.forEach(function (hero){outside.push(hero)})
//["Baymax", "Hiro", "Mario", "Wario", "Baby indestructible"]

//// copie d'une tableau et mise en MAJ
outside = []
heroes.forEach(function (hero){outside.push(hero.toUpperCase())})
// ["BAYMAX", "HIRO", "MARIO", "WARIO", "BABY INDESTRUCTIBLE"]

// copie d'une tableau et mise en minuscule
outside = []
heroes.forEach(function (hero){outside.push(hero.toLowerCase())})
//  ["baymax", "hiro", "mario", "wario", "baby indestructible"]

// copie d'une tableau et rajout de l'index à coté
outside = []
heroes.forEach(function (hero, index){outside.push(hero.toLowerCase() + " " + index)})  
//["baymax 0", "hiro 1", "mario 2", "wario 3", "baby indestructible 4"]

// copie d'une tableau et rajout de l'index et total
outside = []
heroes.forEach(function (hero, index, array){outside.push(`${index + 1}/${array.length} ${hero}`)})
//["1/5 Baymax", "2/5 Hiro", "3/5 Mario", "4/5 Wario", "5/5 Baby indestructible"]

// Fait le total de chaque chiffre d'un tableau de chiffre-
const myNumbers= [4, 9, 16, 25, 54]
let sum = 0
myNumbers.forEach( (myNumber) => sum += myNumber)
//console.log(sum) // 108

// cherche l'élement soumis a une condition
let found = myNumbers.find(number => number > 34) //54

const map1 = myNumbers.map(x => x * 2)
//[8, 18, 32, 50, 108]
const map2 = myNumbers.map(Math.sqrt);
//[2, 3, 4, 5, 7.3484692283495345]

//mettre chaque élement dans des balises
const items = myNumbers.map(n => '<li>' + n + '</li>')
// ["<li>4</li>", "<li>9</li>", "<li>16</li>", "<li>25</li>", "<li>54</li>"]
const html = '<ul>' + items.join("") + '</ul>'
//<ul><li>4</li><li>9</li><li>16</li><li>25</li><li>54</li></ul>


//-------------STRING  Maj Minus replacement trim éparpillement en array et recollage
let bighero6 = "Big Hero 6 est une équipe de super-héros évoluant dans l'univers Marvel"
bighero6 = bighero6.toUpperCase()
//BIG HERO 6 EST UNE ÉQUIPE DE SUPER-HÉROS ÉVOLUANT DANS L'UNIVERS MARVEL
bighero6 = bighero6.toLowerCase()
//big hero 6 est une équipe de super-héros évoluant dans l'univers marvel
bighero6 = bighero6.replace("équipe", 'team');
//big hero 6 est une team de super-héros évoluant dans l'univers marvel
bighero6 = "      Big Hero 6 est une team de Super-héros évoluant dans l'Univers Marvel    "
bighero6 = bighero6.trim()
//"Big Hero 6 est une team de Super-héros évoluant dans l'Univers Marvel"//
bighero6 = bighero6.split ('') // ["B", "i", "g", " ", "H", "e", "r", "o", "...]
bighero6 = bighero6.join('') // Big Hero 6 est une team de Super-héros évoluant dans l'Univers Marvel


let findMyWord = []
findMyWord = bighero6.search("team") // 19  mot qui commence a l'index 19

findMyWord = []
findMyWord = bighero6.charAt(19) // t  lettre a l'index 19
findMyWord = []
findMyWord = bighero6.indexOf("Super-héros"); //29 mot à l'index 29 en commençant par le début ------> return -1 si il ne trouve pas
findMyWord = []
findMyWord = bighero6.lastIndexOf("une");    //15 mot à l'index 15 en commençant par la fin
findMyWord = []
findMyWord = bighero6.match(/[A-Z]/g); //["B", "H", "S", "U", "M"]  retrouve les Majuscules -> array
findMyWord = []
findMyWord = typeof bighero6; // string

let objectString = new String('voici un object')
//console.log(typeof objectString); // return Object
objectString= objectString.valueOf(); // valueOf() renvoie la valeur primitive de l'objet String. object string -> string //Big Hero 6 est une team de Super-héros évoluant dans l'Univers Marvel
//console.log(typeof objectString); //  return string

//Creation d'un text et insertion DOM
//  createElement -> innerHtlm ou textContent -> appendChild Méthode brutal
//                -> Var 2 document.createTextNode ("bla") -> var1 appendchild(var2) Méthode plus propre

//insertion d'un array sur le DOM
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

// tableaux objects date regex fonction utilisent des pointeurs
let a = ["mon","tableau"]
let b = a
a.push("de reference est la variable a")
//console.log(b)// ["mon", "tableau", "de reference"]


// les objets fonctionnent par pointeurs
  let personne = {
      nom_complet: "William Fontaine",
      age: 32,
      administrateur: false
  };

  let personne2 = personne;
  personne2.age = 36;
//  console.log(personne); //{nom_complet: "William Fontaine", age: 36, administrateur: false}



//Object
let myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise",
  props : "not human"
};

myObj.props // "not human"
myObj["Space Name"] //"Kirk",

///////////////////////////
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
/////////////////////////////



// Number <-> string
let myNumber = 12.95 // est un nombre
myNumber = parseInt(myNumber) //12 retire les chiffres apres la virgule, sans arrondir
myNumber=myNumber.toString //"12" transforme en string
myNumber="12.95651" // est un string
myNumber = parseFloat(myNumber) //12.95651 transforme en number
myNumber = myNumber.replace('.', ""); // retire le point ou tout autre symbol //1295651
console.log ()



/////////////////////////////////////// BOUCLES

let mesClients = ['Sara', 'Connor', 'James', 'Dean']

//boucle dans l'ordre mais avec possibilité de changer d'ordre
for (let i=0; i<mesClients.length;i++){
//  console.log ("Bonjour" + mesClients[i] + "!")
}

// Boucle dans l'ordre
mesClients.forEach(function(nom){
  //console.log("Bonjour " + nom + "!")
})


/////////////////////////////////// regex https://regexlib.com/?AspxAutoDetectCookieSupport=1

var maChaine ="Bonjour tout le monde !"
var monRegExp = /on/g;  // mot // g=toute la chaine i=pas de Case maj/minus
//^Bonjour //Bonjour$

//console.log(monRegExp.test(maChaine)) //return true


//////////////////////

let nombreAleatoire = Math.floor(Math.random()*100) +1;  // entre 1 et 100

///////////////////// functions
//calcule la somme peut importe le nombre d'arguments
let somme = 0
function calculerSomme(a,b){
   let mesArguments = Array.prototype.slice.apply(arguments) // crée un tableau avec les arguments
   //[9, 3, 4, 1, 10]
   mesArguments.sort() // le tri par ordre numérique
   //[1, 10, 3, 4, 9]

  for (let i=0; i < arguments.length; i++){
    somme += arguments[i];
}
return somme
}
let maSomme = calculerSomme(9,3,4,1,10) //27
//////////////////////


/// fonction avec 2 sortie grace a return vers un object
function add_soust(valeur1,valeur2){
  var somme = valeur1 + valeur2;
  var difference = valeur1 -valeur2;
  return {somme : somme, difference : difference};
}
let resultat = add_soust(15,40)// {somme: 55, difference: -25}
//console.log (resultat.somme) // 55
//console.log (resultat.difference) // -25

/// fonction avec 2 sortie grace a return vers un Array
function add_soust2(valeur1, valeur2) {
    var somme = valeur1 + valeur2;
    var difference = valeur1 - valeur2;
    return [somme, difference];
}

var resultat3 = add_soust2(10, 5);
//console.log("Somme: " + resultat3[0]);
//console.log("Différence: " + resultat3[1]);


// Pour sortir une variable d'une fonction vers le objet global
//Variable globale en Javascript window.nomDeLaVariable
//Variable globale en Node.js global.nomDeLaVariable


function moyenne(arg) {
      let resultat = 0
      for (let i = 0; i<arg.length; i++){
        resultat += arg[i];
      }
      return resultat/ mesNotes.length
}
var mesNotes = [12, 14, 16];
let resultatNotes =  moyenne(mesNotes)
//console.log ('--->' + resultatNotes)

////// emballage de balise

function balise_HTML(balise){
  function emballer_text(text){
  //  console.log("<" + balise + ">" + text + "</" + balise + ">")
  }
  return emballer_text
}

let afficher_H1 = balise_HTML("h1")
//console.log (afficher_H1)
afficher_H1("ceci est mon premier titre")

///////// Compte à rebours

function compte_a_rebours(nombre){
  for (let i=nombre; i>0; i--)
  {
  //  console.log (i)
  }
  //console.log("Terminé")
}

compte_a_rebours(5)

//////////////////////////////////////// OBJECT
let neo = {
  name : "Thomas Anderson",
  age : 32,
  town : "Sion"
}
//ajout d'une props
neo.onBoard=true;
//delete d'une props
delete neo.onBoard

// boucle for in sur un objet
 for (var cle in neo){
   //console.log(cle, neo[cle])
 }


 var personneForIn = {
     nom_complet: "François chaloux",
     age: 32,
     administrateur: false,
     ville: "Paris"
 };

 for( var prop in personneForIn) {
  //   console.log(prop + " " +personneForIn[prop]);
 }

 // BOUCLE LI DANS UL -> OBJECT NAME : VALUE
 // for (let [level, value] of Object.entries(NOM DE MON OBJECT)){
 //
 //   const targetDowLevels = document.getElementById('dowLevels');
 //   let dowli = document.createElement('li');
 //   let clone = dowli.cloneNode();
 //   clone = dowli.cloneNode();
 //   clone.textContent = `${level} = ${value}`;
 //   targetDowLevels.appendChild(clone);
 // }

 // BOUCLE LI DANS UL -> ARRAY VALUE
 //
 // // Affichage des levels sur le DOM
 //     const targetDowLevels = document.getElementById('dowLevels')
 //     let dowli = document.createElement('li')
 //     let clone = dowli.cloneNode()
 //     myDowLevels.forEach(function (level) {
 //     clone = dowli.cloneNode();
 //     clone.textContent = level;
 //     targetDowLevels.appendChild(clone);
 //     });
 // //


//increment and decrement operators
let score = 10;
score; //10
score++; //score +1 : opérateur d'incrémentation, pas d'espace entre l'opérateur et la variable
score; //11
++score; //score +1
score; //12
let resultat2 = score++ * 2;
score; //13
resultat2; //24 et non 26 car l'incrémentation à la variable se fait après l'opération, i.e. 12x2=24 puis 12+1=13
score = 12;
resultat2 = ++score * 2;
score; //13
resultat2; //26 car em plaçant l'incrémentation avant la variable (++score) l'incrémentation a lieu avant la multiplication par 2, soit 12+1 = 13 * 2 = 26.
score--;
score; //12
--score; //même chose pour décrementer, on peut placer l'opérateur avant ou après la variable (sans espace) en tenant compte de l'ordre de l'opération et le résultat que l'on prétend
score; //11

//For..in
var mesClients2 = ["Sara", "Francis", "Robert", "Alpha"];
for(var index in mesClients2) {
  //  console.log(index + " est " + mesClients2[index]);
  }


// Boucler à travers un tableau à deux dimensions
  var formations = [
      ["Les fondamentaux d'AngularJS", "François"],
      ["Découverte de jQuery UI", "Robert"],
      ["Node.js, le JavaScript coté serveur", "François"],
      ["Introduction à ECMAScript 6", "Alpha"]
  ];

  for(var i = 0; i < formations.length; i++) {
      //console.log(formations[i][0] + " par " + formations[i][1]);
  }

// si la 3eme arguments n'est pas rempli -> undefined -> ajoute m²
  function calculerSuperficieRectangle(longueur, largeur, unite) {
    unite = (unite === undefined) ? "m²" : unite;
    var resultat = longueur * largeur;
    //console.log(resultat + unite);
  }

  calculerSuperficieRectangle(6, 5);



  //////////////// PROMISE
  const myPromise = new Promise((resolve, reject) =>{
    const isRunning = true
    if (isRunning === true) {
      resolve() //meme nom que param1
    }else {
      reject() //meme nom que param2
    }
  })
  myPromise.then(()=> {console.log("running")}).catch(() =>{console.log("fail")})

  //////////////////////////////
  const calcul = (num1, num2) => {
    return new Promise((resolve, reject) => {
    const result = num1 * num2
    if (result > 1000) {
      resolve(result) //meme nom que param1 (callback resolve -> result)
    }else {
      reject('resultat trop petit') //meme nom que param2
    }
    })
  }

  calcul(3, 9).then((resultRes) => { // recup callback du resolve
    console.log('Resultat: ' + resultRes)
  }).catch((resultErr) => {    // recup callback du reject
    console.log('Error :' + resultErr)
  })
