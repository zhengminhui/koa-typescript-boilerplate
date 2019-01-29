import Router from 'koa-router';
import { helloWorld, parallel } from '../controller/demo';

let router = new Router();

router.get('/', helloWorld);
router.get('/hello', helloWorld);
router.get('/parallel', parallel);

export { router };
