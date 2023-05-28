import express from 'express';
import router from './src/router.js';
const app = express();

router(app);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});