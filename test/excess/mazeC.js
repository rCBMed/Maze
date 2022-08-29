const bgimg = new Image();
bgimg.src='maze.jpg';

function Background(){
  var maze = document.getElementById('Background');
  const ctx = canvas.getContext('2d');
  canvas.width=(bgimg.width)/2;
  canvas.height=(bgimg.height)/2;
  ctx.drawImage(bgimg,0,0,(bgimg.width)/2, (bgimg.height)/2);
}

