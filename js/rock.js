'use strict';

class Rock{
  constructor(canvas){
    this.canvas = canvas;
    this.size = this.canvas.height/20;
    this.x = 0;
    this.y = 0;
    this.ctx = this.canvas.getContext('2d');
    this.direction = 0;
    this.gravity = 0.5;
    this.initialVector = [];
    this.rockSpeed = 0;
    this.rockAngle = 0;
    this.time = 0;
    this.direction = 0;
    this.ifStart = false;
  }
  resetValues(posX){
    this.size = this.canvas.height/20;
    this.x = posX;
    this.y = 100;
    this.direction = 0;
    this.initialVector = [];
    this.rockSpeed = 0;
    this.rockAngle = 0;
    this.time = 0;
    this.direction = 0;
    this.ifStart = false;
  }
  setPositionStart(posX,posY){
    this.startX = posX;
    this.startY = posY;
  }
  setThrowRockInitValues(){
    this.initialVector = [event.offsetX,event.offsetY];
  }
  setThrowRockValues(){
    // SPEED ===============================
    let finalVector = [Math.abs(event.offsetX - this.initialVector[0]),Math.abs(event.offsetY - this.initialVector[1])];
    this.rockSpeed = Math.floor((Math.sqrt(Math.pow(finalVector[0],2) + Math.pow(finalVector[1],2)))/10);
    // ANGLE ================================
    let x1 = event.offsetX;
    let x2 = -event.offsetY;
  
    let y1 = this.initialVector[0];
    let y2 = -this.initialVector[1];
  
    this.rockAngle = Math.atan2(y2 - x2, y1 - x1) * 180 / Math.PI;
    //=============================
  }
  updatePosition(){
    this.velocityX = this.rockSpeed*(Math.cos(this.rockAngle*Math.PI/180));
    this.velocityY = this.rockSpeed*(Math.sin(this.rockAngle*Math.PI/180));
  
    this.x = this.startX + (this.velocityX*this.time)*this.direction;
    this.y = this.startY - ((this.velocityY*this.time - (1/2 * this.gravity*Math.pow(this.time,2))))*this.direction;
  
    if(this.ifStart === false){
      this.time = 0;
    }
    else{
      this.time +=0.6;
    }
  }
  setDirection(newDirection){
    this.direction = newDirection;
  }
  draw(){
    this.rockImg = new Image();
    this.rockImg.src = "./img/rock.png";
    this.ctx.drawImage(this.rockImg,this.x,this.y,this.size,this.size);
  }
  checkCollisionWithWall(wall){
    const collision = this.x + this.size > wall.x && this.x < wall.x + wall.sizeX && this.y + this.size > wall.y ;
    return collision;
  }
  checkCollisionWithPlayer(player){
    const collision = this.x + this.size/2 > player.x && this.x < player.x + player.size && this.y - this.size/2 > player.y ;
    return collision;
  }
}





