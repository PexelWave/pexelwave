"use client"

import React from "react";
import { sendUserQuotationRequest } from "@/actions/sendUserQuotationRequest";
type Props = {
    service: string
};

const ServiceQuoteForm = async (props: Props) => {
  return (
    <form
      className="flex flex-col gap-4 max-w-3xl mx-auto"
      action={async (formData) => {
        console.log(formData)
        await sendUserQuotationRequest(formData);
      }}
    >
      <div className="flex flex-col gap-2 mb-6">
        <label htmlFor="fullName">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          className="h-[40px] rounded-lg text-violet-950 px-4 border-none outline-none"
          type="text"
          name="fullName"
          id="fullName"
          required
        />
      </div>
      <div className="flex flex-col gap-2 mb-6">
        <label htmlFor="service">
          Quotation for<span className="text-red-500">*</span>
        </label>
        <input
          className="h-[40px] rounded-lg text-violet-950 px-4 border-none outline-none"
          type="text"
          name="service"
          value={props.service}
          disabled={true}
          id="service"
          required
        />
      </div>
      <div className="flex flex-col gap-2 mb-6">
        <label htmlFor="email">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          className="h-[40px] rounded-lg text-violet-950 px-4 border-none outline-none"
          type="email"
          name="email"
          id="email"
          required
        />
      </div>
      <div className="flex flex-col gap-2 mb-6">
        <label htmlFor="companyName">
          Your Company Name (
          <small>If you don't have a business leave this field empty</small>)
        </label>
        <input
          className="h-[40px] rounded-lg text-violet-950 px-4 border-none outline-none"
          type="text"
          name="companyName"
          id="companyName"
        />
      </div>
      <div className="flex flex-col gap-2 mb-6">
        <label htmlFor="contactNumber">
          Contact Number <span className="text-red-500">*</span>
        </label>
        <input
          className="h-[40px] rounded-lg text-violet-950 px-4 border-none outline-none"
          type="tel"
          name="contactNumber"
          id="contactNumber"
        />
      </div>
      <div className="flex flex-col gap-2 mb-6">
        <label htmlFor="message">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={5}
          className="rounded-lg text-violet-950 px-4 py-4 border-none outline-none col-span-4 w-full"
          name="message"
          id="message"
          required
        />
      </div>
      <button className="btn bg-blue text-light-foreground font-bold w-1/2 col-span-2">
        GET QUOTE
      </button>
    </form>
  );
};

export default ServiceQuoteForm;
