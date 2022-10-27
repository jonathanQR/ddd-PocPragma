import { IsInt, IsNotEmpty, IsNumberString, IsString } from "class-validator";
import {docsType} from './docsDto'

export class CreatePersonDTO{
    @IsString()
    @IsNotEmpty()
    names!: string;

    @IsString()
    @IsNotEmpty()
    lastNames!:string; 
    
    @IsString()
    @IsNotEmpty()    
    documentType!: docsType;

    @IsNumberString()
    @IsNotEmpty()
    document!: string;

    
    @IsNotEmpty()
    @IsInt()
    age!:number;

    @IsNotEmpty()
    @IsString()
    city!:string;   

}
