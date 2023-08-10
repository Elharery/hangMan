// add button name
const sub = document.getElementById("sub");
//
let cont = document.querySelector(".cont")
//
const overlay = document.querySelector(".overlay");
//
const userName = document.querySelector(".userName");
//
const userNameInp = document.getElementById("user-name");
//
const error = document.querySelector(".error");
//
let gameInfo = document.querySelector(".game-info")
//
let enterStartGame = document.getElementById("enter-start-game")
//
let body = document.querySelector(".body")
let reg = /\w+/ig;
console.log(reg.test(userNameInp));
// overlay.style.height = "200vh";
sub.onclick = () => {
  if (userNameInp.value) {
    window.sessionStorage.setItem("userName", userNameInp.value);
    // overlay.style.width = "0px";
    poupUser.style.padding = "0px";
    enterStartGame.style.display = "none"
    userName.innerHTML = `Hello: ${sessionStorage.getItem("userName")}`;
    poupUser.style.width = "0px";
    cont.style.width = "1000px";
    sub.parentElement.remove();
  } else {
    error.style.display = "block";
  }
};
userNameInp.oninput = () => {
  error.style.display = "none";
};
if (window.sessionStorage.getItem("userName")) {
  // overlay.style.height = "200vh";
  // overlay.style.width = "0px";
  enterStartGame.style.display = "none"
  cont.style.width = "1000px";
  poupUser.style.width = "0px";
  poupUser.style.padding = "0px";
  userName.innerHTML = `Hello: ${sessionStorage.getItem("userName")}`;
  sub.parentElement.remove();
}


// function userName() {
  //   let div = document.createElement("div")
  //   //
//   let divText = document.createTextNode(`Hello: ${userNameInp.value}`)
//   // 
//   div.appendChild(divText)
//   gameInfo.appendChild(div)

// }
////////////////
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
    "Youssef",
    "koky",
    "farida",
  ],
  countries: [
    "Syria",
    "Palestine",
    "Yemen",
    "Egypt",
    "Bahrain",
    "Qatar",
    "USA",
    "KSA",
  ],
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
    // letter = " "
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
let draw = document.querySelector(".hangman-draw");

// handle clicking on letters

// document.addEventListener("click", (e)=>console.log(e.key))

const wrongs = document.querySelector(".wrongs");
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
    console.log(randomValueValue);
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

      wrongs.innerHTML -= 1;
      // add class wrong On The Draw Element

      document.getElementById("fail").play();
      draw.classList.add(`wrong-${wrongAttempt}`);
      // add Fail sound

      // if letter is wrong
      if (wrongAttempt === 8) {
        endGame();
        lettersContiner.classList.add("finished");
        // document.body.style = "overflow : hidden;";
      }
    } else if (result.length === choosenWord.length) {
      successGame();
      lettersContiner.classList.add("finished");
      // document.body.style = "overflow : hidden;";
    } else {
      document.getElementById("success").play();
    }
    // console.log(theStatus);
  }
});

// End Game Function
// function statues() {
//   let rate = wrongs;
//   const spanWr = document.createElement("span")
//   const spanWrT = document.createTextNode(rate)
//   spanWr.appendChild(spanWrT)
//   if (wrongs >= 5) {
//     spanWrT.innerHTML = "Great"
//   }
// }
function successGame() {
  let div = document.createElement("div");
  let spanBravo = document.createElement("span");
  let spanT = document.createTextNode(`Congratulation: "${sessionStorage.getItem("userName")}"🎉`);
  //
  //
  div.appendChild(spanBravo)
  div.appendChild(spanT)
  // div.appendChild(spanWrT)
  //
  spanBravo.style.display = "block";
  div.className = "popup";
  document.getElementById("successed").play();
  //
  document.body.appendChild(div);
}

function endGame() {
  // if (wrongs.innerHTML == 1) {
    document.getElementById("failed").play();
  // document.getElementById("fail").pused();
  // }
  let div = document.createElement("div");
  let spanBad = document.createElement("span");
  //
  let divT = document.createTextNode(
    `Game Over , The Word Is "${randomValueValue}"`
  );
  //
  const spanSad = document.createElement("span")
  const SadText = document.createTextNode("^_^")
  // 
  //
  spanSad.appendChild(SadText)
  spanBad.appendChild(divT)
  div.appendChild(spanSad)
  div.appendChild(spanBad)
  spanBad.style.display = "block";

  // div.appendChild(divT);
  div.className = "popup";
  //

  document.body.appendChild(div);
}
// console.log(words);
// console.log(allKeys);
// console.log(randomPropNumber);
// console.log(randomPropName);
// console.log(randomPropValue);
// console.log(randomValueNum);
// console.log(randomValueValue);

reset.addEventListener("click", () => {
  sessionStorage.clear();
  location.reload()
})