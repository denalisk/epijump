export class GameObject {
  public static baseX: number = 50;
  public static counter: number = 1;
  public xDimension: number = GameObject.baseX;
  public yDimension: number = 5;
  public yCoord: number = 0;
  public xCoord: number = this.getX();
  public color: string = "#FF0000";
  public mover: any[] = [false, 1];

  constructor() {
    this.xDimension = (GameObject.baseX - GameObject.counter * 0.2);
    this.checkDimensions();
    this.chanceMover();
    GameObject.counter++;
  }

  chanceMover() {
    var result: number;
    if (GameObject.counter < 100 && GameObject.counter % (3 + Math.floor(Math.random()*2)) === 0) {
      result = Math.floor(Math.random() * (50 / GameObject.counter));
      if (result < 3) {
       this.mover[0] = true;
      }
    } else if (GameObject.counter >= 150) {
        this.mover[0] = true;
    } else if (GameObject.counter >= 100 && GameObject.counter % (1 + Math.floor(Math.random()*2))) {
      result = Math.floor(Math.random() * (50 / GameObject.counter));
      if (result < 2) {
        this.mover[0] = true;
      }
    }
    var direction = Math.random();
    if (direction > .5) {
      this.mover[1] = 1;
    } else {
      this.mover[1] = -1;
    }
  }

  checkDimensions() {
    if (this.xDimension <= 15) {
      this.xDimension = 15;
    }
  }

  getX() {
    var coordinateArray = [0, 30, 60, 80, 90, 100, 120, 140, 170, 180, 200, 210, 230, 250];
    return coordinateArray[Math.floor((Math.random())*coordinateArray.length)]
  }

  move(xVector: number, yVector: number){
    if (this.xCoord === 250) {
      this.mover[1] = -1;
    } else if (this.xCoord === 0) {
      this.mover[1] = 1;
    }
    this.xCoord += xVector;
    this.yCoord += yVector;
  }

  static cleanUp() {
    GameObject.baseX = 50;
    GameObject.counter = 1;
  }
}
