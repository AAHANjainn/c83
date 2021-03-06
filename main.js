canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var width = 5 ;
mouseEvent = "";
var color = "black";

canvas.addEventListener("touchstart" , my_touchstart)
function my_touchstart(e)
{
    color = document.getElementById("color").value;
     width = document.getElementById("width").value;
    last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove" , my_touchmove);
function my_touchmove(e)
{
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.lineWidth = width ;
    ctx.moveTo(last_position_of_touch_x , last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x , current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e)
 {
     color = document.getElementById("color").value;
     width = document.getElementById("width").value;
mouseEvent = "mouseDown";
 }

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
    ctx.lineWidth = width ;
    ctx.moveTo(last_position_of_x , last_position_of_y);
    ctx.lineTo(current_position_of_x , current_position_of_y);
    ctx.stroke();
    }

    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;

}
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e)
 {
     mouseEvent = "mouseup";
 }

 canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
 {
     mouseEvent = "mouseleave";
 }


