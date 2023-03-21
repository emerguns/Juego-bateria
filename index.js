//funcion normal 

/*document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    alert("hice click");
}*/

// detecta la presión de los botones

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){ 

//funcion anonima
document.querySelectorAll(".drum")[i].addEventListener("click", function (){

    var buttonInnerHTML = this.innerHTML;

        hacerSonido(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

});
}

//detecta presión de el teclado 

document.addEventListener("keydown", function(event) {
    
    hacerSonido(event.key);

    buttonAnimation(event.key);

  });

  function hacerSonido(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();   
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-1.mp3");
            tom2.play();   
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-1.mp3");
            tom3.play();   
            break;
        
        case "d":
            var tom4 = new Audio("sounds/tom-1.mp3");
            tom4.play();   
            break;
        
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();   
            break;
        
        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();   
            break;
    
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();   
            break;
                
        default: console.log();
        
    }


  }

  function buttonAnimation(teclaActual){

    var activeButton = document.querySelector("." + teclaActual);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
  }