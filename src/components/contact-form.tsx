"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setName("");
      setEmail("");
      setMessage("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-[#e8ddd4] bg-[#fbf7f2] px-6 py-10 text-center">
        <p className="font-script text-4xl text-[#2a2a2a]">Thank you</p>
        <p className="font-serif mx-auto mt-4 max-w-sm text-[1.05rem] leading-8 text-[#3a3a3a]">
          We received your note and will write back as soon as we can. We cannot
          wait to celebrate with you.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6 h-11 rounded-full border-[#2a2a2a] px-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const fieldClass =
    "h-12 w-full rounded-xl border border-[#d9cfc6] bg-white px-3.5 text-base text-[#2b2b2b] outline-none transition focus:border-[#c4a090] focus:ring-2 focus:ring-[#c4a090]/40";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-[13px] tracking-[0.08em] uppercase">
          Name
        </Label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          autoComplete="name"
          className={fieldClass}
        />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="text-[13px] tracking-[0.08em] uppercase"
        >
          Email
        </Label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          autoComplete="email"
          className={fieldClass}
        />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="text-[13px] tracking-[0.08em] uppercase"
        >
          Message
        </Label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          rows={5}
          className={`${fieldClass} min-h-32 py-3`}
        />
      </div>
      {status === "error" ? (
        <p className="text-sm text-red-700">
          Something went wrong. Please try again, or email us directly.
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={status === "sending"}
        className="h-12 w-full rounded-full bg-[#2a2a2a] text-base text-white hover:bg-[#3a3a3a]"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
