function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
  
  function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`div[data-key="${keyCode}"]`);
    if (!audio || !key) return;
    
    console.log(key);
    
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
  
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => {
    key.addEventListener('click', () => {
      const keyCode = key.getAttribute('data-key');
      playSound(keyCode);
    });
    key.addEventListener('transitionend', removeTransition);
  });
  
  window.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode;
    playSound(keyCode);

  })
  
  const image = document.getElementById("image");

  document.addEventListener("keydown", function(event) {
    if (event.key === "m") {
      image.classList.toggle("active");
    }
  });
    