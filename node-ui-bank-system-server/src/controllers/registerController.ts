import express, { Request, Response } from 'express';
import path from 'path';

const index = (req: Request, res: Response ) => {
    res.sendFile(path.resolve(__dirname, '../../private/register.html'));
}

module.exports = {
    index
};