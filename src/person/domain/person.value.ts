import { v4 } from "uuid";
import { PersonEntity } from "./person.entity";

export class PersonValue implements PersonEntity{
    names: string;
    lastNames: string;
    email: string;
    uuid: string;
    documentType: string;
    document: string;
    age: number;
    city: string;

    constructor({names,lastNames,email,documentType,document,age,city}:{names:string,lastNames:string,email:string,documentType:string,document:string,age:number,city:string}){
        this.names=names
        this.lastNames=lastNames
        this.email=email
        this.documentType=documentType
        this.document=document
        this.age=age
        this.city=city

    }
}