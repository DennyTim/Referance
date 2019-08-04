let some = {
    _private: {
        cnt: 4
    },
    min: 2,
    max: 10
};

Object.defineProperty(some, 'cnt', {
    //obj.cnt
    get(){
        console.log('getter');
        return this._private.cnt;
    },

    //obj.cnt = n
    set(value){
        console.log('setter', value);
        if (value < this.min) {
            value = 1;
        }
        else if(value >= this.max) {
            value = this.max;
        }
        this._private.cnt = value;
    }
})