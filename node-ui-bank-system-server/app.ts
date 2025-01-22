import path from 'path';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

const mainRouter = require('./src/routes/main.router');
const authRouter = require('./src/routes/auth.router');
const registerRouter = require('./src/routes/register.router');

dotenv.config();
const app = express();

// Routes
app.use(mainRouter);
app.use('/register', registerRouter);
app.use('/auth', authRouter);

// EJS configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Server configuration
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'Node UI Bank System'+ ' Versión: ' + process.env.APP_VERSION;

// Server Listening
app.listen(PORT, () => {
    console.log(`Server ${APP_NAME} is running on port http://localhost:${PORT}`);
}); 

