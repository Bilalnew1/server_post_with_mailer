const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
         user: "ernestina.hagenes50@ethereal.email",
        pass: "xNb6W55AUyqdjVYqD3"
    },
  });

  let info = await transporter.sendMail({
    from: '"bilal 👻" <bilasl@gmail.com>', // sender address
    to: "iambilsl@gmail.com", // list of receivers
    subject: "Hello ", // Subject line
    text: "Hello ", // plain text body=
    html: "<b>Hello  bilsl</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;
