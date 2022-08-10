const express = require('express');
const router = require('./src/router');
const app = express();

router(app);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});