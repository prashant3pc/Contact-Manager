import Contact from "../models/Contact.js";


// GET ALL CONTACTS
export const getContacts = async (req, res) => {

  try {

    const contacts = await Contact.find();

    res.json(contacts);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};



// GET SINGLE CONTACT
export const getContact = async (req, res) => {

  try {

    const contact = await Contact.findById(req.params.id);

    res.json(contact);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};



// CREATE CONTACT
export const createContact = async (req, res) => {

  try {


    console.log("Received:", req.body);


    const contact = await Contact.create(req.body);


    res.status(201).json(contact);



  } catch (error) {


    console.log("CREATE ERROR:", error);


    res.status(500).json({

      message: error.message

    });


  }

};



// UPDATE CONTACT
export const updateContact = async (req, res) => {

  try {

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );


    res.json(contact);


  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};



// DELETE CONTACT
export const deleteContact = async (req, res) => {

  try {


    await Contact.findByIdAndDelete(req.params.id);


    res.json({
      message: "Deleted"
    });



  } catch (error) {


    res.status(500).json({
      message: error.message
    });


  }

};