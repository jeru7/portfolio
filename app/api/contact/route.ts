import { PERSONAL_INFO } from "@/constants/personal";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const errors: any = {};

    if (!name) errors.name = { error: "Name is required." };
    if (!email) errors.email = { error: "Email is required." };
    if (!message) errors.message = { error: "Message is required." };

    if (Object.keys(errors).length > 0) {
      return Response.json({ errors }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: PERSONAL_INFO.EMAIL,
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed to send email." }, { status: 500 });
  }
}
