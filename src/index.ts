import express,{Express, Request, Response} from 'express'

const app: Express = express();

app.get('/',(req:Request,res:Response)=>{
    res.send('typescript and node works');
})

app.listen(4321,()=>{
    console.log('runing on 4321');
})