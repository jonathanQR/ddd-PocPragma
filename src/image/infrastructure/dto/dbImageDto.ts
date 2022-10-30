import { IsNotEmpty } from "class-validator";

export class dbImageDto{

    @IsNotEmpty()
    personDocument!: string;
    @IsNotEmpty()
    key!:string;    
    @IsNotEmpty()    
    location!: string;
    
   
    
   
    constructor(obj:any){
        this.personDocument=obj.personDocument
        this.key=obj.key
        this.location=obj.location        
    }

    
    
    

}