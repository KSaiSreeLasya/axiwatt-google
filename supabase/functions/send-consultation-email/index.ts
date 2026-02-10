import { serve } from "https://deno.land/std@0.208.0/http/server.ts";

interface ConsultationData {
  full_name: string;
  email: string;
  estate_location: string;
  objectives: string;
  phone?: string;
}

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const RESEND_FROM_EMAIL = Deno.env.get("RESEND_FROM_EMAIL") || "noreply@axiwatt.com";
const ADMIN_EMAIL = Deno.env.get("ADMIN_EMAIL") || "kottesaisreelasya@gmail.com";

console.log("send-consultation-email function loaded");
console.log("RESEND_API_KEY is set:", !!RESEND_API_KEY);
console.log("RESEND_FROM_EMAIL:", RESEND_FROM_EMAIL);
console.log("ADMIN_EMAIL:", ADMIN_EMAIL);

serve(async (req) => {
  console.log("Received request:", req.method);
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
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

    if (!RESEND_API_KEY) {
      console.error("ERROR: RESEND_API_KEY is not set");
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

    // Send email via Resend
    console.log("Calling Resend API...");
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [ADMIN_EMAIL],
        subject: `New Consultation Request from ${data.full_name}`,
        text: emailBody,
        reply_to: data.email,
      }),
    });

    console.log("Resend response status:", response.status);

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend error response:", error, "Status:", response.status);
      throw new Error(`Resend API error: ${response.status} - ${error}`);
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
