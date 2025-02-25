import express, { Request, Response } from 'express';
const router = express.Router();

const controller = require('../controllers/registerController');

router.post('/register', controller.register);

module.exports = router;