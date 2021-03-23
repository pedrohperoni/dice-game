let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

let streak = [];


play = () => {

  let number1 = Math.floor(Math.random() * 6) + 1;
  let number2 = Math.floor(Math.random() * 6) + 1;

  let image1 = "images/dice" + number1 + ".png";
  let image2 = "images/dice" + number2 + ".png";

  document.querySelectorAll('img')[0].setAttribute("src", image1);
  document.querySelectorAll('img')[1].setAttribute("src", image2);

  // title

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

  // change button text

  document.querySelector("button").innerHTML = "PLAY AGAIN"

  // add to the counter

}
