import axios from 'axios';
import express, { Request, Response } from 'express';
import path from 'path';
import { takeCoverage } from 'v8';

const index = (req: Request, res: Response ) => {
    res.sendFile(path.resolve(__dirname, '../../private/register.html'));
}

const register = (req: Request, res: Response ) => {
    const apiURL = process.env.API_URL + 'auth/register';
    console.log(req.body);
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).send({ error: 'Request body is missing or empty' });
    }
    const data = {
      name: req.body.name,  
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      token: req.body.token
    };
    axios.post(apiURL, data)
    .then(response => {
        console.log("Success", response.data);
        res.redirect('/login');
    })
}



module.exports = {
    register
};
