import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player.model';
import { Game } from '../game.model';
import { Score } from '../score.model';
import { GameObject } from '../game-object.model';
import { ScoreService } from '../score.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css'],
  providers: [ScoreService]
})
export class GameboardComponent implements OnInit {
  @Input() newPlayer: Player;
  scores: FirebaseListObservable<any[]>;
  gameBoard: Game = null;
  canvas = null;
  ctx = null;
  objectArray: GameObject[] = [];

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.scores = this.scoreService.getScores();
    var newGame = new Game(this.newPlayer);
    this.gameBoard = newGame;
    this.canvas = document.getElementById("gameBase");
    this.ctx = this.canvas.getContext("2d");
    this.gameLoop();
  }

  placeObject(gameObject: GameObject) {
    this.ctx.beginPath();
    this.ctx.rect(gameObject.xCoord, gameObject.yCoord, gameObject.xDimension, gameObject.yDimension);
    this.ctx.fillStyle = gameObject.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  updateObjects() {
    this.newPlayer.applyGravity();
    for(let item of this.objectArray) {
      item.move(0, 1);
      this.placeObject(item);
    }
  }

  generateObject() {
    var newGameObject = new GameObject();
    this.objectArray.push(newGameObject);
    if(this.objectArray.length > 6) {
      this.objectArray.shift();
    }
  }

  checkCollisions() {
    for (let item of this.objectArray) {
      if( item.xCoord < this.newPlayer.xCoord + this.newPlayer.xDimension &&
          item.xCoord + item.xDimension > this.newPlayer.xCoord &&
          item.yCoord < this.newPlayer.yCoord + this.newPlayer.yDimension &&
          item.yDimension + item.yCoord > this.newPlayer.yCoord) {
            console.log("Collisions!")
            this.newPlayer.bounce();
          }
    }

    if(this.newPlayer.xCoord > 300) {
      this.newPlayer.xCoord = 0;
    }
    if(this.newPlayer.xCoord < 0) {
      this.newPlayer.xCoord = 300;
    }
  }

  //Update Loop
  gameLoop() {
    var current = this;
    var counter = 0;
    var gameTick = setInterval(function(){
      //KEY PRESS
      document.onkeydown = checkKey;
      function checkKey(e) {
          e = e || window.event;
          if (e.keyCode == '37') {
            //left arrow
             current.newPlayer.move(-1);
          }
          else if (e.keyCode == '39') {
             // right arrow
             current.newPlayer.move(1);
          }
      }
      //////////

      if(counter % 30 === 0) {
        current.generateObject();
      }
      current.ctx.clearRect(0, 0, current.canvas.width, current.canvas.height);
      current.placeObject(current.newPlayer);
      current.updateObjects();
      current.checkCollisions()
      counter++;
      current.newPlayer.score += 1;
      if(current.newPlayer.deathCheck()) {
        console.log('Game Over');
        console.log(current.newPlayer.score)
        if(current.newPlayer.score > 300) {
          current.scoreService.addScore(new Score(current.newPlayer.name, current.newPlayer.score));
        }
        current.newPlayer.score = 0;
        // clearInterval(gameTick);
      }
    }, 30);
  }
}
