// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const button = document.querySelector("#explore > button:nth-child(5)");
  const inputForm = document.querySelector("#text-to-speak");
  const smileImg = document.querySelector("#explore > img:nth-child(2)");

  let voices = [];
  voices = synth.getVoices();

  synth.addEventListener("voiceschanged", () => {
    voices = synth.getVoices();
    for (const element of voices) {
      const option = document.createElement("option");
      option.textContent = `${element.name} (${element.lang})`;

      if (element.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", element.lang);
      option.setAttribute("data-name", element.name);
      document.getElementById("voice-select").appendChild(option);
    }
  });

  function populateVoiceList() {
    for (const element of voices) {
      const option = document.createElement("option");
      option.textContent = `${element.name} (${element.lang})`;

      if (element.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", element.lang);
      option.setAttribute("data-name", element.name);
      document.getElementById("voice-select").appendChild(option);
    }
  };

  button.addEventListener("click", (event) => {
    event.preventDefault();
    const voiceSelect = document.querySelector("select");

    const utterThis = new SpeechSynthesisUtterance(inputForm.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (const element of voices) {
      if (element.name === selectedOption) {
        utterThis.voice = element;
        break;
      }
    }

    synth.speak(utterThis);
    smileImg.src="assets/images/smiling-open.png";
    
    utterThis.onend = () => {
      smileImg.src="assets/images/smiling.png";
    }
  });

  populateVoiceList();
}