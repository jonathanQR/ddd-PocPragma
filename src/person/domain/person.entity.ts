type docs ='TI'|'CC'|'RC'|'CE'|'NIP'|'NUIP';
export interface PersonEntity{
    names: string;
    lastNames:string;
    email: string;
    uuid:string;
    documentType: docs;
    document: string;
    age:number;
    city:string;

}