const mongoose = require("mongoose");

const connectoDatabase = async () => {
    try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.vlfkxjr.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Conectado com sucesso!");
    } catch (err) {
    console.log('Erro: ', err.message);
  }
};

module.exports = connectoDatabase;