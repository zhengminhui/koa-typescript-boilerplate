import Router from 'koa-router';
import * as Demo from '../controller/demo';
import * as Upload from '../controller/upload';

let router = new Router();

router.get('/', Demo.helloWorld);
router.get('/parallel', Demo.parallel);
router.get('/serial', Demo.serial);
router.get('/observable', Demo.observable);
router.post('/upload', Upload.uploadFile);

export { router };
