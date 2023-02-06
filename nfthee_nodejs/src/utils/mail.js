const nodemailer = require("nodemailer");
const { emailApiModel } = require("../models")
// const sendgrid = require('@sendgrid/mail');

const { credentials } = require('../config').constantCredentials;
// sendgrid.setApiKey(credentials.SENDGRID_API_KEY);

// exports.sendResetPasswordEmail = async (name, email, message) => {
//     try {
//         // send mail with defined transport object
//         let info = await transporter.sendMail({
//             from: `${credentials.SMTP_EMAIL}`, // sender address
//             to: email, // list of receivers
//             subject: "Suggestions", // Subject line
//             html:message, // html body
//         });
//         console.log("Message sent: %s", info.messageId);
//     } catch (error) {
//         console.error('Error occured while sendng email', error);
//     }
// }
module.exports = class Mail {
    otp;
    msg;
    constructor(email) {
        this.email = email;
        this.otp = Mail.genOtp();
    }

    async sendOtp(msg) {
        this.msg = msg;
        return true;
    }
    static genOtp() {
        return `1234`;
        // return `${Math.floor(1000 + Math.random() * 9000)}`;
    }
    async sendMail(email, message, subject) {
        // if (constant.NODE_ENV != 'production') return true;
        // let mailOptions = {
        //     from: {
        //         name: credentials.APP_NAME,
        //         email: credentials.SENDGRID_EMAIL
        //     },
        //     to: email,
        //     subject: subject,
        //     html: message,
        // };
        // sendgrid.send(mailOptions).then((response) => {
        //     console.log('mail sent...', response);
        // }).catch((error) => {
        //     console.log(`error`, error);
        // })
        try {
            // send mail with defined transport object
            
            const emailDetails = await emailApiModel.findOne();
            if(emailDetails){
                const {domain_name, sender_name, sender_emailid, reply_email, host_name, host_port, host_pass} = emailDetails
            if (email === "admin") {
                email = reply_email
            }
            const transporter = nodemailer.createTransport({
                host: host_name,
                secure: false,
                requireTLS: true,
                port: host_port,
                auth: {
                    user: sender_emailid,
                    pass: host_pass,
                },
                tls: {
                    ciphers: 'SSLv3'
                }
            });
            let info = await transporter.sendMail({
                from: {
                    name: sender_name,
                    address: sender_emailid
                }, // sender address
                to: email, // list of receivers
                subject: subject, // Subject line
                html:message, // html body
            });
            console.log("Message sent: %s", info.messageId);
            }
            
        } catch (error) {
            console.error('Error occured while sendng email', error);
        }
        return true;
    }
}