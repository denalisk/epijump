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
  dummyObject: GameObject = new GameObject('Dummy');

  constructor() { }

  placeObject(gameObject: GameObject) {
    this.ctx.beginPath();
    this.ctx.rect(gameObject.xCoord, gameObject.yCoord, gameObject.yDimension, gameObject.xDimension);
    this.ctx.fillStyle = "#FF0000";
    this.ctx.fill();
    this.ctx.closePath();
  }

  ngOnInit() {
    var newGame = new Game(this.newPlayer);
    this.gameBoard = newGame;
    this.canvas = document.getElementById("gameBase");
    this.ctx = this.canvas.getContext("2d");
    this.placeObject(this.dummyObject);
    this.gameLoop();
  }


  //Update Loop
  gameLoop() {
    var current = this;
    setInterval(function(){
      current.ctx.clearRect(0, 0, current.canvas.width, current.canvas.height);
      current.dummyObject.move(0,2);
      current.placeObject(current.dummyObject);
    }, 200);
  }


}
