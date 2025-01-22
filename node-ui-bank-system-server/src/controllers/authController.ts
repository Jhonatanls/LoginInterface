import axios from 'axios';
import express, { Request, Response } from 'express';
import path from 'path';

const index = (req: Request, res: Response ) => {
    res.sendFile(path.resolve(__dirname, '../../private/login.html'));
}

const login = (req: Request, res: Response ) => {
    const apiURL = process.env.API_URL + '/auth/login';
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).send({ error: 'Request body is missing or empty' });
    }
    axios.post(apiURL, req.body)
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        res.send(error.response.data);  
    }
    );
}

module.exports = {
    index, login
};