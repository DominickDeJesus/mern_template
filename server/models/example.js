const mongoose = require('mongoose'),
  moment = require('moment');

const exampleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Example = mongoose.model('Example', exampleSchema);

module.exports = Example;
