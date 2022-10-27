import app from "./server/index"
import {dbConnectMySQL} from "./person/infrastructure/db/mysql"
const PORT = process.env.PORT||3000 ;



app.listen(PORT,()=>{
    console.log('servidor iniciado'+PORT)
});

dbConnectMySQL();