"use client";

import { useCallback, useState } from "react";
import { COMPANY_SIZE_OPTIONS } from "@/lib/contact";

type FormState = {
  name: string;
  work_email: string;
  company: string;
  company_size: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  work_email: "",
  company: "",
  company_size: COMPANY_SIZE_OPTIONS[0],
  message: "",
};

const fieldErrorStyle: React.CSSProperties = {
  marginTop: 6,
  fontSize: 12,
  color: "var(--accent-red)",
};

function validateForm(values: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) errors.name = "Name is required.";
  else if (values.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";

  if (!values.work_email.trim()) errors.work_email = "Work email is required.";
  else if (!emailPattern.test(values.work_email.trim())) {
    errors.work_email = "Please enter a valid email address.";
  }

  if (!values.company.trim()) errors.company = "Company is required.";
  if (!values.company_size.trim()) errors.company_size = "Company size is required.";
  if (!values.message.trim()) errors.message = "Please describe what you need.";
  else if (values.message.length > 4000) errors.message = "Message must be 4000 characters or fewer.";

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = useCallback((field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
    setSubmitError(null);
  }, []);

  const fieldId = (key: keyof FormState) => `labs-contact-${key.replaceAll("_", "-")}`;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitError(null);
    setSuccessMessage(null);

    const errors = validateForm(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      const firstInvalid = (Object.keys(form) as (keyof FormState)[]).find((key) => errors[key]);
      if (firstInvalid) document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const payload = {
        name: form.name.trim(),
        work_email: form.work_email.trim(),
        company: form.company.trim(),
        company_size: form.company_size,
        message: form.message.trim(),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const body = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (!response.ok || !body?.success) {
        throw new Error(body?.message || "The message could not be sent. Please try again.");
      }

      setForm(initialFormState);
      setSuccessMessage(body.message || "Thanks - your message has been sent.");
      window.setTimeout(() => setSuccessMessage(null), 5000);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "The message could not be sent. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldProps = (key: keyof FormState) => ({
    id: fieldId(key),
    name: key,
    value: form[key],
    required: true,
    disabled: isSubmitting,
    "aria-invalid": Boolean(fieldErrors[key]) || undefined,
    "aria-describedby": fieldErrors[key] ? `${fieldId(key)}-error` : undefined,
    style: fieldErrors[key] ? { borderColor: "var(--accent-red)" } : undefined,
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => updateField(key, event.target.value),
  });

  const error = (key: keyof FormState) =>
    fieldErrors[key] ? (
      <p id={`${fieldId(key)}-error`} style={fieldErrorStyle}>
        {fieldErrors[key]}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor={fieldId("name")}>
            Name <span aria-hidden="true" style={{ color: "var(--accent-red)" }}>*</span>
          </label>
          <input {...fieldProps("name")} type="text" autoComplete="name" placeholder="Your name" />
          {error("name")}
        </div>
        <div className="form-field">
          <label htmlFor={fieldId("work_email")}>
            Work email <span aria-hidden="true" style={{ color: "var(--accent-red)" }}>*</span>
          </label>
          <input
            {...fieldProps("work_email")}
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
          />
          {error("work_email")}
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor={fieldId("company")}>
            Company <span aria-hidden="true" style={{ color: "var(--accent-red)" }}>*</span>
          </label>
          <input
            {...fieldProps("company")}
            type="text"
            autoComplete="organization"
            placeholder="Company name"
          />
          {error("company")}
        </div>
        <div className="form-field">
          <label htmlFor={fieldId("company_size")}>
            Company size <span aria-hidden="true" style={{ color: "var(--accent-red)" }}>*</span>
          </label>
          <select {...fieldProps("company_size")}>
            {COMPANY_SIZE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {error("company_size")}
        </div>
      </div>
      <div className="form-row">
        <div className="form-field" style={{ flexBasis: "100%" }}>
          <label htmlFor={fieldId("message")}>
            What do you need? <span aria-hidden="true" style={{ color: "var(--accent-red)" }}>*</span>
          </label>
          <textarea
            {...fieldProps("message")}
            placeholder="Pulse demo, a custom AI worker, or the outcome you are after."
          />
          {error("message")}
        </div>
      </div>
      {submitError ? (
        <p role="alert" className="form-feedback">
          {submitError}
        </p>
      ) : null}
      {successMessage ? (
        <p role="status" className="form-feedback">
          {successMessage}
        </p>
      ) : null}
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send enquiry"}
        <img src="/qiko-static/assets/icons/arrow-white.svg" alt="" />
      </button>
    </form>
  );
}
