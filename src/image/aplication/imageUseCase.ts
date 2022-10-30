import { ImageRespository } from "../domain/image.repository";

export class ImageUseCase{
    constructor(private readonly imageRepository:ImageRespository){}

    public getAll= async()=>{
        const data = await this.imageRepository.getAll();
        return data;
    }
    public getImage= async(document:string)=>{
        const data = await this.imageRepository.getImage(document);
        return data;
    }
    public create= async(file:any)=>{
        const data = await this.imageRepository.create(file);
        return data;
    }
    public update= async(document:string,file:any)=>{
        const data = await this.imageRepository.update(document,file);
        return data;
    }
    public delete= async(document:string)=>{
        const data = await this.imageRepository.delete(document);
        return data;
    }
}