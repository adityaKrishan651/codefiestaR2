const express = require('express');
const users = require('./users');

const router = express.Router();

// Define routes
router.get('/users', async (req, res) => {
    try {
        res.send(users)
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

module.exports = router;