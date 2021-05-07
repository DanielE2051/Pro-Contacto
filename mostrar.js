const rp = require('request-promise');
const options = {
    method: 'GET',
    uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json'
}

rp(options)
    .then(function (response) {
        // Process html...
        console.log('Entro:  ',response);
    })
    .catch(function (err) {
        // Crawling failed...
    });