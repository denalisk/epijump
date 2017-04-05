import { Injectable } from '@angular/core';
import { Score } from './score.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ScoreService {
  // scores: FirebaseListObservable<any[]>;

  scores: FirebaseListObservable<any[]>;
  // highScores: Score[] = [new Score('Jim from Accounting', 1000), new Score('Jim from Accounting', 900), new Score('Jim from Accounting', 800), new Score('Jim from Accounting', 700), new Score('Jim from Accounting', 600), new Score('Jim from Accounting', 500), new Score('Jim from Accounting', 400), new Score('Jim from Accounting', 300), new Score('Jim from Accounting', 200), new Score('Jim from Accounting', 24)];

  constructor(private angularFire: AngularFire) {
    this.scores = angularFire.database.list('scores');
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
