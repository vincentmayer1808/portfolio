
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    }
})



export const sendMail = async (email, username, message) => {

    const mailOptions = {
        from: process.env.EMAIL,
        to: "vm.webdevservices@gmail.com",
        subject: username,
        text: message,
        html: `<h1>From: ${username}</h1><p>${message}</p><p>Email Adress:${email}</p>`
    }

    try {
       await transporter.sendMail(mailOptions)
    } catch (err) {
        console.log(err)
    }

}

