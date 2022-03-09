const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD
    }
})

const sendWelcomeEmail = (email, name) => {
    
    transporter.sendMail({
        from: 'Task Manager API <process.env.MAIL>',
        to: email,
        subject: 'Thanks for joining!',
        text: `Welcome to our service, ${name}!`,
        html: `<b>Welcome to our service, ${name}!</b>`
    })
}
 
const sendCancellationEmail = (email, name) => {
    
    transporter.sendMail({
        from: 'Task Manager API <process.env.MAIL>',
        to: email,
        subject: 'We\'re sorry to see you leave',
        text: `We hope to see you back again someday, ${name}!`,
        html: `<b>We hope to see you back again someday, ${name}!</b>`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}