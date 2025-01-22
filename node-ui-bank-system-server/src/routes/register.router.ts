import express, { Request, Response } from 'express';
const router = express.Router();

const controller = require('../controllers/registerController');

router.get('/', controller.index);

module.exports = router;