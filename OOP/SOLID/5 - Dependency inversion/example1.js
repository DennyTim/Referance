/**
 * (Похожая реализация есть у адаптера)
 * Принцип инверсии зависимостей в основном определяет отношения, которые вы должны 
 * иметь между модулями низкого уровня и модулями высокого уровня. Итак, что мы
 * подразумеваем под модулем низкого уровня. Что ж, давайте посмотрим на пример, где вы проводите исследование
 * генеалогии, поэтому вы хотите исследовать, кто с кем связан и каким образом. Поэтому для начала нам может
 * понадобиться определить какое-то перечисление отношений. Так что, если у вас есть два человека, они могут
 * иметь разные отношения, как один может быть родителем другого.
 */

let Relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

// LOW-LEVEL (STORAGE)

class RelationshipBrowser {
  constructor() {
    if (this.constructor.name === 'RelationshipBrowser')
      throw new Error('RelationshipBrowser is abstract!');
  }

  findAllChildrenOf(name) { }
}

class Relationships extends RelationshipBrowser {
  constructor() {
    super();
    this.data = [];
  }

  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child
    });
    this.data.push({
      from: child,
      type: Relationship.child,
      to: parent
    });
  }


  findAllChildrenOf(name) {
    return this.data.filter(r =>
      r.from.name === name &&
      r.type === Relationship.parent
    ).map(r => r.to);
  }
}

// HIGH-LEVEL (RESEARCH)

class Research {
  // constructor(relationships)
  // {
  //   // problem: direct dependence ↓↓↓↓ on storage mechanic
  //   let relations = relationships.data;
  //   for (let rel of relations.filter(r =>
  //     r.from.name === 'John' &&
  //     r.type === Relationship.parent
  //   ))
  //   {
  //     console.log(`John has a child named ${rel.to.name}`);
  //   }
  // }

  constructor(browser) {
    for (let p of browser.findAllChildrenOf('John')) {
      console.log(`John has a child named ${p.name}`);
    }
  }
}

let parent = new Person('John');
let child1 = new Person('Chris');
let child2 = new Person('Matt');

// low-level module
let rels = new Relationships();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

new Research(rels);