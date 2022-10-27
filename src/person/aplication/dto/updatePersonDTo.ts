import { docsType } from "./createPersonDTO";
export interface UpdatePersonDto{
    names?: string;
    lastNames?:string;
    email?: string;    
    documentType?: docsType;
    document?: string;
    age?:number;
    city?:string;
    uiid?:string;
}