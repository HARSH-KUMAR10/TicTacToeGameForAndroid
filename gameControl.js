var butOne,butTwo,butThree,butFour,butFive,butSix,butSeven,butEight,butNine;
var currentChance;

function timer(){
document.getElementById("InstructionsOne").innerHTML="New Game Starts in : ";
var timerNumber = 5;
var x = setInterval(function() {
document.getElementById("HarshTimer").innerHTML=timerNumber;
timerNumber=timerNumber-1;
if(timerNumber<0){
console.log("Timer ends");
clearInterval(x);
location.reload(true);
}
}, 700);
}

function End(x){
document.getElementById("gameInterface").style.display="none";
document.getElementById("Instructions").innerHTML="Player : "+x+" is Winner!";
timer();
}


function gameWinner(){
if((butOne==butTwo) && (butTwo==butThree)){
if(butOne=="X" && butTwo=="X" && butThree=="X"){
End("X");
}
else if(butOne=="O" && butTwo=="O" && butTwo=="O"){
End("O");
}
}

if((butOne==butFour)&&(butFour==butSeven)){
if(butOne=="X" && butFour=="X" && butSeven=="X"){
End("X");
}
else if(butOne=="O" && butFour=="O" && butSeven=="O"){
End("O");
}
}

if((butOne==butFive)&&(butFive==butNine)){
if(butOne=="X" && butFive=="X" && butNine=="X"){
End("X");
}
else if(butOne=="O" && butFive=="O" && butNine=="O"){
End("O");
}
}

if((butTwo==butFive)&&(butFive==butEight)){
if(butTwo=="X" && butFive=="X" && butEight=="X"){
End("X");
}
else if(butTwo=="O" && butFive=="O" && butEight=="O"){
End("O");
}
}

if((butThree==butFive)&&(butFive==butSeven)){
if(butThree=="X" && butFive=="X" && butSeven=="X"){
End("X");
}
else if(butThree=="O" && butFive=="O" && butSeven=="O"){
End("O");
}
}

if((butThree==butSix)&&(butSix==butNine)){
if(butThree=="X" && butSix=="X" && butNine=="X"){
End("X");
}
else if(butThree=="O" && butSix=="O"  && butNine=="O"){
End("O");
}
}

if((butFour==butFive)&&(butFive==butSix)){
if(butFour=="X" && butFive=="X" && butSix=="X"){
End("X");
}
else if(butFour=="O" && butFive=="X" && butSix=="X"){
End("O");
}
}

if((butSeven==butEight)&&(butEight==butNine)){
if(butSeven=="X" && butEight=="X" && butNine=="X"){
End("X");
}
else if(butSeven=="O" && butEight=="O" && butNine=="O"){
End("O");
}
}

}


function initialize(){
butOne="0",butTwo="0",butThree="0",butFour="0",butFive="0",butSix="0",butSeven="0",butEight="0",butNine="0";
currentChance="X";
currentPlayer=1;
document.getElementById("InstructionsOne").innerHTML="Yo Yo";
getStatus();
}


function nextChance(){
if(currentChance==="X"){
currentChance="O";
}
else{
currentChance="X";
}
document.getElementById("Instructions").innerHTML=" Player : "+"("+currentChance+")";
gameWinner();
}


function getStatus(){
butOne = document.getElementById("but1").value;
butTwo = document.getElementById("but2").value;
butThree = document.getElementById("but3").value;
butFour = document.getElementById("but4").value;
butFive = document.getElementById("but5").value;
butSix = document.getElementById("but6").value;
butSeven = document.getElementById("but7").value;
butEight = document.getElementById("but8").value;
butNine = document.getElementById("but9").value;
}

function printingError(){
document.getElementById("Instructions").innerHTML="already filled "+"Player : ("+currentChance+")";
}

function ButOne(){
if(butOne === ''){
document.getElementById("but1").innerHTML = currentChance;
console.log(butOne);
butOne=currentChance;
nextChance();
}
else{
printingError();
}
return true;
}



function ButTwo(){
if(butTwo === ''){
document.getElementById("but2").innerHTML = currentChance;
butTwo=currentChance;
nextChance();
}
else{
printingError();
}
}



function ButThree(){
if(butThree === ''){
document.getElementById("but3").innerHTML = currentChance;
butThree=currentChance;
nextChance();
}
else{
printingError();
}
}



function ButFour(){
if(butFour === ''){
document.getElementById("but4").innerHTML = currentChance;
butFour=currentChance;
nextChance();
}
else{
printingError();
}
}



function ButFive(){
if(butFive === ''){
document.getElementById("but5").innerHTML = currentChance;
butFive=currentChance;
nextChance();
}
else{
printingError();
}
}



function ButSix(){
if(butSix === ''){
document.getElementById("but6").innerHTML = currentChance;
butSix=currentChance;
nextChance();
}
else{
printingError();
}
}



function ButSeven(){
if(butSeven === ''){
document.getElementById("but7").innerHTML = currentChance;
butSeven=currentChance;
nextChance();
}
else{
printingError();
}
}



function ButEight(){
if(butEight === ''){
document.getElementById("but8").innerHTML = currentChance;
butEight=currentChance;
nextChance();
}
else{
printingError();
}
}



function ButNine(){
if(butNine === ''){
document.getElementById("but9").innerHTML = currentChance;
butNine=currentChance;
nextChance();
}
else{
printingError();
}
}
