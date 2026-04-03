import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend requests
app.use(cors());
app.use(express.json());

// Contact Route
app.post('/api/contact', async (req, res) => {
    console.log('Received contact form submission:', req.body);
    const { name, email, service, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Configure Nodemailer Transporter
    // Use environment variables for security
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_TO || 'dotnetmarketing.ads@gmail.com', // Default to specified email
        subject: `New Inquiry from ${name} - ${service || 'General'}`,
        text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
        html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h2 style="color: #51084d;">New Website Inquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Service:</strong> ${service}</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                <p><strong>Message:</strong></p>
                <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
            </div>
        `
    };

    try {
        // Only attempt to send if credentials exist
        const isConfigured =
            process.env.EMAIL_USER &&
            process.env.EMAIL_PASS &&
            process.env.EMAIL_USER !== 'your-email@gmail.com' &&
            process.env.EMAIL_PASS !== 'your-app-password';

        if (isConfigured) {
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully to', mailOptions.to);
            res.status(200).json({ success: true, message: 'Message sent successfully!' });
        } else {
            console.warn('EMAILcredentials not set or are placeholders. Logging message only.');
            // Simulate success for development even if email didn't send
            res.status(200).json({
                success: true,
                message: 'Message received (Server Mode: No Email Credentials Set)',
                debug: 'Check server console for details'
            });
        }
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email: ' + error.message });
    }
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

export default app;
