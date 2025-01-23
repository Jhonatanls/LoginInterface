import axios from 'axios';
import e, { Request, Response } from 'express';

const login = (req: Request, res: Response ) => {
    const apiURL = process.env.API_URL + 'auth/login';

    // Validate request body
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).render( 'login', { 
            error: 'Request body is missing or empty', });
    }

    // Send request to API
    axios.post(apiURL, req.body)
    .then(response => {
        console.log("Success", response.data);

        // Render profile page
        res.render("profile", {
            data:{
                username: req.body.username,
                password: req.body.password,
                token: response.data.token
        }});
    })
    .catch(error => {
        // Render error page
        if(error.response){
            const status = error.response.status;
            if(status === 403){
            console.log("Error 403: Acceso denegado"); 
            return res.status(403).render('login', {
                error: "Acceso denegado. Verifica tus credenciales."
            });
        } else if(status === 500){
            console.log("Error 500: Error interno del servidor.");
            return res.status(500).render("login", {
                error: "Ocurrió un error interno. Por favor, intenta más tarde.",
            });
        } else {
            console.log(`Error ${status}:`, error.response.data || "Ocurrió un error.");
                    return res.status(status).render("login", {
                        error: `Error ${status}: ${error.response.data.message || "Ocurrió un problema inesperado."}`,
                    });
                }
        } else {
            // Manejo de errores sin respuesta del servidor
            console.log("Error sin respuesta del servidor" , error.message);
            return res.status(500).render('login', {
                error: "Ocurrió un error interno. Por favor, intenta más tarde.",
            });
        }});
}

module.exports = {
    login
};