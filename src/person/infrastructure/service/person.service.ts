import { PersonUseCase } from "../../aplication/personUseCase";
import { CreatePersonDTO } from "../dto/createPersonDto";
import { UpdatePersonDto } from "../dto/updatePersonDto";


export class PersonService{
    constructor(private personUseCase:PersonUseCase){
        
    }

    public getAll=async()=>{
        try {
            const response = await this.personUseCase.showAll();
            return response;
        } catch (error) {
            throw Error('Error al consultar personas')
        }
    }

    public getPerson=async(id:string)=>{
        try {
            const response = await this.personUseCase.getPerson(id);
            return response;
        } catch (error) {
            throw Error('Error al consultar una persona')
        }
    }

    public getPersonByDocument=async(document:string)=>{
        try {
            const response = await this.personUseCase.getPersonByDocument(document);
            return response;
        } catch (error) {
            throw Error('Error al consultar una persona por su documento')
        }
    }

    public getByDocumentType=async(type:string)=>{
        try {
            const response = await this.personUseCase.getByDocumentType(type);
            return response;
        } catch (error) {
            throw Error('Error al consultar una persona por su documento')
        }
    }
    public getByAge=async(age:string)=>{
        try {
            const response = await this.personUseCase.getByAge(age);
            return response;
        } catch (error) {
            throw Error('Error al consultar una persona por edades')
        }
    }
    public createPerson=async(person:CreatePersonDTO)=>{
        try {
            const response = await this.personUseCase.createPerson(person);            
            return response;
        } catch (error) {
            console.log(error)
            throw Error('Error al crear una persona')
        }
    }
    /**
     * 
     * @param document
     * @param person 
     * @returns 
     * todo verificar que la nueva cedula no este duplicada "atrapar error de duplicate"
     */
    public update=async(document:string,person:UpdatePersonDto)=>{
        try {
            const response = await this.personUseCase.update(document,person);            
            return response;
        } catch (error) {
            console.log(error)
            throw Error('Error al actualizar una persona')
        }
    }
}