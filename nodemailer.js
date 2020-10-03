const nodemailer = require('nodemailer');

// config for mailserver and mail, input your data
let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: 'sciencepost95@gmail.com',
        pass: '***********'
    }
});

var mailOptions = {
    from: 'sciencepost95@gmail.com',
    to: 'vodinhnghia85@gmail.com',
    subject: 'Hello',
    text: 'Test'
};


transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Message sent: ' + info.response);
    };
});