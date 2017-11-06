#!/bin/zsh
echo "创建User"
curl -X POST -H "Content-Type: application/json" --data @create_user_test.json http://127.0.0.1:3000/users