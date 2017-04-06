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
  // Check for key Inputfunction
  keyState = {};


  @Input() newPlayer: Player;
  scores: FirebaseListObservable<any[]>;
  gameBoard: Game = null;
  canvas = null;
  ctx = null;
  objectArray: GameObject[] = [];
  recentScores: Score[] = [];

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.scores = this.scoreService.getScores();
    var newGame = new Game(this.newPlayer);
    this.gameBoard = newGame;
    this.canvas = document.getElementById("gameBase");
    this.ctx = this.canvas.getContext("2d");

    /// Event Listeners
    window.addEventListener('keydown',(e) => {
        this.keyState[e.keyCode || e.which] = true;
    },true);
    window.addEventListener('keyup', (e) => {
        this.keyState[e.keyCode || e.which] = false;
    },true);

    ///
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
      if (item.mover[0]) {
        item.move(item.mover[1],1);
      } else {
        item.move(0, 1);
      }
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
            this.newPlayer.bounce(GameObject.counter);
          }
    }

    if(this.newPlayer.xCoord > 290) {
      this.newPlayer.xCoord = 0;
    }
    if(this.newPlayer.xCoord < 0) {
      this.newPlayer.xCoord = 290;
    }
  }

  //Update Loop
  gameLoop() {
    var current = this;
    var counter = 0;
    var gameTick = setInterval(function(){

      if (current.keyState[37] || current.keyState[65]){
        current.newPlayer.move(-1);
      }
      if (current.keyState[39] || current.keyState[68]){
          current.newPlayer.move(1);
      }


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
        GameObject.cleanUp();
        let newScore = new Score(current.newPlayer.name, current.newPlayer.score);
        if(current.recentScores.length > 10) {
            current.recentScores.pop();
          }
          current.recentScores.unshift(newScore);
        if(current.newPlayer.score > 300) {
          current.scoreService.addScore(newScore);
        }
        current.newPlayer.score = 0;
        // clearInterval(gameTick);
      }
    }, 30);
  }
}
