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

route.get('/person',personCtrl.getAll)
route.get('/person/:id',personCtrl.getPerson)
route.get('/person/document/:document',personCtrl.getPersonByDocument)
route.get('/person/typedocument/:type',personCtrl.getByDocumentType)
route.get('/person/age/:age',personCtrl.getByAge)
route.post('/person',middleware.validCreatePerson,personCtrl.createPerson)
route.put('/person/:document',middleware.validUpdatePerson,personCtrl.update)
route.delete('/person/:document',personCtrl.delete)

export default route;