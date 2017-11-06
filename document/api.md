# User Service API v1.0

## 用户授权

### URI
```
POST - /authorize
```

### Request Body
```
{
  "staffId" : {
    type : String,
    required : true
  },
  "password" : {
    type : md5(String),
    required : true
  }
}
```

### Test Data
#### Admin
```
{
  "staffId" : "admin",
  "password" : "21232F297A57A5A743894A0E4A801FC3" // md5 加密后的，如果自己加密，可以直接填写admin
}
```
#### User
```
{
  "staffId" : "user",
  "password" : "EE11CBB19052E40B07AAC0CA060C23EE" // md5 加密后的，如果自己加密，可直接填写user
}
```

### Response Data
```
{
  "_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcGVuSWQiOiI0ZGI1Y2ExNS0xZWM4LTQ1ZGEtYjhjMi0wYTY4NGM5NzI1NjciLCJzdGFmZklkIjoidXNlciIsImlhdCI6MTUwOTUyNDAwNn0.7jxFXDqY0wCXgvrLREn928AIQgqrmEG0G_HadbZVq1s",
  "userType" : "0",
  "openId" : "xxxxx-xxxx-xxx"
}
```

## 修改密码
### ID
```
U_0200
```

### URI
```
PUT /users/{openId}
```

### Request Body
```
{
  actionId : 'RESET_PASSWORD',
  oldPassword : {
    type : String,
    required : true
  },
  newPassword : {
    type : String,
    required : true
  }
}
```

### Response Body
```
{
  message : "resource updated"
}
```

## 修改个人信息
### ID
```
U_0201
```

### URL
```
PUT /users/{openId}
```

### Request Body
```
{
  actionId : "UPDATE_INFO",
  email : String,
  jobTitle : String,
  userType : Number
}
```

### Response Body
```
{
  message : "resource updated"
}
```
