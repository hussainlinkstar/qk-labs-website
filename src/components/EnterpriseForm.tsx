"use client";

import { useCallback, useState } from "react";
import { COMPANY_SIZE_OPTIONS } from "@/lib/contact";

type FormState = {
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  company_size: string;
  budget: string;
  use_case: string;
};

const initial: FormState = {
  company_name: "",
  contact_name: "",
  email: "",
  phone: "",
  company_size: COMPANY_SIZE_OPTIONS[0],
  budget: "",
  use_case: "",
};

const fieldErrorStyle: React.CSSProperties = {
  marginTop: 6,
  fontSize: 12,
  color: "var(--accent-red)",
};

function validate(values: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\+?\d+$/;

  if (!values.company_name.trim()) errors.company_name = "Company name is required.";
  if (!values.contact_name.trim()) errors.contact_name = "Contact name is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!emailPattern.test(values.email.trim())) errors.email = "Enter a valid email.";
  if (!values.phone.trim()) errors.phone = "Phone is required.";
  else if (!phonePattern.test(values.phone.trim())) {
    errors.phone = "Phone can only include digits and an optional leading +.";
  }
  if (!values.company_size.trim()) errors.company_size = "Company size is required.";
  if (!values.budget.trim()) errors.budget = "Budget range is required.";
  if (!values.use_case.trim()) errors.use_case = "Please describe your needs.";
  return errors;
}

export default function EnterpriseForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = useCallback((field: keyof FormState, value: string) => {
    const next =
      field === "phone" ? value.replace(/[^\d+]/g, "").replace(/(?!^)\+/g, "") : value;
    setForm((prev) => ({ ...prev, [field]: next }));
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
    setSubmitError(null);
  }, []);

  const fieldId = (key: keyof FormState) => `ent-${key.replaceAll("_", "-")}`;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitError(null);
    const errors = validate(form);
    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      const first = (Object.keys(form) as (keyof FormState)[]).find((key) => errors[key]);
      if (first) document.getElementById(fieldId(first))?.focus();
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/enterprise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company_name: form.company_name.trim(),
          contact_name: form.contact_name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          company_size: form.company_size,
          budget_range: form.budget.trim(),
          requirements: form.use_case.trim(),
        }),
      });
      const body = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;
      if (!response.ok || !body?.success) {
        throw new Error(body?.message || "Could not submit. Please try again.");
      }
      setForm(initial);
      setSuccess(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Could not submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="enterprise-success" role="status">
        <h3>Thank you</h3>
        <p>We’ve received your enquiry. The Labs team will contact you within 24 hours.</p>
        <button type="button" className="btn btn-outline" onClick={() => setSuccess(false)}>
          Send another enquiry
        </button>
      </div>
    );
  }

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
    <form className="contact-form" onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor={fieldId("company_name")}>Company name *</label>
          <input {...fieldProps("company_name")} type="text" autoComplete="organization" />
          {error("company_name")}
        </div>
        <div className="form-field">
          <label htmlFor={fieldId("contact_name")}>Contact name *</label>
          <input {...fieldProps("contact_name")} type="text" autoComplete="name" />
          {error("contact_name")}
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor={fieldId("email")}>Email *</label>
          <input {...fieldProps("email")} type="email" autoComplete="email" />
          {error("email")}
        </div>
        <div className="form-field">
          <label htmlFor={fieldId("phone")}>Phone *</label>
          <input {...fieldProps("phone")} type="tel" autoComplete="tel" placeholder="+15550000000" />
          {error("phone")}
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor={fieldId("company_size")}>Company size *</label>
          <select {...fieldProps("company_size")}>
            {COMPANY_SIZE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {error("company_size")}
        </div>
        <div className="form-field">
          <label htmlFor={fieldId("budget")}>Budget range *</label>
          <input {...fieldProps("budget")} type="text" placeholder="e.g. $50k–$100k" />
          {error("budget")}
        </div>
      </div>
      <div className="form-row">
        <div className="form-field" style={{ flexBasis: "100%" }}>
          <label htmlFor={fieldId("use_case")}>Tell us about your digital worker needs *</label>
          <textarea {...fieldProps("use_case")} placeholder="Requirements, data, deployment, outcomes..." />
          {error("use_case")}
        </div>
      </div>
      {submitError ? (
        <p role="alert" className="form-feedback">
          {submitError}
        </p>
      ) : null}
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Get started"}
        <img src="/qiko-static/assets/icons/arrow-white.svg" alt="" />
      </button>
    </form>
  );
}
