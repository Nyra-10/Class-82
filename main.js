canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mouseevent="empty";
var lastx;
var lasty;
color="black";
width=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
mouseevent="mousedown";
color=document.getElementById("color").value;
width=document.getElementById("linewidth").value;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    var currentx=e.clientX-canvas.offsetLeft;
    var currenty=e.clientY-canvas.offsetTop;
    if (mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(lastx,lasty);
        console.log("lastx position"+lastx);
        console.log("lasty position"+lasty);
        console.log("currentx position"+currentx);
        console.log("currenty position"+currenty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
    lastx=currentx;
    lasty=currenty;
}
function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}