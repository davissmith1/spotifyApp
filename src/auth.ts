import express, { Request, Response } from 'express';
const router = express.Router();
import axios from 'axios';
//handles authentication from spotify

import { client_id, client_secret, authEndpoint } from './authParam';

router.get('/login', (req: Request, res: Response) => {
    
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
    }
    
    const body ={
        grant_type: "client_credentials",
        client_id: client_id,
        client_secret: client_secret,
    }
    
    axios.post(authEndpoint, body, { headers })
        .then(response => {
            // handle success
            res.send(response.data);
        })
        .catch(error => {
            // handle error
            console.error(error);
            res.status(500).send('Server Error authorizing with Spotify');
        });
    
});


export default router;

