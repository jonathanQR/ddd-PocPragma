import {Model,Optional}   from 'sequelize'
import {sequelize}  from '../db/mysql';
import  DataTypes  from "sequelize";
import { docsType } from '../dto/docsDto';

interface PersonAttributes{
    id:number;
    names: string;
    lastNames:string;        
    documentType: docsType;
    document: string;
    age:number;
    city:string;
}
interface PersonCreationAttributes
  extends Optional<PersonAttributes, 'id'> {}

  interface PersonInstance
  extends Model<PersonAttributes, PersonCreationAttributes>,
    PersonAttributes {
      createdAt?: Date;
      updatedAt?: Date;
    }


const Person = sequelize.define<PersonInstance>(
    'persona',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        names:{
            type: DataTypes.STRING,
            allowNull:false
        },
        lastNames:{
            type: DataTypes.STRING,
            allowNull:false
        },        
        documentType:{
            type: DataTypes.ENUM('TI','CC','RC','CE','NIP','NUIP'),
            allowNull:false
        },
        document:{
            type: DataTypes.STRING,
            unique: true,
            allowNull:false
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        city:{
            type: DataTypes.STRING,
            allowNull:false
        }
    }
)

export default Person;