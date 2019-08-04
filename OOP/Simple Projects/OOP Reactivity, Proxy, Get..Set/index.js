class VueProxy {
    constructor(settings) {
        this.$el = document.querySelector(settings.el);
        this.$template = settings.template;
        this.$data = settings.data;

        this.data = new Proxy(this.$data, {
            get: (target, name) => {
                return target[name];
            },
            set: (target, name, value) => {
                target[name] = value;
                this.render();
                return true;
            }
        })
        this.render();
    }

    render() {
        /** 
         * +виртуальный DOM
         * +обширные возможности в шаблонах
         */
        // метод для поиска и замены строки
        let html = this.$template.replace(/{{(.*?)}}/g, (match, name) => {
            let key = name.trim();
            return this.$data[key];
        });

        this.$el.innerHTML = html;
    }
}

let vp = new VueProxy({
    el: '.elem2',
    data: {
        clicks: 3,
        name: 'some2!'
    },
    template: `<div><h2>{{ clicks }}</h2>{{ name }}</div>`
});

document.querySelector('.elem2').addEventListener('click', function (e) {
    if (e.target.tagName == 'H2') {
        vp.data.clicks++;
    }
})