import { NextFunction, Request, Response } from "express";
import { HttpResponse } from '../../../shared/http.response';
import { CreatePersonDTO } from "../dto/createPersonDto";
import {validate,validateOrReject} from 'class-validator'
import { UpdatePersonDto } from "../dto/updatePersonDto";


const validCreatePerson=async({body}: Request<{},{},CreatePersonDTO>, res: Response, next:NextFunction)=> {
    try {      
        let post = new CreatePersonDTO();
        post.names=body.names;
        post.lastNames=body.lastNames;
        post.documentType=body.documentType;
        post.document=body.document;
        post.age=body.age;
        post.city=body.city;   
        validate(post).then(errors => {
            if (errors.length > 0) {                
            const novalid = errors.map((e)=>{return {property:e.property, value:e.value, constrains:e.constraints}});
              console.log('validation failed. errors: ', novalid);
              HttpResponse.prototype.noValid(res, novalid);
            } else {
                next();
            }
          }); 
       
    } catch (error) {
        console.log(error)
        HttpResponse.prototype.Error(res, error)
    }
}

const validUpdatePerson=async({body}: Request<{},{},UpdatePersonDto>, res: Response, next:NextFunction)=> {
    try {      
        let post = new UpdatePersonDto();
        post.names=body.names;
        post.lastNames=body.lastNames;
        post.documentType=body.documentType;
        post.document=body.document;
        post.age=body.age;
        post.city=body.city;   
        validate(post).then(errors => {
            if (errors.length > 0) {                
            const novalid = errors.map((e)=>{return {property:e.property, value:e.value, constrains:e.constraints}});
              console.log('validation failed. errors: ', novalid);
              HttpResponse.prototype.noValid(res, novalid);
            } else {
                next();
            }
          }); 
       
    } catch (error) {
        console.log(error)
        HttpResponse.prototype.Error(res, error)
    }
}

export default {validCreatePerson,validUpdatePerson}