const mongoose = require("mongoose");

//DB_MONGO = "mongodb+srv://eduardo:1234@cluster0.slgmlvn.mongodb.net/Dental";
DB_MONGO = 'mongodb://localhost:27017'

const connectDb = async () => {
  try {
    await mongoose.connect(DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("base de datos conectada");
  } catch (error) {
    console.log(error);
    console.log("BackEnd detenido");
    process.exit(1);
  }
};

module.exports = connectDb;
