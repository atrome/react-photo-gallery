const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Photo carousel listening on port ${port}!`));
