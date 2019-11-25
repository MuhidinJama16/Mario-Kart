// TITLE
"use strict";

// Global Varibles
let numBanana = 0;
let numShell = 0;
let numStar = 0;
let numMushroom = 0;
let numBullet = 0;

// Event Listeners
document.getElementById("mainImg").addEventListener("click", useItem);

// Event Function
function useItem() {
  // Generate a random number
  let randItem = Math.random(); // Random decimal from 0 up to 1
  console.log(randItem);
  // for a golden mushroom to appear, what would randNum have to be? 0.10

  // Simulate Results
    if (randItem < 0.25) {
        console.log("Green Shell");
        numShell++;
        document.getElementById("shell").innerHTML = numShell;
        document.getElementById("results").innerHTML += '<img src="images/GreenShell.png">';
    } else if (randItem < 0.50) {
        console.log("Banana");
        numBanana++;
        document.getElementById("banana").innerHTML = numBanana;
        document.getElementById("results").innerHTML += '<img src="images/Banana.png">';
    } else if (randItem < 0.70) {
        console.log("Bullet Bill");
      numBullet++;
      document.getElementById("bullet").innerHTML = numBullet;
      document.getElementById("results").innerHTML += '<img src="images/Bullet-Bill.jpg">';
    } else if (randItem < 0.85) {
      console.log("Golden Mushroom");
      numMushroom++;
      document.getElementById("g-mushroom").innerHTML = numMushroom;
      document.getElementById("results").innerHTML += '<img src="images/GoldenMushroom.png">';
    } else {
      console.log("Star");
        numStar++;
        document.getElementById("star").innerHTML = numStar;
        document.getElementById("results").innerHTML += '<img src="images/SuperStar.png">';
    }
}
