"use server";
import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/emails/contact-form-email";

const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const fullname = formData.get("fullname");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!validateString(fullname, 100)) return { error: 'Invalid name'}
  if (!validateString(email, 200)) return { error: 'Invalid email'}
  if (!validateString(message, 5000)) return { error: 'Invalid message' }

  // If the subject field is empty
  const sub = subject?.length === 0 ? 'Email from PEXEL WAVE Website' : subject

  try {
    await resend.emails.send({
        from: "Contact Form<onboarding@resend.dev>",
        to: "pexelwave@gmail.com",
        reply_to: email as string,
        subject: sub as string,
        react: React.createElement(ContactFormEmail, {
          fullname: fullname as string,
          senderEmail: email as string,
          message: message as string,
        })
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error)}
  }
};
