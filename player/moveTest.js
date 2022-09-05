
var imageRepo = new function(){

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
//start position of sprite
this.spawn=function(x,y,speed){
  this.x;
  this.y;
  this.speed=speed;
  this.ctx.drawImage(imageRepo.img, this.x.this.y)
}

//Sprite start position
function playerMovement(){
  this.speed = 1;
  this.step=1;
  this.x=160;
  this.y=35;
  this.draw = function(){
  this.ctx.drawImage(imageRepo.player, this.x, this,y);
  };
  this.move = function(){
    counter++;
    // check movement commands
    if(KEY_STATUS.left || KEY_STATUS.right || KEY_STATUS.down || KEY_STATUS.UP){
      this.ctx.clearRect(this.x, this.y, this.width, this.height);
      if(KEY_status.left){
        this.x-=this.speed
        if (this.x <=0)
        this.x=0;
      }else if(KEY_STATUS.right){
        this.x += this.speed
        //EXPLAIN?
        if(this.x >= this.canvasWidth - this.width)
        this.x = this.canvasWidth - this.width;
      }else if (KEY_status.up){
        this.y-=this.speed
        if(this.y <= this.canvasHeight/4*3)
        this.y=this.canvasHeight/4*3;
      }else if (KEY_STATUS.down){
        this.y+=this.speed
        if(this.y >= this.canvasHeight -this.Height)
        this.y >= this.canvasHeight - this.height;
      }
      this.draw();
    }
  }
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

  
