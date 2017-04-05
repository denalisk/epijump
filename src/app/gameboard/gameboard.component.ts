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

      if(counter % 90 === 0) {
        current.generateObject();
      }
      current.ctx.clearRect(0, 0, current.canvas.width, current.canvas.height);
      current.placeObject(current.newPlayer);
      current.updateObjects();
      counter++;
    }, 30);
  }


}
