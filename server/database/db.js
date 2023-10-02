import mongoose from "mongoose"

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-mybbp1e-shard-00-00.hc9k9kt.mongodb.net:27017,ac-mybbp1e-shard-00-01.hc9k9kt.mongodb.net:27017,ac-mybbp1e-shard-00-02.hc9k9kt.mongodb.net:27017/?ssl=true&replicaSet=atlas-ncp6wz-shard-0&authSource=admin&retryWrites=true&w=majority` ;
       
      try {
     
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database connected successfully !');
    } catch (error) {
         console.log('Error while connecting with the database', error);
    }
}

export default Connection;