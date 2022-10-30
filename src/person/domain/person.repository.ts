import { CreatePersonDto } from "./dto/createPersonDTO";
import { UpdatePersonDto } from "./dto/updatePersonDTO";
import { PersonEntity } from "./person.entity";

export interface PersonRepository{
    getAll():Promise<PersonEntity[] | null>;
    getPerson(id:string):Promise<PersonEntity|null>;
    getPersonByDocument(document:string):Promise<PersonEntity|null>;
    getByDocumentType(type:string):Promise<PersonEntity[]|null>;
    getByAge(age:string):Promise<PersonEntity[] |null>;
    createPerson(createPerson:CreatePersonDto):Promise<PersonEntity|null>;
    update(document:string,updatePerson:UpdatePersonDto):Promise<PersonEntity|null>;
    delete(document:string):Promise<PersonEntity|null>;
     

}