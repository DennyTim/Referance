const SimpleMemberShip = function (name) {
  this.name = name;
  this.cost = '$5';
}

const StandartMemberShip = function (name) {
  this.name = name;
  this.cost = '$15';
}

const SuperMemberShip = function (name) {
  this.name = name;
  this.cost = '$25';
}

function MemberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMemberShip(name);
    } else if (type === 'standart') {
      member = new StandartMemberShip(name);
    } else if (type === 'super') {
      member = new SuperMemberShip(name);
    }

    member.type = type;
    member.define = function () {
      console.log(`${this.name} (${this.type}) : ${this.cost}`)
    }

    return member;
  }
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('John Doe', 'standart'));
members.push(factory.createMember('John Doe', 'super'));
members.push(factory.createMember('John Doe', 'simple'));

members.forEach(member => {
  member.define();
})
