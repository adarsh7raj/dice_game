
 
var randomNumber1=Math.floor(Math.random()*6)+1;
var random_image1="dice"+randomNumber1+".png";



    document.querySelector("img.img1").setAttribute("src",random_image1);
    


var randomNumber2=Math.floor(Math.random()*6)+1;
var random_image2="dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src",random_image2);
if(randomNumber1>randomNumber2){
   
    document.querySelector("h1").innerHTML="🚩Player 1 is won.";
}
else if(randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 is won.🚩";
}
else{
    document.querySelector("h1").innerHTML="It`s Draw!";
}