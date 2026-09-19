"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Notice } from "@/components/notice";
import { consultationSchema, type ConsultationValues } from "@/lib/schemas";

export function ConsultationForm({
  defaultAudience = "professional",
  topics,
}: {
  defaultAudience?: ConsultationValues["audience"];
  topics: { value: string; label: string }[];
}) {
  const [submitted, setSubmitted] = useState(false);
  const resolver = useMemo(() => zodResolver(consultationSchema), []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConsultationValues>({
    resolver,
    defaultValues: {
      audience: defaultAudience,
      topic: topics[0]?.value ?? "consultation",
      consent: false,
    },
  });

  if (submitted) {
    return (
      <Notice>
        Thank you. This is a Phase 1 confirmation only — no message was sent to a live inbox. A
        consultant would normally reply within one working day. We still cannot issue a licence or
        guarantee a job.
      </Notice>
    );
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={handleSubmit(() => setSubmitted(true))}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <Input className="h-11" {...register("name")} autoComplete="name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <Input className="h-11" type="email" {...register("email")} autoComplete="email" />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <Input className="h-11" type="tel" {...register("phone")} autoComplete="tel" />
        </Field>
        <Field label="I am" error={errors.audience?.message}>
          <select
            className="h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
            {...register("audience")}
          >
            <option value="professional">A healthcare professional</option>
            <option value="facility">Representing a hospital or clinic</option>
          </select>
        </Field>
      </div>
      <Field label="Topic" error={errors.topic?.message}>
        <select
          className="h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
          {...register("topic")}
        >
          {topics.map((topic) => (
            <option key={topic.value} value={topic.value}>
              {topic.label}
            </option>
          ))}
        </select>
      </Field>
      <Field label="How can we help?" error={errors.message?.message}>
        <Textarea rows={5} {...register("message")} />
      </Field>
      <label className="flex items-start gap-2 text-sm leading-6 text-slate-600">
        <input type="checkbox" className="mt-1" {...register("consent")} />
        I understand MedLicense Hub does not issue official licences and does not guarantee job
        placement.
      </label>
      {errors.consent ? <p className="text-sm text-destructive">{errors.consent.message}</p> : null}
      <Button type="submit" size="xl" className="justify-self-start">
        Request consultation
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <Label>{label}</Label>
      {children}
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
    </div>
  );
}
