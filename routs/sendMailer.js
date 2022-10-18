const nodemailer = require('nodemailer');

const ejs = require('ejs');

const SMTP_CONFIG = require('./config/smtp');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: SMTP_CONFIG.auth.user,
        pass: SMTP_CONFIG.auth.pass  
       
    },
    tls: {
        rejectUnauthorized: false,
    } 
 });

module.exports = async function (path) {
   


    const mailSent = await transporter.sendMail({
        from: '"kledisom" <signatureprojectjp@gmail.com>',
        to: ['kedinhofavorito@gmail.com', 'kledison2009@hotmail.com'],
        subject: 'assunto do e-mail',
        text: 'testando anexos',
        attachments: [
            {
                path: path,
            }
        ]
      
    });

    return mailSent;

}

