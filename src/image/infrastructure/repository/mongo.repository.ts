import { imageEntity } from "../../domain/image.entity";
import { ImageRespository } from "../../domain/image.repository";
import { dbImageDto } from "../dto/dbImageDto";
import Image from '../model/image.model';

export class MongoRepository implements ImageRespository{
    async getAll(): Promise<imageEntity[] | null> {
        const list = await Image.find({});
        const images= list.map((obj)=>{return new dbImageDto(obj)});
        const data = images.length=== 0 ? null : images;
        return data;
    }
    async getImage(document: string): Promise<imageEntity | null> {
        const response = await Image.findOne({personDocument:document});
        const data = response === null ? null : new dbImageDto(response); 
        return data;
    }
    async create(file:dbImageDto): Promise<imageEntity | null> {
        const response= await Image.create(file); 
        const data = response === null ? null : new dbImageDto(response);                
        return data;
    }
    async update(document: string, file: dbImageDto): Promise<imageEntity | null> {        
        const response = await Image.findOneAndUpdate({personDocument:document},{personDocument:file.personDocument,key:file.key,location:file.location},{new:true}) 
        const data = response === null ? null : new dbImageDto(response);        
        return data;
    }
    async delete(docuemnt: string): Promise<imageEntity | null> {
        const response = await Image.findOneAndRemove({personDocument:docuemnt})
        const data = response === null ? null : new dbImageDto(response); 
        console.log(response)       
        return data;
    }

}