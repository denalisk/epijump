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
  public gravity: number = 1.02; //1.05
  public speed: number = 18;
  constructor(public name: string) {
    super();
  }

  applyGravity(){
    this.yCoord += this.velocityVector;
    this.velocityVector = this.velocityVector*this.gravity;
  }

  move(movement: number) {
    this.xCoord += movement*this.speed;
  }
}
