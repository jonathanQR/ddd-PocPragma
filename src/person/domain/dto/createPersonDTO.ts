type docs ='TI'|'CC'|'RC'|'CE'|'NIP'|'NUIP';

export interface CreatePersonDto{
    names: string;
    lastNames:string;
    email: string;    
    documentType: docs;
    document: string;
    age:number;
    city:string;
}