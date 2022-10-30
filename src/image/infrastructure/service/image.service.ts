import { ImageUseCase } from "../../aplication/imageUseCase";
import {uploadFile,deleteFile} from '../helper/s3'
import  fs from 'fs';
import util  from 'util';
const unlinkFile = util.promisify(fs.unlink)


export class ImageService{
    constructor(private imageUseCase:ImageUseCase){}

    public getAll=async()=>{
        try {
            const response = await this.imageUseCase.getAll();
            return response;
        } catch (error) {
            throw Error('Error al consultar imagenes')
        }
    }
    public getImage=async(document:string)=>{
        try {
            const response = await this.imageUseCase.getImage(document);
            return response;
        } catch (error) {
            throw Error('Error al consultar imagen')
        }
    }

    /**
     * 
     * @param document 
     * @param file 
     * todo VER TIEMPOS DE RESPUESTA AL SUBIR IMAGEN
     */
    public create=async(document:string,file:any)=>{
        try {
            let response =null;
            const img = await uploadFile(file);            
            
                response=  await this.imageUseCase.create({personDocument:document,key:img.Key,location:img.Location});
                
                return response;            
            
            
        } catch (error:any) {
            throw Error(error === null ? 'Error al crear la imagen' : error)
        }
    }
    public update=async(document:string,file:any,oldFile:any)=>{
        try {
            let response =null;            
            deleteFile(oldFile.key);
            const img = await uploadFile(file);           
            
            response=  await this.imageUseCase.update(document,{personDocument:document,key:img.Key,location:img.Location});
                
            return response;     

        } catch (error:any) {
            throw Error(error === null ? 'Error al crear la imagen' : error)
        }
    }
    public delete=async(document:string,file:any)=>{
        try {
            let response =null; 
            response = await this.imageUseCase.delete(document);          
            deleteFile(file.key);                       
            return response;     

        } catch (error:any) {
            throw Error(error === null ? 'Error al crear la imagen' : error)
        }
    }
}