import { Component } from '@angular/core';
import {Map} from './map/map';
import {Enemy} from './enemy/enemy';

@Component({
  selector: 'app-game',
  imports: [
    Map,
    Enemy
  ],
  templateUrl: './game.html',
  styleUrl: './game.scss'
})
export class Game {

}
