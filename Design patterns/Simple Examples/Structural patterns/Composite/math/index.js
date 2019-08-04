// 2 + (3 + 4)

class Literal {
    constructor(value) {
        this.value = value;
    }

    eval() {
        return this.value;
    }
}

class Expression {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    eval() {
        return this.left.eval() + this.right.eval();
    }
}

const two = new Literal(2);
const three = new Literal(3);
const four = new Literal(4);

const result = new Expression(two, new Expression(three, four)).eval();

console.log(result);