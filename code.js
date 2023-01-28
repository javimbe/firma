var canvas = document.getElementById("demo");
canvas.width = window.innerWidth*70/100;
canvas.height = window.innerHeight*60/100;

var ctx = canvas.getContext("2d");

var download = document.getElementById("download");

var control = false;

document.addEventListener("mousedown", ()=>{
    control = true;
},false);

document.addEventListener("mouseup", ()=>{
    control = false;

},false);

canvas.addEventListener("mousedown", (event)=>{

        let x = event.clientX;
        let y = event.clientY;

        ctx.beginPath();
        ctx.moveTo(x-window.innerWidth*15/100, y-window.innerHeight*10/100);
       
},false);

canvas.addEventListener("mousemove", (event)=>{
    if(control){

        let x = event.clientX;
        let y = event.clientY;

        
        ctx.lineTo(x-window.innerWidth*15/100, y-window.innerHeight*10/100);
        ctx.stroke();
        
        

    }
},false);

canvas.addEventListener("mouseup",(event)=>{

   

},false);

canvas.addEventListener("touchstart", (event)=>{

    let x = event.targetTouches[0].pageX;
    let y = event.targetTouches[0].pageY;

    ctx.beginPath();
    ctx.moveTo(x-window.innerWidth*15/100, y-window.innerHeight*10/100);
    control = true;

    

},false);

canvas.addEventListener("touchmove", (event)=>{

    if(control){

        let x = event.targetTouches[0].pageX;
        let y = event.targetTouches[0].pageY;

        ctx.lineTo(x-window.innerWidth*15/100, y-window.innerHeight*10/100);
        ctx.stroke();

    }

},false);

canvas.addEventListener("touchend",()=>{
    control = false;
},false);



function borrar () {

    ctx.clearRect(0,0,canvas.width,canvas.height);


}

download.addEventListener("click", ()=>{
    
    var imgData = canvas.toDataURL("image/jpg", 1.0);
    var pdf = new jsPDF("l");

    pdf.addImage(imgData, 'JPEG', 0, 0);
    pdf.save("download.pdf");
},false);