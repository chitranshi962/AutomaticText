var text = document.getElementById("text");

var sentence = "This is the HULK!";

// const start = document.getElementById("start");
// const stopIt = document.getElementById("stop");
let index = 1;
let speedChanger = 250; // this is the speed of letters coming in

writingSentence();


function writingSentence() {
  
  text.innerText = sentence.slice(0, index);
  index++;

  if (index > sentence.length) {
    index = 1;
  }
  setTimeout(writingSentence, speedChanger);
}

