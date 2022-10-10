// For Image 1

var randomNumber1 = Math.random() ;
randomNumber1 = Math.floor(randomNumber1*6) + 1 ;

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png" ;

var images1 = document.querySelector(".img1") ;
images1.setAttribute("src", randomDiceImage1) ;

// For Image 2

var randomNumber2 = Math.random() ;
randomNumber2 = Math.floor(randomNumber2*6) + 1 ;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png" ;

var images2 = document.querySelector(".img2") ;
images2.setAttribute("src", randomDiceImage2) ;

// Message of win

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins😎!!" ;
}
else if(randomNumber1 < randomNumber2) 
{
    document.querySelector("h1").innerHTML = "Player 2 Wins😎!!" ;
}
else
{
    document.querySelector("h1").innerHTML = "Match Tie🙂" ;
}

