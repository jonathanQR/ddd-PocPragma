import { Request, Response } from "express";
import { HttpResponse } from '../../../shared/http.response';
import { ImageService } from "../service/image.service";

export class ImageController{
    constructor(private imageService:ImageService,private readonly httpResponse: HttpResponse = new HttpResponse()){
        
    }

    public getAll=async(req: Request, res: Response)=> {
        try {
            const data = await this.imageService.getAll();
            if(data?.length===0){
                this.httpResponse.NotFound(res,"No existen Personas");
            }else{
                this.httpResponse.Ok(res,data)
            }
        } catch (error) {
            this.httpResponse.Error(res,error)
        }
    }
    public getImage=async({params}: Request, res: Response)=> {
        try {
            const data = await this.imageService.getImage(params.document);
            if(!data){
                this.httpResponse.NotFound(res,"Documento no registrado");
            }else{
                this.httpResponse.Ok(res,data)
            }
        } catch (error) {
            this.httpResponse.Error(res,error)
        }
    }
    public create=async({body,file}: Request, res: Response)=> {
        try {
            if(file)
            {const data = await this.imageService.getImage(body.personDocument);
            if(data){
                this.httpResponse.NotFound(res,"Dcoumento ya asociado");
            }else{
            const data = await this.imageService.create(body.personDocument,file);           
            this.httpResponse.Ok(res,data);           
            }  }else{
                this.httpResponse.noValid(res,"Debe cargar una imagen"); 
            }          
        } catch (error) {
            console.log(error)
            this.httpResponse.Error(res,error)
        }
    }
    public update=async({params,body,file}: Request, res: Response)=> {
        try {
            const oldFile = await this.imageService.getImage(params.document);
            if(!oldFile){
                this.httpResponse.NotFound(res,"Dcoumento no encontrado");
            }else{
            const data = await this.imageService.update(params.document,body.personDocument,file,oldFile);           
            this.httpResponse.Ok(res,data);            
            
            }            
        } catch (error) {
            console.log(error)
            this.httpResponse.Error(res,error)
        }
    }
    public delete=async({params}: Request, res: Response)=> {
        try {
            const file = await this.imageService.getImage(params.document);
            if(!file){
                this.httpResponse.NotFound(res,"Dcoumento no encontrado");
            }else{
            const data = await this.imageService.delete(params.document,file);           
            this.httpResponse.Ok(res,data);            
            
            }            
        } catch (error) {
            
            this.httpResponse.Error(res,error)
        }
    }
}