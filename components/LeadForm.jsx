"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const initial = {
  name: "",
  email: "",
  phone: "",
  clinicName: "",
  city: "",
  service: "",
  budget: "",
  notes: "",
};

const validateEmail = (v) => /\S+@\S+\.\S+/.test(v);
const validatePhone = (v) => v && v.replace(/\D/g, "").length >= 8;

export default function LeadForm() {
  const [data, setData] = useState(initial);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const set = (k) => (e) => setData({ ...data, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!data.name) errs.name = "Required";
    if (!data.email || !validateEmail(data.email)) errs.email = "Invalid email";
    if (!data.phone || !validatePhone(data.phone)) errs.phone = "Invalid phone";
    if (!data.city) errs.city = "Required";
    if (!data.service) errs.service = "Required";
    if (!data.budget) errs.budget = "Required";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    try {
      setLoading(true);
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, createdAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error("Failed");
      router.push("/thank-you");
    } catch (err) {
      setLoading(false);
      setErrors({ submit: "Submission failed. Please try again." });
    }
  };

  return (
    <form
      onSubmit={submit}
      className="mx-auto w-full max-w-2xl rounded-3xl border border-muted/50 bg-surface-elevated p-6 lg:p-8 text-foreground shadow-2xl"
    >
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold">Book Your Strategy Call</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Fill in your details and we’ll review your clinic before the call.
        </p>
        <p className="mt-1 text-xs text-muted-foreground/70">
          We only work with clinics ready to invest in growth (limited spots).
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm">Full Name</label>
          <input
            className="w-full rounded-xl bg-muted/20 px-4 py-3 outline-none ring-1 ring-inset ring-border focus:ring-primary"
            value={data.name}
            onChange={set("name")}
            placeholder="Jane Doe"
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm">Email Address</label>
          <input
            className="w-full rounded-xl bg-muted/20 px-4 py-3 outline-none ring-1 ring-inset ring-border focus:ring-primary"
            value={data.email}
            onChange={set("email")}
            placeholder="jane@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm">Phone / WhatsApp</label>
          <input
            className="w-full rounded-xl bg-muted/20 px-4 py-3 outline-none ring-1 ring-inset ring-border focus:ring-primary"
            value={data.phone}
            onChange={set("phone")}
            placeholder="+44 7xxx xxx xxx"
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm">Clinic Name (optional)</label>
          <input
            className="w-full rounded-xl bg-muted/20 px-4 py-3 outline-none ring-1 ring-inset ring-border focus:ring-primary"
            value={data.clinicName}
            onChange={set("clinicName")}
            placeholder="Your Clinic Ltd"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm">City / Location</label>
          <input
            className="w-full rounded-xl bg-muted/20 px-4 py-3 outline-none ring-1 ring-inset ring-border focus:ring-primary"
            value={data.city}
            onChange={set("city")}
            placeholder="London"
          />
          {errors.city && <p className="mt-1 text-xs text-destructive">{errors.city}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm">Service Interested In</label>
          <select
            className="w-full rounded-xl bg-muted/20 px-4 py-3 outline-none ring-1 ring-inset ring-border focus:ring-primary"
            value={data.service}
            onChange={set("service")}
          >
            <option value="">Select</option>
            <option>Website Maintenance</option>
            <option>Website Development</option>
            <option>Performance Marketing</option>
          </select>
          {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm">Estimated Monthly Budget</label>
          <select
            className="w-full rounded-xl bg-muted/20 px-4 py-3 outline-none ring-1 ring-inset ring-border focus:ring-primary"
            value={data.budget}
            onChange={set("budget")}
          >
            <option value="">Select</option>
            <option>£500–£1000</option>
            <option>£1000–£2500</option>
            <option>£2500+</option>
          </select>
          {errors.budget && <p className="mt-1 text-xs text-destructive">{errors.budget}</p>}
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm">Additional Notes / Requirements (optional)</label>
          <textarea
            className="min-h-28 w-full rounded-xl bg-muted/20 px-4 py-3 outline-none ring-1 ring-inset ring-border focus:ring-primary"
            value={data.notes}
            onChange={set("notes")}
            placeholder="Tell us more about your clinic"
          />
        </div>
      </div>

      <div className="mt-6 flex items-start justify-between gap-4">
        <p className="text-xs text-muted-foreground/70">Your data is safe. We won’t share it with anyone.</p>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded-full bg-primary text-primary-foreground glow-primary hover:brightness-110 transition"
        >
          {loading ? "Submitting..." : "Book My Strategy Call"}
        </button>
      </div>
      {errors.submit && <p className="mt-3 text-xs text-destructive">{errors.submit}</p>}
    </form>
  );
}
