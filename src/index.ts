import app from "./server/index"
import {dbConnectMySQL} from "./person/infrastructure/db/mysql"
import {dbInit} from './image/infrastructure/db/mongo'
const PORT = process.env.PORT||3000 ;



app.listen(PORT,()=>{
    console.log('servidor iniciado'+PORT)
});

dbConnectMySQL();
dbInit();