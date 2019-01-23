let firstName= "Phuc";
let lastName= "Nguyen";
let age= 33;
let country="Vietnam"

function getPersonInfo(firstName,lastName,age){
    console.log(`I am ${firstName} ${lastName} . I am ${age} years old. I am from Vietnam. `);
}

let fullName = firstName +" " + lastName;

if (firstName.length>7){
    console.log('your fist name is a long name');
} else {
    console.log('your first name is a short name');
}



let sum=0;
function sumOfAllNumbers(number){
 if (number>0){  return sum= sum+number; }
}

let shoppingBasket =["banana","apple","cheese","cake","milk"];
shoppingBasket.forEach(item => {console.log(item.toUpperCase())});

function randomNumbers(){
    let randomArray=[];
    for (let index = 0; index < 7; index++) {
        randomArray[index]=Math.floor(Math.random() * 21)
    }
    return randomArray;
}
randomNumbers();

let person= {
    firstName,
    lastName,
    age,
    country, 
    getPersonInfo : console.log(`I am ${firstName} ${lastName}. I am  ${age} years old. I am from  ${country}.`)
}
 





