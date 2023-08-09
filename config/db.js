const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // await mongoose.connect("mongodb://yuvrajsagar117:learnmongoDB@ac-qjiv1u5-shard-00-00.duf0crf.mongodb.net:27017,ac-qjiv1u5-shard-00-01.duf0crf.mongodb.net:27017,ac-qjiv1u5-shard-00-02.duf0crf.mongodb.net:27017/?ssl=true&replicaSet=atlas-lookq6-shard-0&authSource=admin&retryWrites=true&w=majority",

    await mongoose.connect(`mongodb+srv://${username}:${password}@clusteryuvi.duf0crf.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
