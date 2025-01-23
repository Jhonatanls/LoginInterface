import axios from 'axios';
import express, { Request, Response } from 'express';

const register = (req: Request, res: Response ) => {
    const apiURL = process.env.API_URL + 'auth/register';

    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).render( 'register', { 
            error: 'Request body is missing or empty', });
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
    .catch(error => {
        if(error.response){
            const status = error.response.status;
            if(status === 403){
            console.log("Error 403: Acceso denegado"); 
            return res.status(403).render('register', {
                error: "Acceso denegado. Verifica tus credenciales."
            });
        } else if(status === 500){
            console.log("Error 500: Error interno del servidor.");
            return res.status(500).render('register', {
                error: "Ocurrió un error interno. Por favor, intenta más tarde.",
            });
        } else {
            console.log(`Error ${status}:`, error.response.data || "Ocurrió un error.");
                    return res.status(status).render('register', {
                        error: `Error ${status}: ${error.response.data.message || "Ocurrió un problema inesperado."}`,
                    });
                }
        } else {
            console.log("Error sin respuesta del servidor" , error.message);
            return res.status(500).render('register', {
                error: "Ocurrió un error interno. Por favor, intenta más tarde.",
            });
        }})
}


module.exports = {
    register
};
