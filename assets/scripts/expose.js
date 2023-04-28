// expose.js

window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti();
const selectElement = document.querySelector("#horn-select");
const hornImage = document.querySelector("#expose > img:nth-child(2)");
const hornAudio = document.querySelector(".hidden");
const button = document.querySelector("#expose > button:nth-child(5)");
const controls = document.querySelector("#volume");
const volImage = document.querySelector("#volume-controls > img:nth-child(2)");
var isParty = 0;

function init() {
  // TODO
}

selectElement.addEventListener("change", (event) => {
  if (event.target.value == "air-horn") {
    hornImage.src="assets/images/air-horn.svg";
    hornAudio.src="assets/audio/air-horn.mp3";
    isParty = 0;
  }
  else if (event.target.value == "car-horn") {
    hornImage.src="assets/images/car-horn.svg";
    hornAudio.src="assets/audio/car-horn.mp3";
    isParty = 0;
  }
  else if (event.target.value == "party-horn") {
    hornImage.src="assets/images/party-horn.svg";
    hornAudio.src="assets/audio/party-horn.mp3";
    isParty = 1;
  }
  else {
    hornImage.src="assets/images/no-image.svg";
    hornAudio.src="";
    isParty = 0;
  }
});

button.addEventListener("click", (event) => {
  hornAudio.play();
  if (isParty == 1) {
    jsConfetti.addConfetti();
  }
});

controls.addEventListener("change", (event) => {
  if (controls.value == 0) {
    volImage.src="assets/icons/volume-level-0.svg";
    hornAudio.volume = 0;
  }
  else if (controls.value >= 1 && controls.value < 33) {
    volImage.src="assets/icons/volume-level-1.svg";
    hornAudio.volume = 0.33;
  }
  else if (controls.value >= 33 && controls.value < 67) {
    volImage.src="assets/icons/volume-level-2.svg";
    hornAudio.volume = 0.67;
  }
  else if (controls.value >= 67) {
    volImage.src="assets/icons/volume-level-3.svg";
    hornAudio.volume = 1;
  }
});