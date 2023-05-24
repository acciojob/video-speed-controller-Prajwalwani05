// const inputs = document.querySelectorAll('.controls input');

//     function handleUpdate() {
//       const suffix = this.dataset.sizing || '';
//       document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
//     }

//     inputs.forEach(input => input.addEventListener('change', handleUpdate));
//     inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


// Get the necessary elements
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress__filled');
const toggleButton = document.querySelector('.toggle');
const volumeSlider = document.querySelector('input[name="volume"]');
const playbackRateSlider = document.querySelector('input[name="playbackRate"]');
const skipButtons = document.querySelectorAll('.player__button[data-skip]');

// Play/Pause functionality
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update the play/pause button text
function updateToggleButton() {
  toggleButton.textContent = video.paused ? '►' : '❚ ❚';
}

// Update the progress bar
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progress.style.flexBasis = `${percent}%`;
}

// Update the video volume
function updateVolume() {
  video.volume = volumeSlider.value;
}

// Update the video playback speed
function updatePlaybackRate() {
  video.playbackRate = playbackRateSlider.value;
}

// Skip the video forward or backward
function skipVideo() {
  const skipSeconds = parseFloat(this.dataset.skip);
  video.currentTime += skipSeconds;
}

// Add event listeners
video.addEventListener('click', togglePlay);
toggleButton.addEventListener('click', togglePlay);
video.addEventListener('play', updateToggleButton);
video.addEventListener('pause', updateToggleButton);
video.addEventListener('timeupdate', updateProgress);
volumeSlider.addEventListener('input', updateVolume);
playbackRateSlider.addEventListener('input', updatePlaybackRate);
skipButtons.forEach(button => button.addEventListener('click', skipVideo));
