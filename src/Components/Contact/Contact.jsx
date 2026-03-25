import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_b5ji0gy",
      "template_d4w6evu",
      form.current,
      "sXKABwyUjeSiiiLjo"
    )
    .then(() => alert("Message Sent!"))
    .catch(() => alert("Failed"));

    e.target.reset();
  };

  return (
    <section id="contact" className="bg-black text-white py-20 px-6">

      <h2 className="text-4xl text-center font-bold mb-12">
        Contact Me
      </h2>

      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4">

        <input type="text" name="name" placeholder="Name"
          className="w-full p-3 bg-gray-900 rounded-lg"/>

        <input type="email" name="email" placeholder="Email"
          className="w-full p-3 bg-gray-900 rounded-lg"/>

        <textarea name="message" rows="5" placeholder="Message"
          className="w-full p-3 bg-gray-900 rounded-lg"></textarea>

        <button className="w-full bg-white text-black py-3 rounded-lg">
          Send Message
        </button>

      </form>
    </section>
  );
}