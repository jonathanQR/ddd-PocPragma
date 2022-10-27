import { IsNotEmpty } from "class-validator";
import {docsType} from './docsDto'

export class dbPersonDto{

    @IsNotEmpty()
    names!: string;
    @IsNotEmpty()
    lastNames!:string;    
    @IsNotEmpty()    
    documentType!: docsType;
    @IsNotEmpty()
    document!: string;
    @IsNotEmpty()
    age!:number;
    @IsNotEmpty()
    city!:string;
    
   
    constructor(obj:any){
        this.names=obj.names
        this.lastNames=obj.lastNames
        this.documentType=obj.documentType
        this.document=obj.document
        this.age=obj.age
        this.city=obj.city
    }

    
    
    

}
