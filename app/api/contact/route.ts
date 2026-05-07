import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, company, email, product, message } = body;

    if (!name || !email || !product || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Website Inquiry <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New quote inquiry: ${product}`,
      replyTo: email,
      text: `
New quote inquiry

Name: ${name}
Company: ${company || "Not provided"}
Email: ${email}
Product: ${product}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Failed to send inquiry." },
      { status: 500 }
    );
  }
}