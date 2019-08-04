// Идея реактивности данных на основе сеттеров для перерендеренга страницы

class VueGetters {
    constructor(settings){
        this.$el = document.querySelector(settings.el);  // '.elem1'
        this.$template= settings.template;				 // `<div><h2>{{ clicks }}</h2>{{ name }}</div>`
        this.$data = settings.data;						 // {clicks: 1, name: 'some!'}
        this.data = {};									 // обьект для хранения свойств

        for(let name in  this.$data) {
            Object.defineProperty(this.data, name, {
                get: () => {
                    return this.$data[name];
                },
                set: (value) => {
                    this.$data[name] = value;
					this.render();
                }
            });
        }

        this.render();
    }

    render() {
        let html = this.$template.replace(/{{(.*?)}}/g, (match, name) => {  // метод для поиска и замены строки
            let key = name.trim();
            return this.$data[key];
        });

        this.$el.innerHTML = html;
    }
}


let vg = new VueGetters({
    el: '.elem1',
    data: {
        clicks: 1,
        name: 'some!'
    },
    template: `<div><h2>{{ clicks }}</h2>{{ name }}</div>`
});

document.querySelector('.elem1').addEventListener('click', function(e){
    if (e.target.tagName == 'H2') {
        vg.data.clicks++;
    }
})
