import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData = await request.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const details = formData.get("details") as string;
    const identity = formData.get("identity") as string;
    const communication = formData.get("communication") as string;
    const experiences = formData.get("experiences") as string;
    const file = formData.get("file") as File | null;

    // Validate required fields
    if (!fullName || !email || !details) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter using SMTP credentials from environment variables
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTPEMAIL,
        pass: process.env.SMTPPASSWORD,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Prepare email attachments if file exists
    const attachments = [];
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type,
      });
    }
    // Send email to user confirming submission
    const userMailOptions = {
      from: process.env.SMTPEMAIL,
      to: email,
      subject: "Thank you for your inquiry - LPS Brands",
      html: `
        <h2>Thank you for contacting LPS Brands!</h2>
        <p>We have received your inquiry and will get back to you shortly.</p>
        <p>Here are the details you submitted:</p>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Project Details:</strong> ${details}</p>
        <p><strong>Services Interested In:</strong> ${[identity, communication, experiences].filter(Boolean).join(", ") || "Not specified"}</p>
      `,
    };

    await transporter.sendMail(userMailOptions)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}