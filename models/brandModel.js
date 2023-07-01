const mongoose = require("mongoose");

const brandSchema = mongoose.Schema(
  {
    BrandName: {
      type: String,
      required: [true, "Please add the BrandName"],
    },
    Description: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Brand", brandSchema)
