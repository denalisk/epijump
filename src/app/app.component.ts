import { Component } from '@angular/core';
import { Player } from './player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EpiJump';
  newPlayer = new Player("Dude");
  createPlayer(name: string) {
    var newPlayer = new Player(name);
    this.newPlayer = newPlayer;
  }
}
