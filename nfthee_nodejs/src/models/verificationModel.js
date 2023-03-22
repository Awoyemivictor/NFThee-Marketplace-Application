const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const verificationSchema = new Schema(
  {
    project_name: {
      type: String,
    //   required: true,
    },
    contract_address: {
      type: String,
    //   required: true,
    },
    choose_blockchain: {
      type: String,
    //   required: true,
    },
    project_status: {
      type: String,
    //   required: true,
    },
    about: {
      type: String,
    //   required: true,
    },
    website: {
      type: String,
      default: "",
    },
    twitter: {
      type: String,
    //   required: true,
    },
    discord: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    project_icon: {
      type: String,
      default: "",
    },
    project_banner: {
      type: String,
      default: "",
    },
    project_logo: {
      type: String,
      default: "",
    },
    art_draft: {
      type: String,
      default: "",
    },
    royalty_fee_distribution: {
      type: String,
    },
    royalty_fee_rate: {
      type: Number,
    },
    json_accessible: {
      type: String,
    },
    email: {
      type: String,
      match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //   required: true,
    },
    original: {
      type: String,
    },
    inspired_from: {
      type: String,
    },
    currentOwner: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("verification", verificationSchema);
