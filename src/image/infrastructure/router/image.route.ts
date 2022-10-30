import {Router} from "express";
import { ImageUseCase } from "../../aplication/imageUseCase";
import { ImageController } from "../controller/image.ctr";
import { MongoRepository } from "../repository/mongo.repository";
import { ImageService } from "../service/image.service";
import {upload} from '../middleware/handlerMulter'
const route = Router();

const mongoRepository = new MongoRepository();

const imageUseCase = new ImageUseCase(mongoRepository);

const imageService = new ImageService(imageUseCase)

const imageCtrl = new ImageController(imageService);

route.get('/',imageCtrl.getAll);
route.get('/:document',imageCtrl.getImage);
route.post('/',upload.single('image'),imageCtrl.create);
route.put('/:document',upload.single('image'),imageCtrl.update);
route.delete('/:document',imageCtrl.delete);


export default route;

