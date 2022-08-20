import express from 'express';
import { join } from 'path';

import { load } from './routes/index.js';

function useRouter(app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(join(__dirname, 'public')));
    app.use('/', load);
}

export default useRouter;