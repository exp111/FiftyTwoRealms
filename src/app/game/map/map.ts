import {Component} from '@angular/core';

enum RoomType {
  START,
  LIBRARY,
  SPRING,
}

interface Room {
  type: RoomType;
  x: number;
  y: number;
  width: number;
  height: number;
}

enum MapTile {
  EMPTY = -1,
  NULL = -2,
}

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.scss',
})
export class Map {
  width = 20;
  height = 20;
  rooms: Room[] = [
    {
      type: RoomType.START,
      x: 18,
      y: 1,
      width: 2,
      height: 2
    }
  ];

  map: (MapTile | Room)[][] = new Array(this.width)
    .fill(null)
    .map(() =>
      new Array(this.height).fill(MapTile.EMPTY)
    );

  constructor() {
    // fill map
    for (let room of this.rooms) {
      this.map[room.x][room.y] = room;
      // set all other tiles to null
      for (let x = 0; x < room.width; x++) {
        for (let y = 0; y < room.height; y++) {
          // skip first tile
          if (x == 0 && y == 0) {
            continue;
          }
          this.map[room.x + x][room.y + y] = MapTile.NULL;
        }
      }
    }
  }

  getRoom(tile: MapTile | Room) {
    // check if tile is valid room
    if (!tile || RoomType[(tile as Room).type] == null) {
      return null;
    }

    return tile as Room;
  }

  getRoomType(room: Room) {
    return RoomType[room.type].toLowerCase();
  }

  protected readonly MapTile = MapTile;
}
