
$("#title").text("Press any key to Start!");

// button colors array.
var buttonColors = ["red", "blue", "green", "yellow"];

//array containing flashed button colors.
var flashedButton = [];

//array containng button colors clicked by user.
var userClickedPattern = [];

var started = false;
var level = 1;

if (started===false){
$(document).keypress(function () { 
    $("#title").text("Level "+ level);
    nextSequence();
    started=true;
});
}

//create clickable button and push color to above function.
$(".btn").click(function(){
    $(this).fadeOut(100).fadeIn();
    var userClickedColor = $(this).attr("id");
    userClickedPattern.push(userClickedColor);

    checkAnswer(userClickedPattern.length-1);

})


function checkAnswer(currentLevel){
    var c = 1;
    for (i in flashedButton){
        for (j in userClickedPattern){
            if (i===j){
                console.log(level);
                console.log("success!");
                console.log(flashedButton);
                console.log(userClickedPattern);
                c = c*1;
            }
            else{
                console.log("wrong!");
                c = c*0;
                $("#title").text("Game Over, Press Any Key to Restart");
                console.log(flashedButton);
                console.log(userClickedPattern);
                startOver();
            }
            }
        }
        if (c===1){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }


//flash random color button and store color to above array.
function nextSequence(){

    userClickedPattern = [];

    level++;
    
    $("title").text("Level "+level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    flashedButton.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);


}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }


