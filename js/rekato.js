// variables we have are the ;var let const

// const firstName = 'tayo';
// let lastName = 'william';
// let age = 20;
// let occupation = 'web developer';

// console.log(firstName,lastName,age,occupation);

// console.log()


// CONDITION
// if
let x = "5";
if(x == 6){
    console.log('correct');
}

// if else
if(x == 8){
    console.log('correct');
}else{
    console.log('INCORRECT');
}

// explaining loose and tight comparison
if(x == 5){
    console.log('correct');
}else{
    console.log('INCORRECT');
}
if(x == 5){
    console.log('correct'); 
}else{
    console.log('INCORRECT');
}

//multiple conditions
// else if
// weather app
let weather = prompt('Enter weather (opt: rain |sunny | snow):').toLowerCase();

if(weather == 'rain'){
    console.log('UMBRELLA');
}else if(weather === 'sunny'){
    console.log('LIGHT CLOTH');
}else if(weather === 'snow'){
    console.log('HEAVY CLOTH');
}else{
    console.log('INVALID INPUT');
}
let x = 10;
let y = 20;
// and operator (AND)
if(x > 5 && y > 15){
    console.log('yes');
}else{
    console.log('no');
}

// TERNARY ?:
x > 5 && y > 15 ? console.log('yes') : console.log('no');
x === 5 ? console.log('yes') : console.log('no');

// switch
let weather = 'snow'

switch((weather).toLowerCase()){
    case 'rain':
        console.log('UMBRELLA');
        break;
        case'sunny':
        console.log('LIGHT CLOTH');
        break;
        case'snow':
        console.log('HEAVY CLOTH');
        break;
        default:
            console.log('INVALID SELECTION');

}