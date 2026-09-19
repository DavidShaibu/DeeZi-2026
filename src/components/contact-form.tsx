"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
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

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-[13px] tracking-[0.08em] uppercase">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="h-12 rounded-xl border-[#d9cfc6] bg-white px-3.5 text-base"
        />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="text-[13px] tracking-[0.08em] uppercase"
        >
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="h-12 rounded-xl border-[#d9cfc6] bg-white px-3.5 text-base"
        />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="text-[13px] tracking-[0.08em] uppercase"
        >
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          className="min-h-32 rounded-xl border-[#d9cfc6] bg-white px-3.5 py-3 text-base"
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
