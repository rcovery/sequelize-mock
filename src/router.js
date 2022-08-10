const express = require('express');
const path = require('path');

const index = require('./services/index.js');

function useRouter(app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, 'public')));
    // app.use('/api', apiRouter);
    app.use('/', index.load);
}

module.exports = useRouter;