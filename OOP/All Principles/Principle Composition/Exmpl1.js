class WarriorBehavior {
  attack() {/** Our code */}
  defend() {/** Our code */}
}

class WizzardBehavior {
  castspell() {/** Our code */}
}

class Character {
  constructor(name) {
    this.name = name;
  }
}

class Warrior extends Character {
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
    this.behavior = new WarriorBehavior()
  }
  attack() {
    this.behavior.attack();
  }
  defend() {
    this.behavior.defend();
  }
}

class Wizzard extends Character {
  constructor(name, spell) {
    super(name);
    this.spell = spell;
    this.behavior = new WizzardBehavior()
  }

  castspell() {
    this.behavior.castspell();
  }
}

class Knight extends Character {
  constructor(name, weapon, spell) {
    super(name);
    this.weapon = weapon;
    this.spell = spell;
    this.warriorBehavior = new WarriorBehavior();
    this.wizzardBehavior = new WizzardBehavior();
  }

  attack() {
    this.warriorBehavior.attack();
  }

  defend() {
    this.warriorBehavior.defend();
  }
  
  castspell() {
    this.wizzardBehavior.castspell();
  }
}