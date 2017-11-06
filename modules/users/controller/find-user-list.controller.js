import userModel from '../model/user.model';

export default async (ctx,next) => {
	ctx.body =await userModel.find();
}