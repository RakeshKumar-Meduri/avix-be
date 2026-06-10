const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const nodemailer = require("nodemailer")

const app = express()

app.use(cors({
  origin: "*"
}))

app.use(express.json())


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err))


const contactSchema = new mongoose.Schema({
  fullName: String,  
  email: String,
  phone: String,
  service: String,
  budget: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})
const Contact = mongoose.model("Contact", contactSchema)

// Setup Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// Silence favicon requests
app.get("/favicon.ico", (req, res) => res.status(204).end())
app.get("/favicon.png", (req, res) => res.status(204).end())

app.post("/api/contact", async (req, res) => {
  try {
    const { fullName, email, phone, service, budget, message } = req.body

    // 1. Save to MongoDB
    const newContact = new Contact({ fullName, email, phone, service, budget, message })
    await newContact.save()

    // 2. Format and Send Email Notification to info@avixstudio.com
    const emailTo = process.env.EMAIL_TO || "info@avixstudio.com"
    const emailFrom = process.env.EMAIL_FROM || process.env.SMTP_USER

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const mailOptions = {
        from: emailFrom,
        replyTo: email,
        to: emailTo,
        subject: `New Contact Form Submission from ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
            <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px; margin-top: 0;">New Contact Form Inquiry</h2>
            <p style="margin: 10px 0;"><strong>Full Name:</strong> ${fullName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p style="margin: 10px 0;"><strong>Industry/Service:</strong> ${service}</p>
            <p style="margin: 10px 0;"><strong>Budget Range:</strong> ${budget}</p>
            <p style="margin: 20px 0 5px 0;"><strong>Message:</strong></p>
            <blockquote style="background: #f9f9f9; border-left: 5px solid #333; margin: 0; padding: 15px; font-style: italic; border-radius: 4px;">
              ${message ? message.replace(/\n/g, "<br>") : ""}
            </blockquote>
          </div>
        `
      }

      try {
        const info = await transporter.sendMail(mailOptions)
        console.log("Email notification sent successfully:", info.response)
      } catch (mailErr) {
        console.error("Error sending email notification:", mailErr)
      }
    } else {
      console.warn("SMTP credentials not configured. Saving contact to database, but skipping email notification.")
    }

    res.status(200).json({ message: "Form submitted successfully!" })
  } catch (error) {
    console.error("Error processing contact submission:", error)
    res.status(500).json({ message: "Error saving data" })
  }
})

if (require.main === module) {
  const PORT = process.env.PORT || 8000
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

module.exports = app
