var mouseEvent = " ";
var l_x,l_y;
var wodth
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
var width_of_line = 1;
canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown"

}
function cleararea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e)
{
    
    c_mouse_x=e.clientX - canvas.offsetLeft;
    c_mouse_y=e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(l_x,l_y);

        ctx.lineTo(c_mouse_x,c_mouse_y);
        ctx.stroke();
    }
    l_x = c_mouse_x;
    l_y = c_mouse_y;



}
canvas.addEventListener("mouseup" , my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseUp";

}
canvas.addEventListener("mouseleave" , my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}