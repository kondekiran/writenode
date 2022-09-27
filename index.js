const express = require('express');

const app = express();

app.get('/',(req, res)=> {
    res.links('https://hub.docker.com/');
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});

