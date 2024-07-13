
//Image 1
var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomdiceimage1 = "dice" + randomnumber1 + ".png"; 

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdiceimage1);


//Image 2
var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomdiceimage2 = "dice" + randomnumber2 + ".png"; 

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdiceimage2)  

//winner announcement
if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Win ";

}
else if (randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "🚩Player 2 Win "

}

else {
    document.querySelector("h1").innerHTML = "Draw"

}


