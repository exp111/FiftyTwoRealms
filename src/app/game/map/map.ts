import {Component} from '@angular/core';

enum RoomType {
  START,
  LIBRARY,
  SPRING,
  MERCHANT,
  EVENT,
  CHALLENGE,
  BOSS
}

interface Room {
  type: RoomType;
  x: number;
  y: number;
  width: number;
  height: number;
  //TODO: connections?
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
  width = 13;
  height = 20;
  rooms: Room[] = [
    {
      type: RoomType.MERCHANT,
      x: 0,
      y: 0,
      width: 2,
      height: 2
    },
    {
      type: RoomType.EVENT,
      x: 6,
      y: 0,
      width: 3,
      height: 3
    },
    {
      type: RoomType.BOSS,
      x: 10,
      y: 0,
      width: 3,
      height: 3
    },
    {
      type: RoomType.CHALLENGE,
      x: 0,
      y: 3,
      width: 3,
      height: 3
    },
    {
      type: RoomType.EVENT,
      x: 6,
      y: 4,
      width: 3,
      height: 3
    },
    {
      type: RoomType.LIBRARY, //TODO: Goblin Hoard
      x: 10,
      y: 4,
      width: 2,
      height: 2
    },
    {
      type: RoomType.SPRING,
      x: 1,
      y: 7,
      width: 2,
      height: 2
    },
    {
      type: RoomType.SPRING,
      x: 10,
      y: 7,
      width: 2,
      height: 2
    },
    {
      type: RoomType.LIBRARY, //TODO: lizard lair
      x: 6,
      y: 9,
      width: 2,
      height: 2
    },
    {
      type: RoomType.CHALLENGE,
      x: 0,
      y: 10,
      width: 3,
      height: 3
    },
    {
      type: RoomType.CHALLENGE,
      x: 10,
      y: 11,
      width: 3,
      height: 3
    },
    {
      type: RoomType.EVENT,
      x: 0,
      y: 14,
      width: 3,
      height: 3
    },
    {
      type: RoomType.START,
      x: 0,
      y: 17,
      width: 2,
      height: 2
    }
  ];

  map: (MapTile | Room)[][] = new Array(this.height)
    .fill(null)
    .map(() =>
      new Array(this.width).fill(MapTile.EMPTY)
    );

  constructor() {
    // fill map
    for (let room of this.rooms) {
      this.map[room.y][room.x] = room;
      // set all other tiles to null
      for (let x = 0; x < room.width; x++) {
        for (let y = 0; y < room.height; y++) {
          // skip first tile
          if (x == 0 && y == 0) {
            continue;
          }
          this.map[room.y + y][room.x + x] = MapTile.NULL;
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
