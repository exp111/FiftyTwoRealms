import {Component} from '@angular/core';

enum HpEntryType {
  Death,
  Wound,
  Ready,
  Parry
}

enum Suit {
  Club,
  Heart,
  Spade,
  Diamond
}

interface HpEntry {
  type: HpEntryType;
  value: number;
}

interface EnemyType {
  name: string;
  suit: Suit;
  special?: string;
  abilities: EnemyAbility[];
}

interface EnemyAbility {
  text: string;
  suit: Suit;
  instant?: boolean;
}

@Component({
  selector: 'app-enemy',
  imports: [],
  templateUrl: './enemy.html',
  styleUrl: './enemy.scss'
})
export class Enemy {
  enemyTypes: EnemyType[] = [
    {
      name: "Goblin",
      suit: Suit.Club,
      abilities: [
        {
          suit: Suit.Club,
          text: "Attack X"
        },
        {
          suit: Suit.Spade,
          text: "Attack 5, if damaged exhaust highest EQUIP"
        },
        {
          suit: Suit.Diamond,
          text: "Exhaust all EQUIP <8"
        },
        {
          suit: Suit.Heart,
          text: "Destroy 1",
          instant: true
        }
      ]
    },
    {
      name: "Ghoul",
      suit: Suit.Spade,
      abilities: [
        {
          suit: Suit.Club,
          text: "Attack X, if not blocked Heal 2HP"
        },
        {
          suit: Suit.Spade,
          text: "Attack 7. Can Only defend with CLUB/SPADE EQUIP"
        },
        {
          suit: Suit.Diamond,
          text: "If not damaged, heal X+5HP"
        },
        {
          suit: Suit.Heart,
          text: "Heal 6HP",
          instant: true
        }
      ]
    },
    {
      name: "Lizard",
      suit: Suit.Diamond,
      abilities: [
        {
          suit: Suit.Club,
          text: "Attack X+5"
        },
        {
          suit: Suit.Spade,
          text: "Attack X, if perfectly blocked, lose XHP"
        },
        {
          suit: Suit.Diamond,
          text: "If not damaged heal 2XHP"
        },
        {
          suit: Suit.Heart,
          text: "Block 5, if not damaged attack X"
        }
      ]
    },
    {
      name: "Wight",
      suit: Suit.Heart,
      special: "Damage dealt always wounds",
      abilities: [
        {
          suit: Suit.Club,
          text: "Attack X"
        },
        {
          suit: Suit.Spade,
          text: "Attack 8. Can only be blocked with single EQUIP"
        },
        {
          suit: Suit.Diamond,
          text: "Block 8. If not damaged, exhaust highest EQUIP"
        },
        {
          suit: Suit.Heart,
          text: "Destroy X cards, where X is the number of WOUND cards you have"
        }
      ]
    }
  ]

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

  getSuit(suit: Suit) {
    return Suit[suit].toLowerCase();
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
