const nodemailer = require("nodemailer")




const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  
  const sendMailController = async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
  
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL, // sending to your own email
        subject: "Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}\nPhone: ${phone}</p><p><b>Message:</b> ${message}</p>`,
      });
  
      return res.status(200).send("Email sent");
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error sending email");
    }
  };
  


  module.exports={sendMailController}   