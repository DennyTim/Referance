class Character {
  constructor(name) {}
  move() {}
  speak() {}
} 

const warriorBehavior = {
  attack() {},
  defend() {}
};

const wizzardBehavior = {
  castSpell() {}
};

class Warrior extends Character {
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
  }
}

class Wizzard extends Character {
  constructor(name, spell) {
    super(name);
    this.spell = spell;
  }
}

class Knight extends Character {
  constructor(name, weapon, spell) {
    super(name);
    this.weapon = weapon;
    this.spell = spell;
  }
}
//Декаратор
Warrior.prototype = Object.assign(Warrior.prototype, warriorBehavior); 
Wizzard.prototype = Object.assign(Wizzard.prototype, wizzardBehavior);
Knight.prototype = Object.assign(Knight.prototype, warriorBehavior, wizzardBehavior);