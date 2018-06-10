//setup
var canvas = document.getElementById("clock");
var ctx = canvas.getContext('2d');
var numb = [1,2,3,4,5,6,7,8,9,10,11,12];
var r = 150;
var x = 200;
var y = 150;
//Clock Number Coordinates
var cx;
var cy;
var co = 10; //Offset For Font
//Clock Hand Coordinates
var tx;
var ty;




//Set Animation Function
window.requestAnimationFrame(time);
//Animate

//Setup Window and faunt
canvas.width = innerWidth;
canvas.height = innerHeight;
ctx.font = "20px Arial";
ctx.textAlign="center";

//run animation
function time(){
    ctx.clearRect(0,0,canvas.width,canvas.height); // Clear Window Every Time Function Begins

    //Draw The Face
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.stroke();

    //Draw The Numbers
    var number;
    var degrees = -30;
    var radians;

    //Determine Coordinates Based Off Angle (radians)
    for (i = 1; i<=12; i++){
    // co = degrees/10;
        number = i.toString();
        radians = ((degrees*Math.PI)/180); // degrees = r*(180/pi)
        cx = (x+(r-5)*(-Math.sin(radians)));
        cy = (y+(r-5)*(-Math.cos(radians)))+co; //Y needs to be offset or numbers will look off
        ctx.fillText(number,cx,cy);
        degrees = degrees - 30;
    }

    //Get document time
    var d = new Date();
    var sec = d.getSeconds();
    var min = d.getMinutes();
    var hr = d.getHours();
    var td; //Degrees Calculation
    var tr; //radians conversion
    
    //Divide the circle into number of locations for hands
    var mul = 360/60; //Minutes and Seconds
    var hmul = 360/12; //Hours 

    //seconds hand
    td = -sec*mul;
    tr = ((td*Math.PI)/180); // degrees = r*(180/pi)
    ctx.beginPath();
    ctx.moveTo(x,y); //start at the center
    tx = x+(r)*(-(Math.sin(tr)));
    ty = y+(r)*(-(Math.cos(tr)));
    ctx.lineTo(tx,ty);
    ctx.stroke();

     //Minutes hand
    td = -min*mul;
    tr = ((td*Math.PI)/180); // degrees = r*(180/pi)
    ctx.beginPath();
    ctx.moveTo(x,y); //start at the center
    tx = x+(r-10)*(-(Math.sin(tr)));
    ty = y+(r-10)*(-(Math.cos(tr)));
    ctx.lineTo(tx,ty);
    ctx.stroke();

     //Hour hand
    td = (-hr*hmul)-(min/2);
    tr = ((td*Math.PI)/180); // degrees = r*(180/pi)
    ctx.beginPath();
    ctx.moveTo(x,y); //start at the center
    tx = x+(r-15)*(-(Math.sin(tr)));
    ty = y+(r-15)*(-(Math.cos(tr)));
    ctx.lineTo(tx,ty);
    ctx.stroke();
    //console.log(td);

    window.requestAnimationFrame(time);
}

