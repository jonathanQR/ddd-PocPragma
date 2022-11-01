import { Request, Response } from "express";
import { PersonService } from "../service/person.service";
import { HttpResponse } from '../../../shared/http.response';
import { CreatePersonDTO } from "../dto/createPersonDto";
import { UpdatePersonDto } from "../dto/updatePersonDto";

export class PersonController{
    constructor(private personService:PersonService,private readonly httpResponse: HttpResponse = new HttpResponse()){
        
    }

    public getAll=async(req: Request, res: Response)=> {
        try {
            const data = await this.personService.getAll();
            if(data?.length===0){
                this.httpResponse.NotFound(res,"No existen Personas");
            }else{
                this.httpResponse.Ok(res,data)
            }
        } catch (error) {
            this.httpResponse.Error(res,error)
        }
    }

    public getPerson=async({params}: Request, res: Response)=> {
        try {
            let id = params.id;
            const data = await this.personService.getPerson(id);            
            if(!data){
                this.httpResponse.NotFound(res, "No se pudo encontrar la persona"); 
                res.end();
            }else{
                this.httpResponse.Ok(res, data);
            }
            
        } catch (error) {
            this.httpResponse.Error(res, error)
        }
    }

    public getPersonByDocument=async({params}: Request, res: Response)=> {
        try {
            let document = params.document;
            const data = await this.personService.getPersonByDocument(document);            
            if(!data){
                this.httpResponse.NotFound(res, "No se pudo encontrar la persona por documento"); 
                res.end();
            }else{
                this.httpResponse.Ok(res, data);
            }
            
        } catch (error) {
            this.httpResponse.Error(res, error)
        }
    }

    public getByDocumentType=async({params}: Request, res: Response)=> {
        try {            
            let type = params.type;
            const data = await this.personService.getByDocumentType(type);            
            if(!data){
                this.httpResponse.NotFound(res, "No se pudo encontrar la persona por documento"); 
                res.end();
            }else{
                this.httpResponse.Ok(res, data);
            }
            
        } catch (error) {
            console.log(error)
            this.httpResponse.Error(res, error)
        }
    }
    public getByAge=async({params}: Request, res: Response)=> {
        try {            
            let age = params.age;
            const data = await this.personService.getByAge(age);            
            if(!data){
                this.httpResponse.NotFound(res, "No existen personas que superen esa edad"); 
                res.end();
            }else{
                this.httpResponse.Ok(res, data);
            }
            
        } catch (error) {
            console.log(error)
            this.httpResponse.Error(res, error)
        }
    }
    /**
     * 
     * @param param0 
     * @param res 
     * todo Validar de una mejor manera el body
     */
    public createPerson=async({body}: Request<{},{},CreatePersonDTO>, res: Response)=> {
        try {
            const person = await this.personService.getPersonByDocument(body.document);                         
            if(person){
                this.httpResponse.alreadyExist(res, "Documento ya registrado"); 
                res.end();
            }else{
                const data = await this.personService.createPerson(body);
                this.httpResponse.Ok(res, data);
            }            
        } catch (error) {
            console.log(error)
            this.httpResponse.Error(res, error)
        }
    }
    public update=async({params,body}: Request<{document:string},{},UpdatePersonDto>, res: Response)=> {
        try {
            const person = await this.personService.getPersonByDocument(params.document);                         
            if(!person){
                this.httpResponse.NotFound(res, "No existen personas con ese tipo de documento");
                res.end();
            }else{
                const data = await this.personService.update(params.document,body);
                if(!data){
                    this.httpResponse.alreadyExist(res, "Documento ya registrado");
                }else{
                    this.httpResponse.Ok(res, data);
                }
                
            }            
        } catch (error) {
            console.log(error)
            this.httpResponse.Error(res, error)
        }
    }

    /**
     * 
     * @param param0 
     * @param res 
     * TODO verificar existencia imagen, si se unira con imagenes 
     */
    public delete=async({params}: Request<{document:string},{},{}>, res: Response)=> {
        try {
            
            const data = await this.personService.delete(params.document);
                if(!data){
                    this.httpResponse.NotFound(res, "No se encontro la persona");
                }else{
                    this.httpResponse.Ok(res, data);
                }                
                    
        } catch (error) {
            console.log(error)
            this.httpResponse.Error(res, error)
        }
    }
}


