"use client";

import Lottie from "lottie-react";
import React from "react";
import appDevAnimation from "@/assets/lottie/app-dev-animation.json";
import Link from "next/link";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Socials from "./Socials";
import { sendEmail } from "@/actions/sendEmail";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="bg-violet-950 md:mt-12" id="contact">
      <div className="container flex flex-col md:flex-row gap-12">
        <div className="flex md:block md:w-1/3 ">
          <div className="flex flex-col">
            <h2 className="large-title text-light-foreground">
              <span className="font-outline-2">GET IN </span>
              TOUCH
            </h2>
            <div className="flex flex-col gap-4 text-light-foreground">
              <a className="flex items-center gap-2" href="tel:0848003643">
                <AiOutlinePhone /> Call us
              </a>
              <a
                className="flex items-center gap-2"
                href="mailto:pexelwave@gmail.com"
              >
                <AiOutlineMail /> Email us
              </a>
            </div>
            <div className="flex gap-6 text-light-foreground mt-6">
              <Socials />
            </div>
          </div>

          <Lottie className="w-3/4 md:w-full" animationData={appDevAnimation} />
        </div>

        <form
          className="flex-1 text-light-foreground md:px-24 rounded-lg"
          action={async (formData) => {
            await sendEmail(formData)
          }}
        >
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="name">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              className="h-[40px] rounded-lg text-violet-950 px-4 border-none outline-none"
              type="text"
              name="fullname"
              id="name"
              required
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="email">
              Email <span className="text-red-500">*</span>
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
            <label htmlFor="subject">Subject</label>
            <input
              className="h-[40px] rounded-lg text-violet-950 px-4 border-none outline-none"
              type="text"
              name="subject"
              id="subject"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="message">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={5}
              className="rounded-lg text-violet-950 px-4 py-4 border-none outline-none"
              name="message"
              id="message"
              required
            />
          </div>

          <button className="btn bg-blue text-light-foreground font-bold">
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
