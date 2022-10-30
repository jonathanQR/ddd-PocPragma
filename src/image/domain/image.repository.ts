import { imageEntity } from "./image.entity";

export interface ImageRespository{
    getAll():Promise<imageEntity[]|null>;
    getImage(document:string):Promise<imageEntity|null>;
    create(file:any):Promise<imageEntity|null>;
    update(document:string,file:any):Promise<imageEntity|null>;
    delete(docuemnt:string):Promise<imageEntity|null>;
    
}