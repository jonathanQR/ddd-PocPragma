import { PersonEntity } from "../../domain/person.entity";
import { PersonRepository } from "../../domain/person.repository";
import { dbPersonDto } from "../dto/reqPersonDto";
import {Op} from 'sequelize'
import Person from "../model/person.model";
import { UpdatePersonDto } from "../dto/updatePersonDto";


export class MysqlRepository implements PersonRepository{
    
    async getAll(): Promise<dbPersonDto[]| null> {
        const list = await Person.findAll();   
        const persons= list.map((obj)=>{return new dbPersonDto(obj.get())});
        const data = persons.length=== 0 ? null : persons;
        return data;
    }

    async getPerson(id: string): Promise<dbPersonDto | null> {
        
            const response = await Person.findByPk(id);
            const data = response=== null ? null : new dbPersonDto(response.get());          
            return data;       
        
    }
    async getPersonByDocument(document: string): Promise<any | null> {
        
        const response = await Person.findOne({where:{document:document}})
        const data = response=== null ? null : new dbPersonDto(response.get());        
        return data;
    }
    async getByDocumentType(type: string): Promise<PersonEntity[] | null> {
        const response = await Person.findAll({where:{documentType:type}})
        const persons= response.map((obj)=>{return new dbPersonDto(obj.get())});
        const data = persons.length=== 0 ? null : persons;
        return data;
    }
    async getByAge(age: string): Promise<PersonEntity[] | null> {
        const response = await Person.findAll({where:{age:{ [Op.gte]: age}}})
        const persons= response.map((obj)=>{return new dbPersonDto(obj.get())});
        const data = persons.length=== 0 ? null : persons;
        return data;
    }
    async createPerson(createPerson: dbPersonDto): Promise<PersonEntity | null> {
        const person = new dbPersonDto(createPerson);
        const response = await Person.create(person);
        return response;

    }
    async update(document:string,updatePerson: UpdatePersonDto): Promise<PersonEntity | null> {
        const response = await Person.findAll({where:{document:document}})        
        const data = response.length=== 0 ? null : response[0];
        if(data){
            await data.update(updatePerson);
            await data.save;
        }        
        return data;
    }
    async delete(document: string): Promise<PersonEntity | null> {
        const response = await Person.findOne({where:{document:document}});
        await response?.destroy();
        return response 
    }
    
    
}