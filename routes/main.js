const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Головна' });
});

module.exports = router;
