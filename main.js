canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_height = 90;
rover_width = 100;

background_image = "mars.jpg";
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}
function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
    }

    window.addEventListener("keydown", my_keydown);

    function my_keydown(e){
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if (keyPressed == "38"){
        up();
        console.log("up");
        }
        if (keyPressed == "40"){
            down();
            console.log("down");
            }
            if (keyPressed == "37"){
                left();
                console.log("left");
                }
        
                if (keyPressed == "39"){
                    right();
                    console.log("right");
                    }
            
    }

    function up(){

        if (rover_y >=0) {
         rover_y = rover_y - 10;
         console.log("when up arrow is pressed, x = " + rover_x + "y = " + rover_y);
         uploadBackground();
         uploadrover(); 
        
        }
    }

    function down(){

        if (rover_y <=500) {
         rover_y = rover_y + 10;
         console.log("when up arrow is pressed, x = " + rover_x + "y = " + rover_y);
         uploadBackground();
         uploadrover(); 
        
        }
    }

    function right(){

        if (rover_x <=700) {
         rover_x = rover_x + 10;
         console.log("when up arrow is pressed, x = " + rover_x + "y = " + rover_y);
         uploadBackground();
         uploadrover(); 
        
        }
    }

    function left(){

        if (rover_x >=0) {
         rover_x = rover_x - 10;
         console.log("when up arrow is pressed, x = " + rover_x + "y = " + rover_y);
         uploadBackground();
         uploadrover(); 
        
        }
    }
    color = "black";
    width_of_line = 2;

    var width = screen.width;
    new_width = screen.width - 70;
    new_height = screen.height - 300;
    if(width < 992)
    {
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        console.log("my_touchstart")
        
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

        
    }

   
    
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

       
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
    