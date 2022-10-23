import "dotenv/config"
import bodyParser from "body-parser"
import express,{Express, Request, Response} from 'express'
import cors from "express"

const app: Express = express();
app.use(cors())
app.use(express.json());

app.get('/',(req:Request,res:Response)=>{
    res.send('typescript and node works');
})

export default app;