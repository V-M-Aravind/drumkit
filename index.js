const playMusic = (letter, element) => {
  let audio;
  switch (letter) {
    case "a":
      audio = new Audio("./sounds/a.mp3");
      break;
    case "b":
      audio = new Audio("./sounds/b.mp3");
      break;
    case "c":
      audio = new Audio("./sounds/c.mp3");
      break;
    case "d":
      audio = new Audio("./sounds/d.mp3");
      break;
    case "e":
      audio = new Audio("./sounds/e.mp3");
      break;
    case "f":
      audio = new Audio("./sounds/f.mp3");
      break;
    case "g":
      audio = new Audio("./sounds/g.mp3");
      break;
    default:
      audio = new Audio("./sounds/X.mp3");
      element = document.querySelector(".wrong");
      break;
  }
  audio.play();
  element?.classList.add("pressed");
  setTimeout(() => {
    element?.classList.remove("pressed");
  }, 1000);
};
const drumButtons = document.querySelectorAll(".drum");
for (let index = 0; index < drumButtons.length; index++) {
  drumButtons[index].addEventListener("click", (event) => {
    const drumKey = event.currentTarget;
    playMusic(drumKey.innerHTML, drumKey);
  });
}
document.addEventListener("keypress", (event) => {
  const drumKey = event.key;
  playMusic(drumKey, document.querySelector("." + drumKey));
});
