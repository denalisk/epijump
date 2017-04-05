export class GameObject {
  public xCoord: number = 250;
  public yCoord: number = 90;
  public yDimension: number = 50;
  public xDimension: number = 5;
  constructor(public name: string) {
  }

  move(xVector: number, yVector: number){
    this.xCoord += xVector;
    this.yCoord += yVector;
  }
}
