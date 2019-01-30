import Router from 'koa-router';
import * as Demo from '../controller/demo';

let router = new Router();

router.get('/', Demo.helloWorld);
router.get('/hello', Demo.helloWorld);
router.get('/parallel', Demo.parallel);
router.get('/serial', Demo.serial);

export { router };
