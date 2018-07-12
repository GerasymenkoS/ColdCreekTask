import nodemailer from 'nodemailer';
require('dotenv').config()


export default async function ({message, addresse, attachments, subject}) {    
    
    var transporter = nodemailer.createTransport({
      host: process.env.MAIL_SERVICE_HOST,
      port: process.env.MAIL_SERVICE_PORT,
      auth: {
        user: process.env.MAIL_SERVICE_USER,
        pass: process.env.MAIL_SERVICE_PASS
      }
    });
    
    var mailOptions = {
      from: process.env.EMAIL,
      to: process.env.NODE_ENV === 'production' ? addresse : process.env.EMAIL,
      subject,
      html: message,
      attachments
    };
    
    return await transporter.sendMail(mailOptions);   
    
}