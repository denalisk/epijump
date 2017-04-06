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

}
