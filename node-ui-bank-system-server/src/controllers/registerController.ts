import express, { Request, Response } from 'express';
import path from 'path';

const index = (req: Request, res: Response ) => {
    res.sendFile(path.resolve(__dirname, '../../private/register.html'));
}

const register = (req: Request, res: Response ) => {
    const apiURL = process.env.API_URL + 'auth/register';
    console.log(req.body);
    res.send('Registro exitoso');
    //axios.post(apiURL, req.body)
    //.then(response => {
      //  res.send(response.data);
    //})
    //.catch(error => {
      //  res.send(error.response.data);  
    //}
    //);
}



module.exports = {
    index, register
};