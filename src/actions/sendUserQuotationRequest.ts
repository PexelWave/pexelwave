"use server";
import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import QuotationFormEmail from "@/emails/quotation-form-email";

const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

export const sendUserQuotationRequest = async (formData: FormData) => {
  const service = formData.get("service");
  const fullName = formData.get("fullName");
  const companyName = formData.get("companyName");
  const email = formData.get("email");
  const contactNumber = formData.get("contactNumber");
  const message = formData.get("message");

  if (!validateString(fullName, 100)) return { error: "Invalid name" };
  if (!validateString(email, 200)) return { error: "Invalid email" };
  if (!validateString(companyName, 200)) return { error: "Invalid email" };
  if (!validateString(contactNumber, 200)) return { error: "Invalid email" };
  if (!validateString(message, 5000)) return { error: "Invalid message" };

  try {
    await resend.emails.send({
      from: "Quoatation Form<onboarding@resend.dev>",
      to: "pexelwave@gmail.com",
      reply_to: email as string,
      subject: service as string,
      react: React.createElement(QuotationFormEmail, {
        service: service as string,
        fullName: fullName as string,
        companyName: companyName as string,
        senderEmail: email as string,
        contactNumber: contactNumber as string,
        message: message as string,
      }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
