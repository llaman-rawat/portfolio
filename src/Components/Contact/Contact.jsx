import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_b5ji0gy",     // your service ID
      "template_d4w6evu",     // your template ID
      form.current,
      "sXKABwyUjeSiiiLjo"        // your public key
    )
    .then(() => {
      alert("Message Sent Successfully!");
    })
    .catch(() => {
      alert("Failed to send message");
    });

    e.target.reset();
  };

  return (
    <section id="contact" className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-6">
      
      <div className="max-w-xl w-full">

        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-md font-semibold"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}