import { GameObject } from './game-object.model';

export class Player extends GameObject {
  public score: number = 0;
  public xCoord: number = 125;
  public yCoord: number = 0;
  public xDimension: number = 15;
  public yDimension: number = 5;
  public color: string = "blue";
  public timer: number = 0;
  public velocityVector: number = 1;
  public gravity: number = .5; //1.05
  public speed: number = 18;
  constructor(public name: string) {
    super();
  }

  applyGravity(){
    this.yCoord += this.velocityVector;
    this.velocityVector += this.gravity;
  }

  deathCheck(){
    if(this.yCoord > 150) {
      this.yCoord = 0;
      this.velocityVector = 1;
      return true;
    }
  }

  move(movement: number) {
    this.xCoord += movement*this.speed;
  }

  bounce(){
    this.score += 5;
    this.velocityVector = -6;
  }

}
