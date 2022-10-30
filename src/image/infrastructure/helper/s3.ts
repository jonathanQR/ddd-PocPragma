
import fs from 'fs';
import S3 from 'aws-sdk/clients/s3';


const bucketName=`${process.env.AWS_BUCKET_NAME}`
const region=`${process.env.AWS_BUCKET_REGION}`
const accesKeyID=`${process.env.AWS_ACCES_KEY}`
const secretAccesKey=`${process.env.AWS_SECRET_KEY}`

const s3 = new S3({
    region: region,
    credentials: {
      accessKeyId: accesKeyID,
      secretAccessKey: secretAccesKey
    }
})


//upload a file to s3
export const uploadFile=async(file:any)=>{
   try {
    const fileStream = fs.createReadStream(file!.path)    
    const uploadParams={
        Bucket: bucketName,
        Body:fileStream,
        Key:file!.filename
    }
    const response= s3.upload(uploadParams).promise();    
    return response;
   } catch (error) {
    throw Error("Error al cargar imagen al S3 bucket")
   }
}


//Delete a file to s3
export const deleteFile=async(key:string)=>{
    console.log(key)
    try {      
     const deleteParams={
         Bucket: bucketName,
         Key:key
     }     
     const response= s3.deleteObject(deleteParams).promise();    
     return response;
    } catch (error) {
        throw Error("Error al eliminar imagen al S3 bucket")
    }
 }