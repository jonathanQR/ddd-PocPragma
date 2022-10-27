import { Sequelize } from "sequelize";

const database = process.env.MYSQL_DATABASE;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;


export const sequelize = new Sequelize(database!, user!, password!, {
    host: host,
    dialect: 'mysql',
  });

export const dbConnectMySQL = async () => {    
    try {
      await sequelize.authenticate();
      console.log("MySQL connected");
      await sequelize.sync({logging:false}).then((a)=>{
      })
    } catch (e) {
      console.log("MySQL ERROR connected", e);
    }
};

