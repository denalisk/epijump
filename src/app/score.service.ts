import { Injectable } from '@angular/core';
import { Score } from './score.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import "rxjs/add/operator/map";

@Injectable()
export class ScoreService {

  scores: FirebaseListObservable<any[]>;


  constructor(private angularFire: AngularFire) {
    this.scores = angularFire.database.list('scores', {
      query: {
        orderByChild: "score",
        limitToLast: 10
      }
    }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
  }

  getScores() {
    return this.scores;
  }

  addScore(newScore: Score) {
    this.scores.push(newScore);
  }


  // addToScores(score: number) {
  //   if(this.scores.length > 10) {
  //     this.scores.pop();
  //   }
  //   this.scores.unshift(score);
  //   if (this.highScores.length < 10) {
  //     this.highScores.push(score)
  //   } else {
  //     for (let i = 0; i < this.highScores.length; i++) {
  //       if (this.highScores[i] < score) {
  //         this.highScoresthis.splice(i, 0, score);
  //         if(this.highScores.length > 10) {
  //           this.highScores.pop();
  //         }
  //         break;
  //       }
  //     }
  //   }
  // }

}
