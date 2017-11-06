import ___ from 'babel-polyfill';

import {CREATE_USER,UPDATE_USER,FIND_USER_LIST,DELETE_USER} from '../controller';

import koaRouter      from 'koa-router';


let router = koaRouter();

router.post('/users',CREATE_USER);
router.put('/users/:id',UPDATE_USER);
router.get('/users',FIND_USER_LIST);
router.delete('/users/:id',DELETE_USER);


export default router.routes();

