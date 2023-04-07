import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const database = ()=>{
    const connectionParams = {
        useNewUrlParser : true,
        useUnifiedTopology: true
    
    };

    try {
        mongoose.connect(process.env.MongoConnect,connectionParams);
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.log(error);
        console.log('Algo fallo al conectarse con MongoDB');
        
    }
};

export default database;

