var readlineSync = require("readline-sync");

var score = 0;

//User Input
var username = readlineSync.question("What is your Name ?");

console.log("Welcome "+username+". Do you know Raghav ?");


//Function To Display Quiz And Its Result
function quizTime(ques,ans){
  var userAns = readlineSync.question(ques);

  if(userAns === ans){
    console.log("That's Correct!!!");
    score = score + 1;
  }
  else{
    console.log("Oopss wrong answer");
  }

  console.log("Your Current Score :",score);
  console.log("----------------");
}

//Data For Quiz
var questionSet = [
  {
    question : "What Is My Last Name ?",
    answer : "Heda"
  },
  {
    question : "Where Do I Live ?",
    answer : "Amravati"
  },
  {
    question : "What Is My Favorite Food?",
    answer : "Burger"
  },
  {
    question : "What Is My Favorite Car ?",
    answer : "Rolls Royce Phantom"
  },]

  for(i=0;i<questionSet.length;i++){
    var currentQuestion = questionSet[i];
    quizTime(currentQuestion.question,currentQuestion.answer) 
  }

  console.log(" Wohoo Your Final Score Is :",score)