export class GameObject {
  public xDimension: number = 50;
  public yDimension: number = 5;
  public yCoord: number = 0;
  public xCoord: number = this.getX();
  public color: string = "#FF0000";

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
