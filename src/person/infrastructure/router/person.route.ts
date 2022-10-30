import {Router} from "express";
import { PersonUseCase } from "../../aplication/personUseCase";
import { PersonController } from "../controller/person.ctr";
import { MysqlRepository } from "../repository/mysql.repository";
import { PersonService } from "../service/person.service";
import middleware from '../middleware/personValidation'
const route = Router();

const mysqlReposityory = new MysqlRepository();

const personUseCase = new PersonUseCase(mysqlReposityory);

const personService = new PersonService(personUseCase)

const personCtrl = new PersonController(personService);

route.get('',personCtrl.getAll)
route.get('/:id',personCtrl.getPerson)
route.get('/document/:document',personCtrl.getPersonByDocument)
route.get('/typedocument/:type',personCtrl.getByDocumentType)
route.get('/age/:age',personCtrl.getByAge)
route.post('/',middleware.validCreatePerson,personCtrl.createPerson)
route.put('/:document',middleware.validUpdatePerson,personCtrl.update)
route.delete('/:document',personCtrl.delete)

export default route;