export enum docsType {
    TI = 'TI',
    CC = "CC",
    RC = "RC",
    CE = "CE",
    NUIP = "NUIP"


  }
export interface PersonEntity{
    names: string;
    lastNames:string;   
    documentType: docsType;
    document: string;
    age:number;
    city:string;
}