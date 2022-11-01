import app from "./server/index"
import {dbConnectMySQL} from "./person/infrastructure/db/mysql"
import {dbInit} from './image/infrastructure/db/mongo'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
const PORT = process.env.PORT||3000 ;

// Swagger conf
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'POCPRAGMA JONATHAN',
        version: '0.1.0',
        description:
                  'Esta API fue creada para la ruta Backend Nodejs en Pragma',        
      },
      servers: [{
        url: 'http://localhost:3000/api',
      }],
    },
    apis: ['./src/documentation/*.yml'],
  };
  const specs = swaggerJsdoc(options);
  app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(specs, {explorer: true}),
  );
  

app.listen(PORT,()=>{
    console.log('servidor iniciado'+PORT)
});

dbConnectMySQL();
dbInit();