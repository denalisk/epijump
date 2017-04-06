import { Pipe, PipeTransform } from '@angular/core';
import { Score } from "./score.model";

@Pipe({
  name: 'highScore',
  pure: false
})
export class HighScorePipe implements PipeTransform {

  transform(scores: Score[]) {
    console.log(scores[0]);
    return scores;
  }

}
