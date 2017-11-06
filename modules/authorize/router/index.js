import ___ from 'babel-polyfill';

import {AUTHORIZE} from '../controller';

import koaRouter      from 'koa-router';


let router = koaRouter();

router.post('/authorize',AUTHORIZE);


export default router.routes();

