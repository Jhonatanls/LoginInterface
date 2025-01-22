import express, { Request, Response } from 'express';
const router = express.Router();

const controller = require('../controllers/authController');

router.post('/login', controller.login);

module.exports = router;