// Detecting Button Press
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonhtml = this.innerHTML;
        sound(buttonhtml);
        Buttonanimation(buttonhtml);
    });
}
// Detecting Keyboard Press    
document.addEventListener("keydown", function(event){
        sound(event.key);
        Buttonanimation(event.key);
        
    });

function sound(variable){
    switch (variable) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;  
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;  
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
    
        default:
            console.log("none");
            break;
    }

}
function Buttonanimation(variable){
    var activeButton = document.querySelector("." + variable);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

