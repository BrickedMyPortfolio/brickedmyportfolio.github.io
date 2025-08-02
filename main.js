// main.js

(() => {
  // Preload crack sound
  const crackSound = new Audio('media/glass-crack.mp3');
  crackSound.preload = 'auto';

  // Create a full-screen overlay for the crack effect
  const overlay = document.createElement('div');
  overlay.id = 'crack-overlay';
  Object.assign(overlay.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundImage: 'url("media/screen-crack.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    pointerEvents: 'none',
    opacity: 0,
    transition: 'opacity 0.5s ease',
    zIndex: 9999
  });
  document.body.appendChild(overlay);

  // Toggle the crack overlay and play sound
  window.crackScreen = () => {
    const isVisible = overlay.style.opacity === '1';
    overlay.style.opacity = isVisible ? '0' : '1';
    crackSound.currentTime = 0;
    crackSound.play().catch(() => {
      // Sound playback might be blocked until user interacts
    });
  };
})();
