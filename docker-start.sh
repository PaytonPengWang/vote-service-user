#!/bin/sh
docker run --name vote_system_user --link="minioa-mongo:mongodb"  vote_system_user:1.0
