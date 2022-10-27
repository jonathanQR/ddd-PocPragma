import "dotenv/config"
import bodyParser from "body-parser"
import express,{Express, Request, Response} from 'express'
import cors from "express"
import personRoute from '../person/infrastructure/router/person.route'

const app: Express = express();
app.use(cors())
app.use(express.json());

app.use('/api',personRoute);

app.get('/',(req:Request,res:Response)=>{
    res.send('typescript and node works');
})

export default app;