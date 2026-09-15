"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";

const projectTypes = [
  "Website",
  "Web Application",
  "Portfolio",
  "SaaS Product",
  "Other",
] as const;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({
      type: null,
      message: "",
    });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      projectType: formData.get("projectType"),
      budget: formData.get("budget"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Something went wrong. Please try again.",
        );
      }

      setStatus({
        type: "success",
        message: "Your inquiry has been sent successfully.",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2.5 block text-sm font-medium text-zinc-300"
          >
            Your name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="John Doe"
            className="h-12 w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 text-sm text-white outline-none placeholder:text-zinc-700 transition-colors focus:border-indigo-400/50 focus:bg-white/[0.035]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2.5 block text-sm font-medium text-zinc-300"
          >
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="john@example.com"
            className="h-12 w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 text-sm text-white outline-none placeholder:text-zinc-700 transition-colors focus:border-indigo-400/50 focus:bg-white/[0.035]"
          />
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="projectType"
          className="mb-2.5 block text-sm font-medium text-zinc-300"
        >
          What are you looking to build?
        </label>

        <select
          id="projectType"
          name="projectType"
          defaultValue=""
          required
          className="h-12 w-full appearance-none rounded-xl border border-white/[0.08] bg-black/20 px-4 text-sm text-zinc-300 outline-none transition-colors focus:border-indigo-400/50 focus:bg-white/[0.035]"
        >
          <option value="" disabled>
            Select a project type
          </option>

          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <label
          htmlFor="budget"
          className="mb-2.5 block text-sm font-medium text-zinc-300"
        >
          Estimated budget
          <span className="ml-2 text-xs font-normal text-zinc-600">
            Optional
          </span>
        </label>

        <input
          id="budget"
          name="budget"
          type="text"
          maxLength={100}
          placeholder="e.g. $1,000 – $3,000"
          className="h-12 w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 text-sm text-white outline-none placeholder:text-zinc-700 transition-colors focus:border-indigo-400/50 focus:bg-white/[0.035]"
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="mb-2.5 block text-sm font-medium text-zinc-300"
        >
          Tell me about it
        </label>

        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={7}
          placeholder="What are you building? What should it accomplish?"
          className="w-full resize-none rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm leading-6 text-white outline-none placeholder:text-zinc-700 transition-colors focus:border-indigo-400/50 focus:bg-white/[0.035]"
        />
      </div>

      {/* Honeypot field — invisible to normal users */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="website">Website</label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status.type && (
        <div
          role={status.type === "success" ? "status" : "alert"}
          className={`mt-6 flex items-start gap-3 rounded-xl border px-4 py-3.5 text-sm ${
            status.type === "success"
              ? "border-emerald-400/15 bg-emerald-400/[0.05] text-emerald-300"
              : "border-red-400/15 bg-red-400/[0.05] text-red-300"
          }`}
        >
          {status.type === "success" && (
            <Check className="mt-0.5 h-4 w-4 shrink-0" />
          )}

          <span>{status.message}</span>
        </div>
      )}

      <div className="mt-7 flex flex-col gap-4 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-zinc-600">
          By sending this inquiry, you&apos;re simply starting a conversation.
          No commitment required.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              Sending
              <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              Send inquiry
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}