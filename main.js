// const overlay = document.querySelector(".overlay");
// //
// const userName = document.querySelector(".userName");
// //
// const userNameInp = document.getElementById("user-name");
// //
// const error = document.querySelector(".error");
// //
// let gameInfo = document.querySelector(".game-info");
// //
// let enterStartGame = document.getElementById("enter-start-game");
// //
// let body = document.querySelector(".body");
// let reg = /\w+/gi;
// let reged = reg.test(userNameInp);
// console.log(reg.test(userNameInp));
// sub.onclick = () => {
  //   if (userNameInp.value) {
//     location.reload();
//     //
//     window.sessionStorage.setItem("userName", userNameInp.value);
//     // overlay.style.width = "0px";
//     poupUser.style.padding = "0px";
//     enterStartGame.style.display = "none";
//     error.style.display = "none";
//     userName.innerHTML = `Hello: ${sessionStorage.getItem("userName")}`;
//     poupUser.style.width = "0px";
//     cont.style.width = "1000px";
//     sub.parentElement.remove();
//   } else {
  //     error.style.display = "block";
  //   }
// };
// userNameInp.oninput = () => {
  //   error.style.display = "none";
  // };
// // add button name
// const sub = document.getElementById("sub");
// //
// let cont = document.querySelector(".cont");
// //
let closeAndOpen  = document.querySelector(".close")

closeAndOpen.onclick = () => {
  if (lettersContiner.style.height != "0px") {
    console.log(true);
    lettersContiner.style.height = "0px";
    lettersContiner.style.padding = "0px";
    dropAndUp.style.rotate = "180deg";
  } else {
    lettersContiner.style.height = "fit-content";
    lettersContiner.style.padding = "15px";
    dropAndUp.style.rotate = "0deg";
  }
}

//
let winsCounter = document.querySelector(".wins-counter");
// //


const timer = document.querySelector(".count-time");
const count = setInterval(countTime, 1000);

function countTime() {
  if (timer.innerHTML !== "0") {
    timer.innerHTML--;
  }
  if (timer.innerHTML <= "10") {
    timer.style.animationName = "redAnimated";
  }
  if (timer.innerHTML === "0") {
    timer.style.animationName = "none";
    // add edit
    clearInterval(count);
    endGame();
  }/////////////////////////////////////////////////////////////////////////////////
}
// if (window.sessionStorage.getItem("userName")) {
//   // overlay.style.height = "200vh";
//   // overlay.style.width = "0px";
//   error.style.display = "none";
//   enterStartGame.style.display = "none";
//   cont.style.width = "1000px";
//   poupUser.style.width = "0px";
//   poupUser.style.padding = "0px";
//   userName.innerHTML = `Hello: ${sessionStorage.getItem("userName")}`;
//   sub.parentElement.remove();
// }
////////////

