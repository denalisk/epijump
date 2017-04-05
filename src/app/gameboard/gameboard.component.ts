import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player.model';
import { Game } from '../game.model';
import { GameObject } from '../game-object.model';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  @Input() newPlayer: Player;
  gameBoard: Game = null;
  canvas = null;
  ctx = null;
  objectArray: GameObject[] = [];

  constructor() { }

  placeObject(gameObject: GameObject) {
    this.ctx.beginPath();
    this.ctx.rect(gameObject.xCoord, gameObject.yCoord, gameObject.yDimension, gameObject.xDimension);
    this.ctx.fillStyle = "#FF0000";
    this.ctx.fill();
    this.ctx.closePath();
  }

  updateObjects() {
    for(let item of this.objectArray) {
      item.move(0, 1);
      this.placeObject(item);
    }
  }

  ngOnInit() {
    var newGame = new Game(this.newPlayer);
    this.gameBoard = newGame;
    this.canvas = document.getElementById("gameBase");
    this.ctx = this.canvas.getContext("2d");
    this.gameLoop();
  }

  generateObject() {
    var newGameObject = new GameObject();
    this.objectArray.push(newGameObject);
    if(this.objectArray.length > 6) {
      this.objectArray.shift();
      console.log(this.objectArray);
    }
  }

  //Update Loop
  gameLoop() {
    var current = this;
    var counter = 0;
    setInterval(function(){
      if(counter % 30 === 0) {
        current.generateObject();
      }
      current.ctx.clearRect(0, 0, current.canvas.width, current.canvas.height);
      current.updateObjects();
      counter++;
    }, 30);
  }


}
