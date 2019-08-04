function splitify(str) {
    let newStr = str.split(/\W/g);
    return newStr;
}
console.log(splitify("Hello World,I-am code"));

function sentensify(str) {
    return str.split(/\W/g).join(" ");
}
console.log(sentensify("May-the-force-be-with-you"));