const mongodb=require('mongodb')

const collections = {};
async function dataBaseConnection() {
    try {
      const client = await new mongodb.MongoClient('mongodb+srv://sumanth:frGPTNEvbeD9mbcS@nodem.9uzyjby.mongodb.net/?retryWrites=true&w=majority');
      await client.connect();
      const db = client.db('ChatDBS');
      const registerationsChats = db.collection('registerationsChats');
      collections.registerationsChats = registerationsChats;
    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
  }
  
module.exports={collections,dataBaseConnection}