len=document.querySelectorAll(".drum").length;


for(var i=0;i<len;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function fx() {
var clickpress=this.innerHTML;
fxsound(clickpress);
});
}

document.addEventListener("keydown",function fx1(event){
fxsound(event.key.toUpperCase());
});


function fxsound(key){

    switch(key){
        case "A":
            var drum1=new Audio("sounds/tom-1.mp3");
            drum1.play();
            break;
         case "B":
            var drum2=new Audio("sounds/tom-2.mp3");
            drum2.play();
            break;     
         case "C":
            var drum3=new Audio("sounds/tom-3.mp3");
            drum3.play();
            break;
        case "D":
            var drum4=new Audio("sounds/tom-4.mp3");
            drum4.play();
            break;     
        case "E":
            var drum5=new Audio("sounds/tom-2.mp3");
            drum5.play();
            break;     
    }
}