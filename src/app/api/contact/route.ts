import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API!);

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    await resend.emails.send({
      from: "no-reply@avishekbasyal.com.np",
      to: "avishekbasyal3@gmail.com",
      subject: "A new contact form submission",
      html: `
                <p>You have a new contact form submission:</p>
                <ul>
                    <li><strong>Name:</strong> ${body.name}</li>
                    <li><strong>Email:</strong> ${body.email}</li>
                    <li><strong>Message:</strong> ${body.message}</li>
                </ul>
            `,
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send the message";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
