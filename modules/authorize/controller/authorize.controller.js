import uuid from 'uuid';
import userModel from '../../users/model/user.model';
import jwt from 'jsonwebtoken';
import config from '../../../config';
const createToken = (userInfo) => {
    console.info(userInfo);
    var token = jwt.sign(userInfo, config.project.secret);
    return token;
}

export default async (ctx, next) => {
    const body = ctx.request.body;
    ctx.checkBody('password').md5();

    const findRet = await userModel.find({
        staffId: body.staffId
    });
    let responseRet = null;
    if (findRet.length < 1) {
        ctx.throw(500, 'authorize faield', {
            errorCode: 'U_0100_003'
        });
    } else {
        const userDoc = findRet[0];
        if (userDoc.password !== body.password) {
            ctx.throw(500, 'authorize faield', {
                errorCode: 'U_0100_001'
            });
        } else {
            responseRet = {
                _token: createToken({
                    openId: userDoc.openId,
                    staffId: userDoc.staffId,
                    staffIdHT: userDoc.staffIdHT,
                    cName: userDoc.cName,
                    eName: userDoc.eName,
                    email: userDoc.email,
                    jobTitle: userDoc.jobTitle
                }),
                staffType: userDoc.userType,
                openId: userDoc.openId
            };
        }

    }

    if (responseRet) {
        ctx.cookies.set('_token', responseRet._token);
        ctx.response.body = responseRet;
    }

    await next();
}
