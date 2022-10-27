import { CreatePersonDto } from "./dto/createPersonDTO";
import { UpdatePersonDto } from "./dto/updatePersonDTo";
import { PersonEntity } from "./person.entity";

export interface PersonRepository{
    getAll():Promise<PersonEntity[] | null>;
    getPerson(id:string):Promise<PersonEntity|null>;
    getPersonByDocument(document:string):Promise<PersonEntity|null>;
    getByDocumentType(type:string):Promise<PersonEntity[]|null>;
    getByAge(age:string):Promise<PersonEntity[] |null>;
    createPerson(createPerson:CreatePersonDto):Promise<PersonEntity|null>;
    update(document:string,updatePerson:UpdatePersonDto):Promise<PersonEntity|null>;
    deletePerson(document:string):Promise<PersonEntity|null>;
     

}