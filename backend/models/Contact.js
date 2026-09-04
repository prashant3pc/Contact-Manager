import mongoose from "mongoose";


const ContactSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  email: String,

  phone: String,

  company: String,

  image: String

}, { timestamps: true });

const Contact = mongoose.model("contact", ContactSchema)
export default Contact;