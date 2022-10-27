import { v4 as uuid } from "uuid";
import { PersonEntity } from "./person.entity";

enum docsType {
    TI = 'TI',
    CC = "CC",
    RC = "RC",
    CE = "CE",
    NUIP = "NUIP"


  }
export class PersonValue implements PersonEntity{
    names: string;
    lastNames: string;
    email: string;
    uuid: string;
    documentType: docsType;
    document: string;
    age: number;
    city: string;

    constructor({names,lastNames,email,documentType,document,age,city}:{names:string,lastNames:string,email:string,documentType:docsType,document:string,age:number,city:string}){
        this.uuid=uuid();
        this.names=names
        this.lastNames=lastNames
        this.email=email
        this.documentType=documentType
        this.document=document
        this.age=age
        this.city=city

    }
}