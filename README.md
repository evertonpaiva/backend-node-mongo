# Backend de uma API Node e MongoDb

Playlist no Youtube: https://www.youtube.com/playlist?list=PLcE-9cucnhqUlKZVlfhMYDyAVpO1L8Rmy

How to enable MongoDB authentication with docker-compose: https://dev.to/efe136/how-to-enable-mongodb-authentication-with-docker-compose-2nbp


```bash
# logar no container
docker exec -it mongo-backend-node bash

# logar no mongo
mongo

# selecionar banco
use admin

# criar usuario root
db.createUser(
  {
     user: "root",
     pwd: "MuvqVw7bzZkOcUCIFeibTg",
     roles:["root"]
  }
);

# selecionar banco
use backend-node-mongo

# criar usuario com acesso de escrita no banco
db.createUser(
   {
      user: "mongouser",
      pwd: "LG3hHnzFzgXbX2JbRf4D3A",
      roles:[
         {
            role:"readWrite",
            db:"backend-node-mongo"
         }
      ]

   }
);

# sair do mongo
quit()

# sair do container
exit
```