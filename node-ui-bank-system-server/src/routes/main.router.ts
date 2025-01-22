import express, { Request, Response } from 'express';
const router = express.Router();

const controller = require('../controllers/mainController');

router.get('/', controller.index);

module.exports = router;