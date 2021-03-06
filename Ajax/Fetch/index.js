
const getResource = async(url) => {
    const res = await fetch(url);
    const body = await res.json();
    return body;
}

getResource('https://swapi.co/api/people/1/')
    .then((body) => {
        console.log(body);
    });


/** Fetch old Promise
fetch('https://swapi.co/api/people/1/')
    .then((res) => {
        return res.json();
    })
    .then((body) => {
        console.log(body);
    });
*/