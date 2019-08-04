let arr = new Array(50).fill("");
$("body").append(`<table>${arr.map(()=>`<tr>${arr.map(()=>`<td></td>`).join("")}</tr>`).join("")}</table>`);