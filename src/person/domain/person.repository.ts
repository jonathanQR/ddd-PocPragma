import { CreatePersonDto } from "./dto/createPersonDTO";
import { UpdatePersonDto } from "./dto/updatePersonDTo";
import { PersonEntity } from "./person.entity";

export interface PersonRespository{
    getAll():Promise<PersonEntity[] | null>;
    getPerson(uuid:string):Promise<PersonEntity|null>;
    getPersonByDocument(document:string):Promise<PersonEntity|null>;
    getPersonByTypeOfDocument(type:string):Promise<PersonEntity[]|null>;
    getPersonByAge(age:number):Promise<PersonEntity[] |null>;
    createPerson(createPerson:CreatePersonDto):Promise<PersonEntity|null>;
    createPerson(updatePerson:UpdatePersonDto):Promise<PersonEntity|null>;
}