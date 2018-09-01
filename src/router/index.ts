import Router from 'koa-router';
import { helloWorld } from '../controller/demo';

let router = new Router();

router.get('/', helloWorld);
router.get('/hello', helloWorld);

export { router };
