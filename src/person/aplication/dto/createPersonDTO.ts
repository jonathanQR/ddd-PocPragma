import { IsNotEmpty } from "class-validator";
export enum docsType {
    TI = 'TI',
    CC = "CC",
    RC = "RC",
    CE = "CE",
    NUIP = "NUIP"


  }export class CreatePersonDto{
    
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
    

}