////////////
// document.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     sub.click();
//   }
// });

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
// console.log(lettersContiner);

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
    // "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Michael",
    "john",
    "Robert",
    "David",
    "Wiliam",
    "Thomas",
    "Elzero",
    "Messi"
    // ""
    // "Mahatma Ghandi",
    // "Mohamed Tamer",
    // "Ahmed Zewail",
    // "Mostafa El Sayed",
    // "Elon Mask",
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
    "Dubai",
    "Emirates"
  ],
  cars: [
    "Bmw",
    "Fiat",
    "Hyundai",
    "Chevrolet",
    "Toyota",
    "Mitsubishi",
    "Nissan",
    "Kia",
    // "MercedesBenz",
    "Gelly",
    "Mg",
    "Jeep",
    "Suzuki",
    "Proton",
    "Ferrari",
    "Citroen",
    "Audi",
    "Chery",
    "Ford",
    "Peugeot",
    "Porsche",
    "Bentley",
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

let randomValueValue = randomPropValue[randomValueNum];
// console.log(`allkeys: ${allKeys}`);
// console.log(`randomPropNumber: ${randomPropNumber}`);
// console.log(`randomPropName: ${randomPropName}`);
// console.log(`randomPropValue: ${randomPropValue}`);
// console.log(` randomValueNum: ${randomValueNum}`);
// console.log(`randomValueValue: ${randomValueValue}`);
// let randomValueValue = "MercedesBenz";
// let randomValueValue = "php";
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
    embtySpan.className = "has-space"; // with space
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

document.getElementById("length").innerHTML = guessSpans.length;
const wrongs = document.querySelector(".wrongs");
let result = "";
document.addEventListener("click", (e) => {
  let theStatus = false;
  
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked")
    // get clicked letter
    let clickedLetter = e.target.innerHTML.toLowerCase();
    // choosen word
    let choosenWord = Array.from(randomValueValue.toLowerCase());
    // e.target.classList.add("clicked");
    // let choosenWord = ["p","h", "p"]
    // lettersAndSpace choosen word
    choosenWord.forEach((wordLetter, wordIndex) => {
      // if clicked letter equal to one of the choosen word letters
      if (clickedLetter == wordLetter) {
        if (clickedLetter === wordLetter) {
          e.target.className = "letter-box true";
        }
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
        // e.target.classList.remove("true")
    });
    // outSide Loop
    //
    //
    // if letter is wrong
    if (!theStatus) {
      // increase the wrong attempt
      wrongAttempt++;
      wrongs.innerHTML++;
      wrongs.style.backgroundColor = "#f00";
      // add class wrong On The Draw Element
      document.getElementById("fail").play();
      draw.classList.add(`wrong-${wrongAttempt}`);
      // if letter is wrong
      if (wrongAttempt === 8) {
        endGame();
        lettersContiner.classList.add("finished");
        // document.body.style = "overflow : hidden;";
      }
    } else if (result.length === choosenWord.length) {
      document.getElementById("length").innerHTML = 0
      successGame();
      lettersContiner.classList.add("finished");
    } else {
      // document.getElementById("length").innerHTML--;
      winsCounter.style.backgroundColor = "rgb(124, 209, 174)";
      winsCounter.innerHTML++;
      document.getElementById("success").play();
    }
    // console.log(theStatus);
  }
});
// -------------------------------------------------------------------------Functions-------------------------------------------------------------------------------
function successGame() {
  clearInterval(count);
  document.body.style.overflow = "hidden";
  let parent = document.createElement("div");
  parent.className = "parent";
  let div = document.createElement("div");
  let spanBravo = document.createElement("span");
  let spanT = document.createTextNode(
    `Congratulation: "${sessionStorage.getItem("UserName") || "Unkown"}"🎉`
  );
  let word = document.createElement("span");
  let wordT = document.createTextNode(`The Word Is "${randomValueValue}"`);
  //
  //
  div.appendChild(spanBravo);
  spanBravo.appendChild(spanT);
  div.appendChild(word);
  word.appendChild(wordT);
  //
  spanBravo.style.display = "block";
  word.style.display = "block";
  div.className = "popup";
  document.getElementById("successed").play();
  //add button
  let btn = document.createElement("button");
  let playAgain = document.createTextNode("Play Again");
  btn.id = "playAgain";
  btn.onclick = () => {
    location.reload();
  };
  div.appendChild(btn);
  btn.appendChild(playAgain);
  //
  parent.appendChild(div);
  document.body.appendChild(parent);
}

function endGame() {
  clearInterval(count)
  document.body.style.overflow = "hidden";
  document.getElementById("length").innerHTML = 0
  document.getElementById("failed").play();
  let parent = document.createElement("div");
  parent.className = "parent";
  // document.getElementById("fail").pause();
  // document.getElementById("fail").currentTime = 0; // stop the sound
  let div = document.createElement("div");
  let spanBad = document.createElement("span");
  //
  let divT = document.createTextNode(
    `Game Over , The Word Is "${randomValueValue}"`
  );
  //
  const spanSad = document.createElement("span");
  const SadText = document.createTextNode("^_^");
  //
  //
  spanSad.appendChild(SadText);
  spanBad.appendChild(divT);
  div.appendChild(spanSad);
  div.appendChild(spanBad);
  spanBad.style.display = "block";
  // div.appendChild(divT);
  div.className = "popup";
  // add button
  let btn = document.createElement("button");
  let playAgain = document.createTextNode("Play Again");
  btn.id = "playAgain";
  btn.onclick = () => {
    location.reload();
  };
  div.appendChild(btn);
  btn.appendChild(playAgain);
  //
  parent.appendChild(div);
  document.body.appendChild(parent);
}
// add user name

const userNameValue = document.getElementById("userName");
const inputValue = document.getElementById("user-name");
const submit = document.getElementById("submit")


submit.addEventListener("click", () => {
  if (inputValue.value === "") {
    alert("Please Fill Input")
  } else {
    

    window.sessionStorage.setItem("UserName", inputValue.value)
    location.reload()
    document.getElementById("logout").style.display = "flex";
    userNameValue.innerHTML = `Hello: ${inputValue.value}`
    submit.parentElement.remove()
  }
})

// inputValue.oninput = () => {
// }
if (window.sessionStorage.getItem("UserName")) {
  document.getElementById("logout").style.display = "block";
  userNameValue.innerHTML = `Hello: ${window.sessionStorage.getItem("UserName")}`
  submit.parentElement.remove()

}
// hint
const showHint = document.getElementById("show-hint");
const hint = document.getElementById("hint")
showHint.addEventListener("click", () => {
  showAnswer()
})
function showAnswer() {
  // add button
  let btn = document.createElement("button");
  let playAgain = document.createTextNode("Got It!");
  btn.id = "playAgain";
  btn.onclick = () => {
    btn.parentElement.parentElement.remove()
    // hideAnswer()
  };
  btn.appendChild(playAgain);
  
  //
  const parent = document.createElement("div")
  parent.className = "parent";
  const hint = document.createElement("div")
  const span = document.createElement("span")
  span.style.display = "block"
  span.id = "hint"
  hint.className = "popup";
  const text = document.createTextNode(`The Word Is : ${randomValueValue}`)
  hint.appendChild(span)
  hint.appendChild(btn)
  span.appendChild(text)
  parent.appendChild(hint)
  document.body.appendChild(parent)
}

// document.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     submit.click()
//   }
// })
/////
const getYear = new Date().getFullYear()

document.querySelector(".coby-right span").textContent = getYear;
// function hideAnswer() {
//   showHint.remove()
// }
// console.log(Array.from(randomValueValue).sort());
reset.addEventListener("click", () => {
  location.reload();
});
logout.addEventListener("click", () => {
  sessionStorage.clear();
  location.reload();
});
// console.log(Array.from(randomValueValue).join(""));
