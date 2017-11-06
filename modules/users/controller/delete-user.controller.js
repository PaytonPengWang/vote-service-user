import userModel from '../model/user.model';

export default async (ctx,next) => {

	const userId = ctx.params.id;
	if(ctx.errors){
        return await next();
    }

	const userDoc = await userModel.findById(userId);
	await userDoc.remove();
	ctx.body = 'RESOURCE DELETED';
	await next();
}