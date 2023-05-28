import express from 'express';
import { join } from 'path';

import { load } from './routes/index.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function useRouter(app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(join(__dirname, 'public')));
    app.use('/', load);
}

export default useRouter;