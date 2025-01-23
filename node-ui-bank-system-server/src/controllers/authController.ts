import axios from 'axios';
import express, { Request, Response } from 'express';
import path from 'path';

const index = (req: Request, res: Response ) => {
    res.sendFile(path.resolve(__dirname, '../../private/login.html'));
}

const login = (req: Request, res: Response ) => {
    const apiURL = process.env.API_URL + 'auth/login';
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).send({ error: 'Request body is missing or empty' });
    } else{
        console.log(req.body.username, req.body.password);
    }
    axios.post(apiURL, req.body)
    .then(response => {
        console.log("Success", response.data);
        res.render("profile", {data:{
            username: req.body.username,
            password: req.body.password,
            token: response.data.token
        }});
    })
    .catch(error => {
        res.send(error.response.data);  
    }
    );
}

module.exports = {
    index, login
};