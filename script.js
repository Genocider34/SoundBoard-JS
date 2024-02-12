const sounds = ["select", "bgm", "jump", "run"];

sounds.forEach((sound) => {
  // create button
  const button = document.createElement("BUTTON");

  // put the text of the array inside of the button
  button.innerText = sound;

  // add the created button on 'buttons' div
  document.getElementById("buttons").appendChild(button);

  // add a event listener to every button
  button.addEventListener("click", () => {
    // stops the sound whenever we play the sound at the same time
    stopSound();

    // plays the sound
    document.getElementById(sound).play();
  });
});

function stopSound() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
