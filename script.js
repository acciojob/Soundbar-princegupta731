//your JS code here. If required.
// Select all buttons and the stop button
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentAudio = null;

// Play the corresponding sound when a button is clicked
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const soundName = button.getAttribute('data-sound');
    const audio = new Audio(`sounds/${soundName}.mp3`);
    
    if (currentAudio) currentAudio.pause(); // Stop currently playing audio
    currentAudio = audio;
    audio.play();
  });
});

// Stop sound when Stop button is clicked
stopButton.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Reset to start
  }
});
