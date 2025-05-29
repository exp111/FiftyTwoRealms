import { Component } from '@angular/core';

enum HpEntryType {
  Death,
  Wound,
  Ready,
  Parry
}

interface HpEntry {
  type: HpEntryType;
  value: number;
}

@Component({
  selector: 'app-enemy',
  imports: [],
  templateUrl: './enemy.html',
  styleUrl: './enemy.scss'
})
export class Enemy {
  maxHP = 30;
  currentHP = 0;

  hpEntries = new Array(this.maxHP).fill(null);

  constructor() {
    this.addHpEntry(24, HpEntryType.Wound);
    this.addHpEntry(22, HpEntryType.Ready);
    this.addHpEntry(20, HpEntryType.Parry);
    this.addHpEntry(18, HpEntryType.Ready, 2);
    this.addHpEntry(16, HpEntryType.Wound);
    this.addHpEntry(14, HpEntryType.Parry);
    this.addHpEntry(12, HpEntryType.Ready);
    this.addHpEntry(10, HpEntryType.Parry);
    this.addHpEntry(8, HpEntryType.Wound);
    this.addHpEntry(6, HpEntryType.Ready);
    this.addHpEntry(4, HpEntryType.Parry);
    this.addHpEntry(2, HpEntryType.Ready, 2);
    this.addHpEntry(0, HpEntryType.Death);
  }

  addHpEntry(hp: number, type: HpEntryType, value = 1) {
    let index = this.maxHP - hp;
    this.hpEntries[index] = {
      type: type,
      value: value
    }
  }

  getHpEntryTypeName(entry: HpEntry) {
    if (!entry) {
      return "";
    }
    return HpEntryType[entry.type].toLowerCase();
  }
}
