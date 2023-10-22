const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail", // E.g., 'Gmail'
  auth: {
    user: "pereradilshan594@gmail.com",
    pass: "ysos lpen rcug cmxn", // Corrected password
  },
});
console.log("Attempting to send email...");
console.log("Recipient Email: " + email);
console.log("Subject: " + subject);
console.log("Message: " + message);
function sendEmail(email, subject, message) {
  const mailOptions = {
    from: "pereradilshan594@gmail.com",
    to: email,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error sending email: " + error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = sendEmail;
