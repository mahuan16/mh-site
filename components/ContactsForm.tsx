"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "p-3 rounded-lg bg-neutral-800/60 text-white border border-white/10 focus:outline-none focus:border-blue-400 transition-colors placeholder:text-neutral-500";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input name="name" type="text" placeholder="Your Name" required className={inputClass} />
      <input name="email" type="email" placeholder="Your Email" required className={inputClass} />
      <textarea name="message" placeholder="Your Message" rows={5} required className={inputClass} />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-sky-500 hover:bg-sky-400 disabled:opacity-60 transition-colors text-slate-950 py-3 rounded-lg font-semibold"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-green-400 text-sm">Message sent! Thanks for reaching out.</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">Something went wrong. Try again or email me directly.</p>
      )}
    </form>
  );
}