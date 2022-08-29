
const canvas = document.getElementById('viewport');
const ctx = canvas.getContext('2d');

const bgimg = new Image();
bgimg.src='maze.jpg';

let img =new Image();
img.src='https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png'

//ctx.drawImage(img, 0,0, img.width, img.height, 0,0,img.width*ratio, img.height*ratio);



function Background(){
    canvas.width=(bgimg.width)/2;
    canvas.height=(bgimg.height)/2;
    ctx.drawImage(bgimg,0,0,(bgimg.width)/2, (bgimg.height)/2);
    img.onload=function(){
      init();
    }
}

const scale = 2;
const width = 16;
const height = 18;
const scaledHeight = scale*height;
const scaledWidth = scale*width;

function drawFrame(frameX, frameY, canvasX, canvasY){
  ctx.drawImage(img,
               frameX* width, frameY * height, width, height,
               canvasX, canvasY, scaledWidth, scaledHeight);
  }
function init(){
    drawFrame(0,0, 0, 0)
  }

//Background();

/*
bgimg.onload = function drawImageActualSize(){
canvas.width=(bgimg.width)/2;
canvas.height=(bgimg.height)/2;
ctx.drawImage(bgimg,0,0,(bgimg.width)/2, (bgimg.height)/2);

};

*/