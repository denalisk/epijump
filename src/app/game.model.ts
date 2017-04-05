import { Player } from './player.model';
import { GameObject } from './game-object.model';

export class Game {
  public xDimension: number = 700;
  public yDimension: number = 900;
  public objectArray: GameObject = new GameObject();
  public recentScores: number[] = [];
  public highScores: number[] = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 24];

  constructor(public player: Player) { }



  placeObject() {

  }

  addToScores(score: number) {
    if(this.recentScores.length > 10) {
      this.recentScores.shift();
    }
    this.recentScores.unshift(score);
    if (this.highScores.length < 10) {
      this.highScores.push(score)
    } else {
      for (let i = 0; i < this.highScores.length; i++) {
        if (this.highScores[i] < score) {
          this.highScores.splice(i, 0, score);
          if(this.highScores.length > 10) {
            this.highScores.pop();
          }
          break;
        }
      }
    }
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
