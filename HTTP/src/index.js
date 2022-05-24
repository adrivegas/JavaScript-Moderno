const jokeUrl = 'https://api.chucknorris.io/jokes/random';

fetch(jokeUrl).then(resp => {
    console.log(resp);
    // le decimos a la respuesta que extraiga el body en formato de json
    resp.json().then(data => {
        console.log(data);
    });
});

// Lo anterior usando desestructuración, para obtener los valores que necesito

fetch(jokeUrl).then(resp => {
    console.log(resp);
    // le decimos a la respuesta que extraiga el body en formato de json
    resp.json().then(({ id, value}) => {
        console.log(id);
        console.log(value);
    });
});
