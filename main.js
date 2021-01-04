canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
car1_x=10;
car1_y=10;
car2_x=10;
car2_y=10;
background_image="racing.jpg";
car1_image="car1.png";
function add(){
    background_imgtag=new Image();
background_imgtag.onload=uploadBackground;
background_imgtag.src=background_image;

rover_imgtag=new Image();
rover_imgtag.onload=uploadRover;
rover_imgtag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
    if(keyPressed=='38'){
        uo();
        console.log("up");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
}