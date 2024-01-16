import express, {Express, Request, Response} from 'express';
import login from './auth';

const app: Express = express();
const port = 3000;

app.use('/', login)

app.get('/', (req: Request, res: Response)=>{
    res.send('Hello World!');
});

app.listen(port, ()=> {
    console.log(`server running on ${port}`);
});