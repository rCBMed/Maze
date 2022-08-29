//<canvas width="300" height="200"></canvas>

var imageRepository = new function(){
  //background

  this.base_image= new Image();
  this.base_image.src='maze.jpg'

  //sprite sheet
  this.spriteSheet =new Image();
  this.spriteSheet.src='https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png'  
  
}

/*

let img =new Image();
img.src='https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png'
img.onload=function(){
    init();
};
*/

function background(){
    imageRepository.base_img.onload=function(){
    canvas.width=imageRepository.base_img.width/2;
    canvas.height=imageRepository.base_img.height/2;
    ctx.drawImage(imageRepository.base_img,0,0,(imageRepository.base_img.width)/2, (imageRepository.base_img.height)/2);
}
}

let canvas = document.querySelector('canvas');
let ctx=canvas.getContext('2d');

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

/*
function make_base(){
  base_img = new Image();
  base_img.src = 'maze.jpg';
  base_img.onload=function(){
  canvas.width=base_img.width/2;
  canvas.height=base_img.height/2;
  ctx.drawImage(bgimg,0,0,(bgimg.width)/2, (bgimg.height)/2);
}
}
*/
function init(){
  drawFrame(0,0, 0, 0)
  drawFrame(1,0, scaledWidth, 0)
  drawFrame(1,0, scaledWidth * 2, 0)
  drawFrame(2,0, scaledWidth *3, 0)
  //make_base();
  window.requestAnimationFrame(step);
  
}

const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount=0;

function step() {
  frameCount++;
  if (frameCount<15){
  window.requestAnimationFrame(step);
  return;
  }
  frameCount=0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  window.requestAnimationFrame(step);
}

