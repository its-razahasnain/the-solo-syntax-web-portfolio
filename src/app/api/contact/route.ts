import { NextResponse } from "next/server";
import { Resend } from "resend";

const projectTypes = new Set([
  "Website",
  "Web Application",
  "Portfolio",
  "SaaS Product",
  "Other",
]);

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_BUDGET_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "The contact form is not configured yet.",
        },
        { status: 500 },
      );
    }

    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const projectType =
      typeof body.projectType === "string" ? body.projectType.trim() : "";
    const budget = typeof body.budget === "string" ? body.budget.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";
    const honeypot =
      typeof body.website === "string" ? body.website.trim() : "";

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    if (!name || name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid name.",
        },
        { status: 400 },
      );
    }

    if (
      !email ||
      email.length > MAX_EMAIL_LENGTH ||
      !isValidEmail(email)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    if (!projectTypes.has(projectType)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please select a valid project type.",
        },
        { status: 400 },
      );
    }

    if (budget.length > MAX_BUDGET_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          message: "Budget information is too long.",
        },
        { status: 400 },
      );
    }

    if (!message || message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide some project details.",
        },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "The Solo Syntax <onboarding@resend.dev>",
      to: ["razahasnain.work@gmail.com"],
      replyTo: email,
      subject: `New project inquiry — ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #18181b;">
          <h2>New project inquiry</h2>

          <p>
            <strong>Name:</strong><br />
            ${escapeHtml(name)}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${escapeHtml(email)}
          </p>

          <p>
            <strong>Project type:</strong><br />
            ${escapeHtml(projectType)}
          </p>

          <p>
            <strong>Budget:</strong><br />
            ${escapeHtml(budget || "Not specified")}
          </p>

          <p>
            <strong>Message:</strong><br />
            ${escapeHtml(message).replace(/\n/g, "<br />")}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "Something went wrong while sending your message. Please try again.",
        },
        { status: 502 },
      );
    }

    console.log("Contact email sent:", data?.id);

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}