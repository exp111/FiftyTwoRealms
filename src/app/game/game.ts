import { Component } from '@angular/core';
import {Map} from './map/map';

@Component({
  selector: 'app-game',
  imports: [
    Map
  ],
  templateUrl: './game.html',
  styleUrl: './game.scss'
})
export class Game {

}
