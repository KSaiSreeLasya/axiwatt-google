import { serve } from "https://deno.land/std@0.208.0/http/server.ts";

interface ConsultationData {
  full_name: string;
  email: string;
  estate_location: string;
  objectives: string;
  phone?: string;
}

const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY");
const SENDGRID_FROM_EMAIL = Deno.env.get("SENDGRID_FROM_EMAIL") || "noreply@axiwatt.com";
const ADMIN_EMAIL = "kottesaisreelasya@gmail.com";

console.log("send-consultation-email function loaded");
console.log("SENDGRID_API_KEY is set:", !!SENDGRID_API_KEY);
console.log("SENDGRID_FROM_EMAIL:", SENDGRID_FROM_EMAIL);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Content-Type": "application/json",
};

serve(async (req) => {
  console.log("Received request:", req.method);
  console.log("Request headers:", req.headers);

  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: corsHeaders
    });
  }

  try {
    const data: ConsultationData = await req.json();

    // Validate required fields
    if (!data.full_name || !data.email || !data.estate_location) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!SENDGRID_API_KEY) {
      console.error("ERROR: SENDGRID_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Processing consultation request from:", data.email);
    console.log("Sending to admin email:", ADMIN_EMAIL);

    // Create email content
    const emailBody = `
New Private Consultation Request Received

Client Details:
─────────────────────────────────────
Name: ${data.full_name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Estate Location: ${data.estate_location}

Primary Objectives:
${data.objectives || "Not specified"}

─────────────────────────────────────
Submitted at: ${new Date().toISOString()}

Please follow up with the client at your earliest convenience.
    `;

    // Send email via SendGrid
    console.log("Calling SendGrid API...");
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: ADMIN_EMAIL }],
            subject: `New Consultation Request from ${data.full_name}`,
          },
        ],
        from: { email: SENDGRID_FROM_EMAIL },
        content: [
          {
            type: "text/plain",
            value: emailBody,
          },
        ],
        reply_to: { email: data.email },
      }),
    });

    console.log("SendGrid response status:", response.status);

    if (!response.ok) {
      const error = await response.text();
      console.error("SendGrid error response:", error, "Status:", response.status);
      throw new Error(`SendGrid API error: ${response.status} - ${error}`);
    }

    console.log("Email sent successfully to:", ADMIN_EMAIL);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
});
