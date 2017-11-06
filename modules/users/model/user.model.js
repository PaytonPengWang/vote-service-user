import {mongoose,db} from '../../../utils/db.utils';
import _ from 'lodash';

const {ObjectId} = mongoose.Schema.Types;

const usersSchema = new mongoose.Schema({
  // 用户对外ID
  openId : {
    type : String,
    required : true
  },
  // 登录用户名(中软编号0开头)
  staffId : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  },
  staffIdHT : String,       // E开头的员工编号
  cName : String,           // 中文名
  eName : String,           // 英文名
  startDate : Number,       // 入职时间，存储Time值
  email : String,
  // 用户类型，0 - 普通用户,1 - admin
  userType : {
    type : String,
    required : true,
    default : 0
  },
  jobTitle : String         // 职位
});


const userModel =db.model('user',usersSchema);

export default userModel;