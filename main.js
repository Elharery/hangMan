// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// get array from letters

let lettersArray = Array.from(letters);

// Select letters Continer
let lettersContiner = document.querySelector(".letters");
// generate letters

lettersArray.forEach((letter) => {
  // creat span
  let span = document.createElement("span");
  // creat letter text
  let spanText = document.createTextNode(letter);
  // appen the letter to span
  span.appendChild(spanText);

  // add class on span
  span.className = "letter-box";

  // append span to the letters continer

  lettersContiner.appendChild(span);
});

//

// object of words + categories

const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
    "HTML",
    "CSS",
    "SCSS",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
    "CreedThree",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
    "MohamedTamer",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar","USA","KSA"],
};

//  get random property

let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
// category
let randomPropName = allKeys[randomPropNumber];

let randomPropValue = words[randomPropName];
// console.log(randomPropValue);

let randomValueNum = Math.floor(Math.random() * randomPropValue.length);

// let randomValueValue = randomPropValue[randomValueNum];
let randomValueValue = randomPropValue[randomValueNum];
// console.log(randomPropValue);
// console.log(randomValueNum);
// set category info

document.querySelector(".game-info .category span").innerHTML = randomPropName;
// + ' '+ randomValueValue
// Show Answer

// select letters guess Element

let lettersGuessContiner = document.querySelector(".letters-guess");

// convert choosen word to array

let lettersAndSpace = Array.from(randomValueValue);

//create spans depend on word

lettersAndSpace.forEach((letter) => {
  // create empty span
  let embtySpan = document.createElement("span");
  // if letter is space
  if (letter === " ") {
    // add class to span
    embtySpan.className = "has-space";
  }
  // append span to the letters guess coniner

  lettersGuessContiner.appendChild(embtySpan);
});

// select guess spans
let guessSpans = document.querySelectorAll(".letters-guess span");
// set wrong attempt
let wrongAttempt = 0;

//selcet draw
let draw = document.querySelector(".hangman-draw")

// handle clicking on letters

// document.addEventListener("click", (e)=>console.log(e.key))

let result = "";
document.addEventListener("click", (e) => {
  let theStatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    // get clicked letter
    let clickedLetter = e.target.innerHTML.toLowerCase();

    // choosen word
    let choosenWord = Array.from(randomValueValue.toLowerCase());
    // let choosenWord = ["p","h", "p"]

    // lettersAndSpace choosen word

    console.log(choosenWord);
    console.log(guessSpans);
    console.log(clickedLetter);
    choosenWord.forEach((wordLetter, wordIndex) => {

      // if clicked letter equal to one of the choosen word letters
      if (clickedLetter == wordLetter) {
        // set status to true
        theStatus = true;
        result += clickedLetter;
        // console.log(`Found At Index Num ${index}`);
        // loop on all guess spans
        guessSpans.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.innerHTML = clickedLetter;
          }
          //
        });
      }

    });
    // outSide Loop
      // 
      //
      // if letter is wrong
      if (!theStatus) {
        // increase the wrong attempt
        wrongAttempt++;
        
        const wrongs = document.querySelector(".wrongs");
        wrongs.innerHTML -= 1;
        // add class wrong On The Draw Element
        
      document.getElementById("fail").play()
      draw.classList.add(`wrong-${wrongAttempt}`)
      // add Fail sound

      // if letter is wrong
      if (wrongAttempt === 8) {
        endGame();
          lettersContiner.classList.add("finished")
          // document.body.style = "overflow : hidden;";

      }
    }
    else if (result.length === choosenWord.length) {
    successGame()
      lettersContiner.classList.add("finished")
      // document.body.style = "overflow : hidden;";
    }
    else {
      document.getElementById("success").play()
    }
        // console.log(theStatus);
      }
    });
    
    // End Game Function
    function successGame() {
      let div = document.createElement("div")
      let divT = document.createTextNode(`BRAVO`)
      //
  div.appendChild(divT)
  div.className = "popup";
  document.getElementById("successed").play()
  //
  document.body.appendChild(div)
}



function endGame() {
  let div = document.createElement("div")
  let divT = document.createTextNode(`Game Over , The Word Is "${randomValueValue}"`)

  //
  div.appendChild(divT)
  div.className = "popup";
  //
  document.getElementById("fail").play()

  document.body.appendChild(div)
}
// console.log(words);
// console.log(allKeys);
// console.log(randomPropNumber);
// console.log(randomPropName);
// console.log(randomPropValue);
// console.log(randomValueNum);
// console.log(randomValueValue);
