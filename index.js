
var lengths=document.querySelectorAll(".drum").length;
// detecting button press

for(var i=0;i<lengths;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
   var letter=this.innerHTML;
   Makesound(letter);
   Animation(letter);
   

  
});
}

// detecting keyboard press
document.addEventListener("keydown",function(event)
{
    Makesound(event.key);
    Animation(event.key);

});



function Makesound(key)
{
    switch(key)
   {
    
    case 'w':
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
        
    case 'a':
        var audio = new Audio('./sounds/tom-2.mp3');
        audio.play();
        break;
    case 's':
        var audio = new Audio('./sounds/tom-3.mp3');
        audio.play();
        break;
    case 'd':
        var audio = new Audio('./sounds/tom-4.mp3');
        audio.play();
        break;

    case 'j':
        var audio = new Audio('./sounds/snare.mp3');
        audio.play();
        break;    
            
    case 'k':
         var audio = new Audio('./sounds/crash.mp3');
        audio.play();
        break;
    case 'l':
        var audio = new Audio('./sounds/kick-bass.mp3');
        audio.play();
        break;   
        
    default:
        console.log(this.HTML);   
}



}
function Animation(key)
{
    var activebutton=document.querySelector("."+key);
    activebutton.classList.add("pressed");

    setTimeout( function()
    {
        activebutton.classList.remove("pressed");


    },100);

}
    
