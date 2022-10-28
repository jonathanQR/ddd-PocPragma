import { PersonRepository } from "../domain/person.repository";
import { CreatePersonDto } from "./dto/createPersonDTO";
import { ResponseDTO } from "./dto/responseDTO";
import { UpdatePersonDto } from "./dto/updatePersonDTo";



export class PersonUseCase{
    constructor(private readonly personRepository: PersonRepository ){          
    }

    public  showAll = async()=>{
        const data = await this.personRepository.getAll()
        return data;        
    }

    public  getPerson = async(id:string)=>{
        const data = await this.personRepository.getPerson(id)
        return data;        
    }

    public  getPersonByDocument = async(document:string)=>{
        const data = await this.personRepository.getPersonByDocument(document)
        return data;        
    }

    public getByDocumentType = async(type:string)=>{
        const data = await this.personRepository.getByDocumentType(type)
        return data;
    }
    public getByAge = async(age:string)=>{
        const data = await this.personRepository.getByAge(age)
        return data;
    }
    public createPerson = async(person:CreatePersonDto)=>{
        const data = await this.personRepository.createPerson(person)
        return data;
    }
    public update = async(document:string,person:UpdatePersonDto)=>{
        const data = await this.personRepository.update(document,person)
        return data;
    }
    public delete = async(document:string)=>{
        const data = await this.personRepository.delete(document)
        return data;
    }
}