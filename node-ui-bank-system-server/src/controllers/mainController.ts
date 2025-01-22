import express, { Request, Response } from 'express';
import path from 'path';

const index = (req: Request, res: Response) => {    
    res.sendFile(path.resolve(__dirname, '../../public/index.html'));
};

module.exports = {
    index
};