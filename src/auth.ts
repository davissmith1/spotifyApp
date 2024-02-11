import express, { Request, Response } from 'express';
const router = express.Router();
import axios from 'axios';
//handles authentication from spotify

import { client_id, client_secret, authEndpoint } from './authParam';

var token = "";

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
            token = response.data.access_token;
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            // handle error
            console.error(error);
            res.status(500).send('Server Error authorizing with Spotify');
        });
    
});

router.get('/test', (req: Request, res: Response) => {
    const artistEndpoint= "https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF";
    const headers = {
        "Authorization" : "Bearer " + token,
    }
    axios.get(artistEndpoint, { headers })
        .then(response => {
            // handle success
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            // handle error
            console.error(error);
            res.status(500).send('Server Error getting artist');
        });
   
});


export default router;

