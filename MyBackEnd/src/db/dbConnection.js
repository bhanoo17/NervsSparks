import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017';
const dbName = 'NerveSparks';

const client = new MongoClient(url);

async function dbConnect() {
    try {
        await client.connect();

        console.log('Connected to MongoDB');
        return client.db(dbName);

        // console.log(`Now selecting dataBase`);
        // return myDataBase.collection("myCollection")

    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
}

export { dbConnect };