export class GameObject {
  public yDimension: number = 50;
  public xDimension: number = 5;
  public yCoord: number = 0;
  public xCoord: number = this.getX();

  getX() {
    var coordinateArray = [0, 30, 60, 80, 90, 100, 120, 140, 170, 180, 200, 210, 230, 250];
    return coordinateArray[Math.floor((Math.random())*coordinateArray.length)]
  }
  constructor() {
  }

  move(xVector: number, yVector: number){
    this.xCoord += xVector;
    this.yCoord += yVector;
  }
}
