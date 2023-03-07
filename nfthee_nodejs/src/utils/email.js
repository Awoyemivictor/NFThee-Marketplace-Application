const nodemailer = require("nodemailer");
const { emailApiModel } = require("../models")
// const sendgrid = require('@sendgrid/mail');

const { credentials } = require('../config').constantCredentials;

module.exports.mailerLogin =  (mail,testData,Subject)=>{

    console.log("mailer function hit---",mail,testData,Subject)
  
      
      let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        service: "gmail",
        auth: {
          user: 'mohit.lnwebworks@gmail.com',
          pass: 'elbwalaqodlvuzxi'
        },
      });
  
      // Define the email
      var mailOptions = {
          from: 'mohit.lnwebworks@gmail.com',
          to: mail,
          subject: Subject,
          html: testData,
      };
  
    //   We send the email
      transporter.sendMail(mailOptions, function(error, info){
          if (error) {
              console.log(error);
              // res.send(500, err.message);
          } else {
              console.log("Email sent",info);
              // res.status(200).jsonp(rsendeq.body);
          }
      });
  }   