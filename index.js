// JavaScript Document

//Button press

for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var button = this.innerHTML;
        makeSound(button);
        buttonanimation(button);
        
    });
    
}

//Key Press

document.addEventListener("keypress", function (event) {
    
    makeSound(event.key);
    buttonanimation(event.key);
    
});

//Makesound

function makeSound(key) {
    switch (key) {
        case "A": 
            var crash = new Audio('Sounds/crash.mp3');
            crash.play();
            break;
            
        case "S": 
            var kick = new Audio("Sounds/kick-bass.mp3");
            kick.play();
            break;
            
        case "D": 
            var snare = new Audio('Sounds/snare.mp3');
            snare.play();
            break;
            
        case "H": 
            var tom1 = new Audio("Sounds/tom-1.mp3");
            tom1.play();
            break;
            
        case "J": 
            var tom2 = new Audio("Sounds/tom-2.mp3");
            tom2.play();
            break;
            
        case "K": 
            var tom3 = new Audio("Sounds/tom-3.mp3");
            tom3.play();
            break;
            
        case "L": 
            var tom4 = new Audio("Sounds/tom-4.mp3");
            tom4.play();
            break;

        default: alert("Causes of error : (1) On CapsLock. (2) Wrong Key Pressed.");
            
    }
} 

function buttonanimation(currentkey) {
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function (){activebutton.classList.remove("pressed");},100);
}