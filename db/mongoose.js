// Handling MongoDB Database connection logic

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  // mongodb://localhost:27017/TaskManager - local url for db connection
  .connect("mongodb+srv://kamalshanth163:Shanth163@task-manager-r7cmc.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch(err => {
    console.log("ERROR found");
    console.log(err);
  });

// to Prevent deprectation warnings (from mongodb native drivers)
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

module.exports = { mongoose };
