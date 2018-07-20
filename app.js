
//------ audio play---------
const keys = document.querySelectorAll('.key');
const display = document.querySelector('.display p:nth-child(2)');
window.addEventListener('keydown',e =>{
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelectorAll(`.key[data-key = "${e.keyCode}"]`);
  if(audio == null){
    return
  }
  audio.currentTime = 0;
  audio.play();
  key.forEach(function animation(a){
    a.classList.add('playing');
  }); // add transition

  // Top-display

  let str = audio.src;
  let strLength = str.length;
  console.log(strLength);
  let mp3 = str.slice(54,59);
  display.textContent = mp3;
});

function removeTrasition(e){
  if (e.properyName !== 'transform'){
    this.classList.remove('playing');
  }
} // remove animation

keys.forEach(key =>{
  key.addEventListener('transitionend',removeTrasition)
});
