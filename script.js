const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentAudio = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const soundName = button.getAttribute('data-sound');
    const audioPath = `sounds/${soundName}.mp3`;
    const audio = new Audio(audioPath);

    // Handle missing or unsupported audio
    audio.addEventListener('error', () => {
      console.warn(`Failed to load audio: ${audioPath}`);
    });

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = audio;

    // Safe playback
    audio.play().catch(err => {
      console.warn('Audio playback failed:', err);
    });
  });
});

stopButton.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});
