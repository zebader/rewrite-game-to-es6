'use strict';

class Player{
  constructor(canvas,posX){
    this.canvas = canvas;
    this.size = this.canvas.height/6;
    this.x = posX;
    this.y = canvas.height - (this.size+60);
    this.ctx = this.canvas.getContext('2d');;
    this.lives = 3;
    this.direction = 0;
    this.speed = 3;
    this.spritePos = 0;
    this.getHitByRock = false;
    this.playerTurn = false;
    this.wasHit = false;
  }
  updateXPosition(){
    this.x = this.x + this.direction*this.speed;
    if(this.x < 0){
      this.x = 0
    }
    if(this.x >= this.canvas.width - this.size){
      this.x = this.canvas.width - this.size;
    }
    return this.x
  }
  setDirection(newDirection){
    this.direction = newDirection;
  }
  updateXPosition(){
    this.x = this.x + this.direction*this.speed;
    if(this.x < 0){
      this.x = 0
    }
    if(this.x >= this.canvas.width - this.size){
      this.x = this.canvas.width - this.size;
    }
    return this.x
  }
  setDirection(newDirection){
    this.direction = newDirection;
  }
  draw(imgPlayer){
    this.playerImg = new Image();
    this.playerImg.src = imgPlayer;
    this.ctx.drawImage(this.playerImg,this.playerImg.height*this.spritePos,0,this.playerImg.height,this.playerImg.height,this.x,this.y,this.size,this.size);
  }
  drawLife(posX,posY,size){
    this.lifeImg = new Image();
    this.lifeImg.src = "./img/life.png";
  
    if(this.lives === 3){
      this.ctx.drawImage(this.lifeImg,this.lifeImg.height*0,0,this.lifeImg.height*3,this.lifeImg.height,posX,posY,size*3,size);
    }
    if(this.lives === 2){
      this.ctx.drawImage(this.lifeImg,(this.lifeImg.height*3)*1,0,this.lifeImg.height*3,this.lifeImg.height,posX,posY,size*3,size);
    }
    if(this.lives === 1){
      this.ctx.drawImage(this.lifeImg,(this.lifeImg.height*3)*2,0,this.lifeImg.height*3,this.lifeImg.height,posX,posY,size*3,size);
    }
  }
  setLives(){
    this.lives--;
  }
  blockPlayer(fixedPos){
    this.direction = 0;
  }
  checkCollisionWithWall(wall){
    const collisionRight = this.x + this.size > wall.x;
    const collisionLeft = this.x < wall.x + wall.sizeX;
    return collisionRight && collisionLeft;
  }
}

