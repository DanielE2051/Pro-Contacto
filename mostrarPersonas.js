var rp = require('request-promise');

rp('http://www.google.com')
    .then(function (htmlString) {
        // Process html...
    })
    .catch(function (err) {
        // Crawling failed...
    });