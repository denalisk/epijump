import { Player } from './player.model';
import { GameObject } from './game-object.model';

export class Game {
  public xDimension: number = 700;
  public yDimension: number = 900;
  public objectArray: GameObject = new GameObject('Platform');

  constructor(public player: Player) { }



  placeObject() {

  }

  // manageObjects {
  //   loop over gameObjects:
  //      update positions based on Input and then replace the objects
  // }

  // startTimer() {
  //   interval {
  //     if(condition) {
  //       placeObject();
  //     }
  //   }
  // }
}
