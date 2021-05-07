const rp = require('request-promise');
const options = {
    method: 'GET',
    uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json'
}

rp(options)
    .then(function (response) {
        console.log('Json de Pro contacto:  ',response);
    })
    .catch(function (err) {
    });