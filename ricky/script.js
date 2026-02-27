const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Contact Route
app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Configure your email service
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "yourgmail@gmail.com",      // 🔴 replace with your email
                pass: "your_app_password"         // 🔴 use Gmail App Password
            }
        });

        const mailOptions = {
            from: email,
            to: "yourgmail@gmail.com",           // 🔴 where you want messages sent
            subject: `New Message from ${name}`,
            text: message
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Message sent successfully!" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error sending message." });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});