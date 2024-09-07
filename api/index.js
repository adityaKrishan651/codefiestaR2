const express = require('express');
const port = 3000;

const routes = require('./routes')



const app = express();

app.use('/', routes)

app.listen(port, () => {
    console.log(`listening at port ${port}`);
})