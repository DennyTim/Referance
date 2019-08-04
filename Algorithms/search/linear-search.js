function linearSearch(array, value) {

    let steps = 1;

    for(let i = 0; i < array.length; i++) {
        let item = array[i];
        if(item === value) {
            return [i, steps];
        }

        steps +=1;
    }

    return [-1, steps];
}

module.exports = linearSearch;