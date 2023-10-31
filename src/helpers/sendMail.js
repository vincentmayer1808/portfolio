
const nodemailer = require('nodemailer');


export const sendMail = async (email, username, message) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
        }
    })

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: username,
        text: message,
        html: `<h1>From: ${username}</h1><p>${message}</p><p>Email Adress:${email}</p>`
    }

    try {
        await transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                throw new Error(err)
            }
        })
    } catch (err) {
        console.log(err)
    }

}

