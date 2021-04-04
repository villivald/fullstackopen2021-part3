const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const url = process.env.MONGODB_URI;

console.log("connecting to", url);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const noteSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, minlength: 3 },
  phone: {
    type: Number,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /[0-9]{8,}/.test(v);
      },
      message: "{VALUE} is shorter than the minimum allowed length (8).",
    },
  },
});

noteSchema.plugin(uniqueValidator);

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Person", noteSchema);
