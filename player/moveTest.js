
var imageRepo= new function(){

  this.img =new Image();
this.img.src='https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';

this.bg =new Image();
this.bg.src="maze.jpg";

}

let player = document.getElementById('player');
let ctx=player.getContext('2d');

const scale = 2;
const width = 16;
const height = 18;
const scaledHeight = scale*height;
const scaledWidth = scale*width;

function drawFrame(frameX, frameY, canvasX, canvasY){
  ctx.drawImage(imageRepo.img,
               frameX* width, frameY * height, width, height,
               canvasX, canvasY, scaledWidth, scaledHeight);
}

this.spawn=function(x,y,speed){
  this.x;
  this.y;
  this.speed=speed;
  this.ctx.drawImage(imageRepo.img, this.x.this.y)
}



function background(){
  ctx.drawImage(imageRepo.bg,0,0)
}

function init(){
  this.speed=1;
  this.x+=this.speed;
  this.background();
  //ctx.drawImage(imageRepo.img, frameX* width, frameY * height, width, height, canvasX, canvasY, scaledWidth, scaledHeight);
  this.drawFrame(0,0, 160, 35); 
}

  
/*
function playerMovement(){

    this.move = function(){
      counter++;
      //determine action from move
      if(KEY_STATUS.left || KEY_STATUS.right || KEY_STATUS.down || KEY_STATUS.up){
        this.context.clearRect(this.x, this.y, this.width, this.height);
        
      }
    }
}
*/