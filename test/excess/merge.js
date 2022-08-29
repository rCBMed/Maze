https://blog.sklambert.com/html5-canvas-game-panning-a-background/
let canvas = document.querySelector('background');
let ctx=canvas.getContext('2d');

var imageRepository = new function(){
  //background

  this.background= new Image();
  this.background.src="maze.jpg";
  }

  function Drawable(){
  this.init = function(x,y){
    //Deafault variables
    this.x=x;
    this.y=y;
  }
  this.canvasWidth=0;
  this.canvasHeight=0;
  
  this.draw=function(){
    
  };
}

function Background(){

  this.draw=function(){

  this.context.drawImage(imageRepository.background, this.x, this.y);
}
}Background.prototype=new Drawable();

function Game(){
  this.init=function(){
    this.bgCanvas=document.getElementById('background');
    if (this.bgCanvas.getContext){
      this.bgContext=this.bgCanvas.getContext('2d');

      Background.prototype.context=this.bgContext;
      Background.prototype.canvasWidth=this.bgCanvas.width;
      Background.prototype.canvasHeight=this.bgCanvas.height;

      this.background= new Background();
      this.background.init(0,0);
      return true;

    }else {
      return false;
  } 
  }
};

var game = new Game();

function init(){
  game.init();
}
