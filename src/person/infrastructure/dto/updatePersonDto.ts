import { IsInt, IsNumberString, IsOptional, IsString } from "class-validator";
import {docsType} from './docsDto'

export class UpdatePersonDto{

    @IsOptional()
    @IsString()
    names?: string;

    @IsOptional()
    @IsString()
    lastNames?:string; 

    @IsOptional()
    @IsString()       
    documentType?: docsType;

    @IsOptional()
    @IsNumberString()    
    document?: string;
    
    @IsOptional()
    @IsInt()
    age?:number;

    @IsOptional()
    @IsString()
    city?:string;   

}
