var buttonColours = ["red","blue","green","yellow"]
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;


$(document).keydown( function(){
    if (started === false) {
        nextSequence();
        started = true;
         
    };
});
    
    

function nextSequence() {
    
    userClickedPattern = [];
    level++;
    $(".heading").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
     
    $("#" + randomChosenColour).fadeIn(500).fadeOut(500).fadeIn(500); 
    
    playSound(randomChosenColour); 
     
   
}



$(".btn").click(function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    
    checkAnswer(userClickedPattern.length - 1);


})

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            },1000);
        }
        
    }
    else{
        
        $(".heading").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        },200);
         playSound("wrong");
         
        startOver();
        
       
    }
    
}



function playSound(name){
    var audio =new Audio("sounds/" + name + ".mp3");
        audio.play();  
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass('pressed');
    },100)
}
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;   
    
}


    
