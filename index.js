let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

let streak = [];


play = () => {

  // roll a number and get the corresponding image

  let number1 = Math.floor(Math.random() * 6) + 1;
  let number2 = Math.floor(Math.random() * 6) + 1;

  let image1 = "images/dice" + number1 + ".png";
  let image2 = "images/dice" + number2 + ".png";

  document.querySelectorAll('img')[0].setAttribute("src", image1);
  document.querySelectorAll('img')[1].setAttribute("src", image2);

  // change the title

  if (number1 > number2) {
    document.querySelector("h1").innerHTML = "RED Wins!"
    counter1++
    streak.push("red");

  } else if (number2 > number1) {
    document.querySelector("h1").innerHTML = "BLUE Wins!"
    counter2++
    streak.push("blue");
  } else {
    document.querySelector("h1").innerHTML = "Draw!"
    streak.push("draw")
    counter3++
  };

  document.querySelector(".p1").innerHTML = "Red: " + counter1;
  document.querySelector(".p2").innerHTML = "Blue: " + counter2;
  document.querySelector(".draw").innerHTML = "No Winner: " + counter3;
  document.querySelector(".l10").innerHTML = "Last 10"


if (streak[streak.length-1] == "red"){
  document.querySelector(".box1").style.backgroundColor = "#FF4136"
} else if (streak[streak.length-1] == "blue") {
  document.querySelector(".box1").style.backgroundColor = "#357EDD"
} else {
  document.querySelector(".box1").style.backgroundColor = "#092532"
}

if (streak[streak.length-2] == "red"){
  document.querySelector(".box2").style.backgroundColor = "#FF4136"
} else if (streak[streak.length-2] == "blue") {
  document.querySelector(".box2").style.backgroundColor = "#357EDD"
} else {
  document.querySelector(".box2").style.backgroundColor = "#092532"
}


if (streak[streak.length-3] == "red"){
  document.querySelector(".box3").style.backgroundColor = "#FF4136"
} else if (streak[streak.length-3] == "blue") {
  document.querySelector(".box3").style.backgroundColor = "#357EDD"
} else {
  document.querySelector(".box3").style.backgroundColor = "#092532"
}


if (streak[streak.length-4] == "red"){
  document.querySelector(".box4").style.backgroundColor = "#FF4136"
} else if (streak[streak.length-4] == "blue") {
  document.querySelector(".box4").style.backgroundColor = "#357EDD"
} else {
  document.querySelector(".box4").style.backgroundColor = "#092532"
}


if (streak[streak.length-5] == "red"){
  document.querySelector(".box5").style.backgroundColor = "#FF4136"
} else if (streak[streak.length-5] == "blue") {
  document.querySelector(".box5").style.backgroundColor = "#357EDD"
} else {
  document.querySelector(".box5").style.backgroundColor = "#092532"
}


if (streak[streak.length-6] == "red"){
  document.querySelector(".box6").style.backgroundColor = "#FF4136"
} else if (streak[streak.length-6] == "blue") {
  document.querySelector(".box6").style.backgroundColor = "#357EDD"
} else {
  document.querySelector(".box6").style.backgroundColor = "#092532"
}


if (streak[streak.length-7] == "red"){
  document.querySelector(".box7").style.backgroundColor = "#FF4136"
} else if (streak[streak.length-7] == "blue") {
  document.querySelector(".box7").style.backgroundColor = "#357EDD"
} else {
  document.querySelector(".box7").style.backgroundColor = "#092532"
}


if (streak[streak.length-8] == "red"){
  document.querySelector(".box8").style.backgroundColor = "#FF4136"
} else if (streak[streak.length-8] == "blue") {
  document.querySelector(".box8").style.backgroundColor = "#357EDD"
} else {
  document.querySelector(".box8").style.backgroundColor = "#092532"
}


if (streak[streak.length-9] == "red"){
  document.querySelector(".box9").style.backgroundColor = "#FF4136"
} else if (streak[streak.length-9] == "blue") {
  document.querySelector(".box9").style.backgroundColor = "#357EDD"
} else {
  document.querySelector(".box9").style.backgroundColor = "#092532"
}


if (streak[streak.length-10] == "red"){
  document.querySelector(".box10").style.backgroundColor = "#FF4136"
} else if (streak[streak.length-10] == "blue") {
  document.querySelector(".box10").style.backgroundColor = "#357EDD"
} else {
  document.querySelector(".box10").style.backgroundColor = "#092532"
}



  // change button text

  document.querySelector("button").innerHTML = "PLAY AGAIN"

  // add to the counter

}
