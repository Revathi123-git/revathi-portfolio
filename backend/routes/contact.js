const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../model/contact'); // Import model

require('dotenv').config(); // Load env variables

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  try {
    // Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS // make sure you add EMAIL_PASS in .env
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New contact from ${name}`,
      text: message
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message sent and saved successfully' });
  } catch (error) {
    console.error('Error in contact route:', error);
    res.status(500).json({ error: 'Server error' });
  }
});



module.exports = router;
