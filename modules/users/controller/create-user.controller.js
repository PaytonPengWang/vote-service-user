import userModel from '../model/user.model';
import uuid from 'uuid';

const validatorFields =(ctx) => {
	//TODO check
	/*
		staffId,
		password & md5
	*/
	ctx.checkBody('staffId').notEmpty();
	ctx.checkBody('password').notEmpty().md5();
}

export default async (ctx,next) => {


	validatorFields(ctx);

	if(ctx.errors){
        return await next();
    }

	const body = ctx.request.body;

	// TODO create openId
	body.openId = uuid.v4();


	let ret = await userModel.create(body);

	ctx.response.body = ret;

	await next();

}