//include express module or package
const express = require('express');
//create instance of express
const app = express();
app.get('/', (req, res) => res.send('Hello World, by Phemmy'));

app.get('/will', (req, res) => res.send('Great!, It works.'));

app.get('/ready', (req, res) => res.send('I am motivated, let go!'));

app.listen(4000, () => console.log('Listening on port 4000!'));