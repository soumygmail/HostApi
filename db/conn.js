const mongoose = require('mongoose');

//uri = "mongodb+srv://soumya9589:Ksk2wl7IIfp36M6X@cluster0.4vcfxax.mongodb.net/apiproject?retryWrites=true&w=majority";
const connectDB = (uri) => {

    console.log("Connect  db")
  return mongoose.connect(uri, {
   // useNewParser: true,
    useUnifiedTopology: true,
});
};


module.exports = connectDB;