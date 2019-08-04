function watchObj(node, callback) {
    return new Proxy(node, {
        set(target, name, value) {
            target[name] = value;	//setter ля изменения разметки
            callback(name, value);	//callback для просмотра событий в консоле
            return true;
        },
        get(target, name) {				// в зависимости от метода селектора происходит либо геттер либо сеттер
			console.log(target);		// приходит обьект(<div style="color: red;"><strong>HTML</strong><em>Changed</em></div>)
			console.log(name);			// style 
			console.log(target[name]); 	// CSSStyleDeclaration {alignContent: "", alignItems: "", …}
            switch(typeof target[name]) {
                case 'object':
                    return watchObj(target[name], callback);
                case 'function':
                    return target[name].bind(target);	// cleverDiv.querySelector('em').style.color у функции сломался this
                default:
                    return target[name];
            }
        }
    });
}

let div = document.createElement('div');
document.body.appendChild(div);

let cleverDiv = watchObj(div, function(prop, val){
    console.log(prop, val);
});

cleverDiv.innerHTML = '<strong>HTML</strong><em>Changed</em>';
/* 
    в консоли: 
    innerHTML <strong>HTML</strong><em>Changed</em
*/
//console.log(cleverDiv.innerHTML);
cleverDiv.style.color = 'red';
/* 
    весь текст стал красным
    в консоли: 
    color red
*/

cleverDiv.querySelector('em').style.color = 'green';
/* 
    em стал зелёным
    в консоли ничего не добавилось

    // популярная ошибка Illegal invocation - из-за манипуляций у функции сломался this
*/

cleverDiv.classList.add('some');