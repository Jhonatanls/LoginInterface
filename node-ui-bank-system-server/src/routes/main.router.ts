import express, { Request, Response } from 'express';
const router = express.Router();

const controller = require('../controllers/mainController');

router.get('/', controller.index);

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.get("/profile", (req, res) => {
    res.render("profile");
});

module.exports = router;