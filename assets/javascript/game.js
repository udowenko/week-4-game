var userScore = 0;
var wins = 0;
var losses = 0;

var crystalRandom = Math.floor(Math.random() * ((12-1) + 1) + 1);

// DISPLAYING IMAGES AS BUTTONS, CREATING 4 CRYSTALS, GENERATING AND STORING RANDOM NUMBER IN EACH CRYSTAL
var imageCrystal = $("<img>");
  
   
    imageCrystal.attr("src", "assets/images/pinkgemstone.jpg");
    // imageCrystal.attr("color", "pink");
    imageCrystal.data("pink", crystalRandom);
    console.log (crystalRandom);
    $("#pink").append(imageCrystal);
  imageCrystal.css({'width' : '150px' , 'height' : '150px'});

 var crystalRandom2 = Math.floor(Math.random() * ((12-1) + 1) + 1);

 var imageCrystal2 = $("<img>");


  
    imageCrystal2.attr("src", "assets/images/yellow.jpg");
    imageCrystal2.data("yellow-image", crystalRandom2);
    console.log (crystalRandom2);
    $("#yellow").append(imageCrystal2);
    imageCrystal2.css({'width' : '150px' , 'height' : '150px'});

var crystalRandom3 = Math.floor(Math.random() * ((12-1) + 1) + 1);
var imageCrystal3 = $("<img>");


  
    imageCrystal3.attr("src", "assets/images/blue.jpg");
    imageCrystal3.data("blue-image", crystalRandom3);
    console.log (crystalRandom3);
    $("#blue").append(imageCrystal3);
    imageCrystal3.css({'width' : '150px' , 'height' : '150px'});

var crystalRandom4 = Math.floor(Math.random() * ((12-1) + 1) + 1);
var imageCrystal4 = $("<img>");


  
    imageCrystal4.attr("src", "assets/images/green.jpg");
    imageCrystal4.data("green-image", crystalRandom4);
    console.log (crystalRandom4);
    $("#green").append(imageCrystal4);
    imageCrystal4.css({'width' : '150px' , 'height' : '150px'});

// The player will be shown a random number at the start of the game (GENERATES A RANDOM NUMBER BEWTWEEN 19 AND 120, AND DISPLAYS TO PLAYER)


  var randomNumber = Math.floor(Math.random() * ((120-19) + 1) + 19);
  $("#randomNum").text(randomNumber);



function Reset() {

  userScore = 0;
  $("#total").text(userScore);
  crystalRandom = Math.floor(Math.random() * ((12-1) + 1) + 1);
  crystalRandom2 = Math.floor(Math.random() * ((12-1) + 1) + 1);
  crystalRandom3 = Math.floor(Math.random() * ((12-1) + 1) + 1);
  crystalRandom4 = Math.floor(Math.random() * ((12-1) + 1) + 1);

  randomNumber = Math.floor(Math.random() * ((120-19) + 1) + 19);
  $("#randomNum").text(randomNumber);

}
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
$("#pink").on("click",function()
   { userScore += crystalRandom;
    console.log (userScore);
    $("#total").text(userScore);
    if (userScore === randomNumber){
      console.log(crystalRandom);
      console.log(userScore);

      $("#total").text(userScore);
          
      wins++;

      $("#wins").text(wins);
      alert("You win! Time to play again.");
      Reset();
      
    }

    else if (userScore > randomNumber){
      
      $("#total").text(userScore);

      losses++;
      
      $("#losses").text(losses);
      alert("You lost! Time to play again.");
      Reset();
    }
});

$("#yellow").on("click",function()
   { userScore += crystalRandom2;
    console.log (userScore);
    $("#total").text(userScore);
    if (userScore === randomNumber){
      console.log(crystalRandom2);
      console.log(userScore);
      wins++;
      $("#wins").text(wins);
      alert("You win! Time to play again.");
      Reset();
    }

    else if (userScore > randomNumber){
      losses++;
      $("#losses").text(losses);
      alert("You lost! Time to play again.");
      Reset();

    }
  
});


$("#blue").on("click",function()
   { userScore += crystalRandom3;
    console.log (userScore);
    $("#total").text(userScore);
    if (userScore === randomNumber){
      console.log(crystalRandom3);
      console.log(userScore);
      wins++;
      $("#wins").text(wins);
      alert("You win! Time to play again.");
      Reset();
    }

    else if (userScore > randomNumber){
      losses++;
      $("#losses").text(losses);
      alert("You lost! Time to play again.");
      Reset();

    }
  
});

$("#green").on("click",function()
   { userScore += crystalRandom4;
 
    console.log (userScore);
    $("#total").text(userScore);

    if (userScore === randomNumber){
      console.log(crystalRandom4);
      console.log(userScore);
      wins++;
      $("#wins").text(wins);
      alert("You win! Time to play again.");
      Reset();
    }

    else if (userScore > randomNumber){
      losses++;
      $("#losses").text(losses);
      alert("You lost! Time to play again.");
      Reset();

    }
  
});



  //      else if ($(e.srcElement).attr('.blue-image')=='.blue-image')
  //      {
  //           alert('clicked on blue'); 
		
		// }

		// else if ($(e.srcElement).attr('.green-image')=='.green-image')
		// {
		// 	alert('clicked on green'); 
		// }
		
		
		// else if ($(e.srcElement).attr('.yellow-image')=='.yellow-image')
		// {
		// 		alert('clicked on yellow'); 	
		// }	
  //  });

// (".pink-image").click(function(){
//   $(this).data('clicked', true);
// });
// Then, to check if it was clicked and perform an action:

// if(jQuery('#id').data('clicked')) {
//     //clicked element, do-some-stuff
// } else {
//     //run function2
// }
//  ($(".pink-image").on("click", function() { 
// 		score += crystalRandom;
// }


// Your game will hide this amount until the player clicks a crystal. (.data)

// When they do click one, update the player's score counter.


// The player wins if their total score matches the random number from the beginning of the game.

// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

