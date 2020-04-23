// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
const express = require('express');


const app = express();
const port: number = Number(process.env.SERVER_PORT);

app.use(express.static('./dist'));

app.listen(port, () => console.log(`listening on port ${port}`));
