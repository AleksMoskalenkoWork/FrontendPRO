const mongoose = require('mongoose');

const uri =
  'mongodb+srv://aleksmoskalenkowork:yqGXQY44TvGzN30b@cluster0.bsb0c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } catch (e) {
    console.log(e);
  }
}

module.exports = run;
