var numberOfDrumButtons = document.querySelectorAll('.drum').length;
for(i=0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () { 
      console.log(this.innerHTML);
      var buttonInnerHTML = this.innerHTML;
      
     makeSound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);
});
/* button press */ 
}
/*key press */
document.addEventListener('keypress', function(event) {
    
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
    

  switch(key) {

    case 'w':
      var wow = new Audio('ksi sounds/wow.mp3');
      wow.play();
    break;
    case 'a':
      var Ruud = new Audio('ksi sounds/Ruud.mp3');
      Ruud.play();
    break;
    case 's':
      var Tshabalala = new Audio('ksi sounds/Tshabalala.mp3');
      Tshabalala.play();
    break;
    case 'd':
      var tom1 = new Audio('ksi sounds/Snap.mp3');
      tom1.play();
    break;
    case 'j':
      var snare = new Audio('ksi sounds/Spin.mp3');
      snare.play();
    break;
    case 'k':
      var crash = new Audio('ksi sounds/Black.mp3');
      crash.play();
    case 'l':
      var kick = new Audio('ksi sounds/Chicken.mp3');
      kick.play();
    break;
    default:
    
  }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector('.' + currentKey);

    activeButton.classList.add('pressed');

    setTimeout(function(){
      activeButton.classList.remove('pressed');
      }, 100);

}