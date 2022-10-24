type docs ='TI'|'CC'|'RC'|'CE'|'NIP'|'NUIP';

export interface UpdatePersonDto{
    names: string;
    lastNames:string;
    email: string;    
    documentType: docs;
    document: string;
    age:number;
    city:string;
    uiid:string;
}