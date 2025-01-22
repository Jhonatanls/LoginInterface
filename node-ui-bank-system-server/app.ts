require('dotenv').config();

import express, { Request, Response } from 'express';
import axios from 'axios';
const app = express();

const mainRouter = require('./src/routes/main.router');
app.use(express.static('public'));
app.use(mainRouter);
app.use('/register', require('./src/routes/register.router'));
app.use('/auth', require('./src/routes/auth.router'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
}); 

