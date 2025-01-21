require('dotenv').config();

import express, { Request, Response } from 'express';
import axios from 'axios';

const url:string = 'http://localhost:8080/auth/login';

const data = {
    username: "jhonj",
    password: "securePassword"
};

console.log('Login request sent!');

axios.post(url, data)
    .then((res) => {
        return res.data;
    })
    .catch((error) => {
        console.error(error);
    });

const getConfig = {
    headers: {
        Authorization : "bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqaG9uaiIsImlhdCI6MTczNzQ5NzUzMywiZXhwIjoxNzM3NDk4OTczfQ.N8Fc6EdAxwjJmBBZQvGJZhDHYYNIbWEZKPKZJVrtX60"
    }
}

axios.get('http://localhost:8080/users/1', getConfig)
    .then((res) => {
        console.log(`statusCode: ${res.status}`);
        let userInfo = res.data
        console.log(userInfo)
    })
    .catch((error) => {
        console.error(error);
    });   

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req : Request, res : Response) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    }); 