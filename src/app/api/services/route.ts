import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    // Parse JSON data from request
    const { fullName, email, phone } = await request.json();

    // Validate required fields
    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Missing required fields: fullName and email are required" },
        { status: 400 }
      );
    }

    // Create transporter using SMTP credentials from environment variables
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      auth: {
        user: process.env.SMTPEMAIL,
        pass: process.env.SMTPPASSWORD,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Send email to admin notifying about new service inquiry
    const adminMailOptions = {
      from: process.env.SMTPEMAIL,
      to: process.env.ADMIN_EMAIL || process.env.SMTPEMAIL, // Fallback to sender email if admin email not set
      subject: "New Service Inquiry - LPS Brands",
      html: `
        <h2>New Service Inquiry Received</h2>
        <p>A new service inquiry has been submitted through the website.</p>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      `,
    };

    // Send email to user confirming submission
    const userMailOptions = {
      from: process.env.SMTPEMAIL,
      to: email,
      subject: "Thank you for your service inquiry - LPS Brands",
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>We have received your service inquiry and will get back to you shortly.</p>
        <p>Here are the details you submitted:</p>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p>Our team will contact you soon to discuss how we can help with your project.</p>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json({ message: "Service inquiry submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error processing service form:", error);
    return NextResponse.json(
      { error: "Failed to process service form" },
      { status: 500 }
    );
  }
}