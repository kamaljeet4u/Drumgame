var numofdrums = document.querySelectorAll(".drum").length;

for(var i =0 ; i < numofdrums; i++)
 {
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){

      var buttonInnerHtml = this.innerHTML;

         makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);


       });

}


document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});





function makeSound(key)
{
      switch (key) {
        case "w":
            var crashsound = new Audio("sounds/crash.mp3");
            crashsound.play();
          break;

          case "a":
              var kicksound = new Audio("sounds/kick-bass.mp3");
              kicksound.play();
            break;

            case "s":
                var snaresound = new Audio("sounds/snare.mp3");
                snaresound.play();
              break;

              case "d":
                  var tom1 = new Audio("sounds/tom-1.mp3");
                  tom1.play();
                break;

                case "j":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                  break;

                  case "k":
                      var tom3 = new Audio("sounds/tom-3.mp3");
                      tom3.play();
                    break;

                    case "l":
                        var tom4 = new Audio("sounds/tom-4.mp3");
                        tom4.play();
                      break;

                      default:
                         console.log(buttonInnerHtml);

      }

}




function buttonAnimation(currentkey)
  {
    var activeButton = document.querySelector("." + currentkey);

        activeButton.classList.add("pressed");

        setTimeout( function( ){
          activeButton.classList.remove("pressed");} , 130 );

  }
