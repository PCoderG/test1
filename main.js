var mouseEvent = "empty";
var last_X,last_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width=2;
canvas.addEventListener ("mousedown",mymousedown);
function mymousedown(e) {
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e) {
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e) {
    mouseEvent = "mouseUP"
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e) {
    current_x = e.ClientX - canvas.offsetLeft;
    current_y = e.ClientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("last X=" + last_X + ". last Y = "+ last_y);
        ctx.moveTo(last_X,last_y);
        ctx.stroke();

    }
 last_X =current_x;
 last_y =current_y;
}