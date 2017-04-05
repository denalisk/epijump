import { GameObject } from './game-object.model';

export class Player extends GameObject {
  public score: number = 0;
  public xCoord: number = 125;
  public yCoord: number = 0;
  public xDimension: number = 15;
  public yDimension: number = 5;
  public color: string = "blue";
  public timer: number = 0;
  public velocityVector: number[] = [0,1];
  public gravity: number = 1.05;
  constructor(public name: string) {
    super();
  }

  applyGravity(){
    this.xCoord += this.velocityVector[0];
    this.yCoord += this.velocityVector[1];
    this.velocityVector = [this.velocityVector[0]*this.gravity, this.velocityVector[1]*this.gravity];
  }
}
