var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nacho.tsvetkov@gmail.com',
    pass: 'saqncbmryrtixuzn'
  }
});

var mailOptions = {
  from: 'testmail@gmail.com',
  to: 'nacho.tsvetkov@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});