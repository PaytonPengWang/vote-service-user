import userModel from '../model/user.model';

const RESET_PASSWORD = async (ctx) => {
    return {};
}

const UPDATE_INFO = async (ctx) => {
	ctx.checkParams('id').notEmpty();
	if(ctx.errors){
        return await next();
    }
	const openId = ctx.params.id;
	const userDoc = userModel.find({openId:openId})[0];
	// TODO user not found

	const updateDatas = {};
	const body = ctx.request.body;
	if(body.email){
		updateDatas.email = body.email;
	}

	if(body.jobTitle){
		updateDatas.email = body.jobTitle;
	}

	if(body.userType){
		updateDatas.userType = body.userType;
	}

	if(Object.keys(updateDatas).length > 0){
		await userModel.update({openId:openId},{$set : updateDatas});
	}

	ctx.body = 'RESOURCE UPDATED';


}

const ACTIONS = {
    "RESET_PASSWORD" : RESET_PASSWORD,
	"UPDATE_INFO" : UPDATE_INFO
}


export default async (ctx,next) => {
    let {actionId} = ctx.request.body;
    if(ACTIONS[actionId]){
        await ACTIONS[actionId](ctx);
    }else{
        ctx.throw(404);
    }

}