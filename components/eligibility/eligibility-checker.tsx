"use client";

import { useMemo, useState } from "react";
import {
  countries,
  experienceBands,
  professions,
  recommendPathway,
  specialties,
  type EligibilityAnswers,
} from "@/lib/eligibility";
import { getPackage } from "@/lib/packages";
import { CtaLink } from "@/components/cta-link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stepper } from "@/components/ui/stepper";

const steps = ["Profession", "Specialty", "Training country", "Experience"];

const empty: EligibilityAnswers = {
  profession: "",
  specialty: "",
  country: "",
  experience: "",
};

export function EligibilityChecker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<EligibilityAnswers>(empty);

  const specialtyOptions = answers.profession ? specialties[answers.profession] : [];
  const result = useMemo(
    () =>
      answers.profession && answers.specialty && answers.country && answers.experience
        ? recommendPathway(answers)
        : null,
    [answers],
  );
  const recommended = result ? getPackage(result.packageSlug) : undefined;
  const complete = Boolean(result && step === 4);

  function choose(partial: Partial<EligibilityAnswers>) {
    const next = { ...answers, ...partial };
    setAnswers(next);
    setStep((current) => Math.min(current + 1, 4));
  }

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="gap-4">
        <CardTitle className="text-xl">Eligibility checker</CardTitle>
        <CardDescription>
          Four short questions. You receive a suggested package to review. Official classification still sits with the authority.
        </CardDescription>
        <Stepper steps={steps} current={Math.min(step, 3)} />
      </CardHeader>
      <CardContent className="pb-6">
        {step === 0 ? (
          <OptionGrid
            legend="What is your profession?"
            options={professions.map((item) => ({ id: item.id, label: item.label }))}
            onSelect={(id) => choose({ profession: id as EligibilityAnswers["profession"], specialty: "" })}
          />
        ) : null}

        {step === 1 ? (
          <OptionGrid
            legend="Which area is closest to your work?"
            options={specialtyOptions}
            onSelect={(id) => choose({ specialty: id })}
          />
        ) : null}

        {step === 2 ? (
          <OptionGrid
            legend="Where did you complete your primary professional training?"
            options={countries.map((item) => ({ id: item.id, label: item.label }))}
            onSelect={(id) => choose({ country: id as EligibilityAnswers["country"] })}
          />
        ) : null}

        {step === 3 ? (
          <OptionGrid
            legend="How many years of post-qualification experience do you have?"
            options={experienceBands.map((item) => ({ id: item.id, label: item.label }))}
            onSelect={(id) => choose({ experience: id as EligibilityAnswers["experience"] })}
          />
        ) : null}

        {complete && result && recommended ? (
          <div className="grid gap-5">
            <div>
              <p className="text-sm font-medium tracking-wide text-teal-dark uppercase">Suggested next step</p>
              <h2 className="mt-2 text-2xl font-semibold">{result.headline}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{result.summary}</p>
            </div>
            <ul className="grid gap-2 text-sm text-slate-700">
              {result.bullets.map((bullet) => (
                <li key={bullet} className="rounded-lg border bg-slate-50 px-3 py-2">
                  {bullet}
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-600">
              Recommended package to review: <strong>{recommended.name}</strong> ({recommended.price})
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <CtaLink href={`/packages/${recommended.slug}`}>View package</CtaLink>
              <CtaLink href="/contact" variant="outline">
                Book a free consultation
              </CtaLink>
              <Button
                type="button"
                variant="ghost"
                size="xl"
                onClick={() => {
                  setAnswers(empty);
                  setStep(0);
                }}
              >
                Start over
              </Button>
            </div>
          </div>
        ) : null}

        {step > 0 && step < 4 ? (
          <Button type="button" variant="ghost" className="mt-4" onClick={() => setStep((value) => value - 1)}>
            Back
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}

function OptionGrid({
  legend,
  options,
  onSelect,
}: {
  legend: string;
  options: { id: string; label: string }[];
  onSelect: (id: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-4 text-base font-medium text-navy-deep">{legend}</legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-navy-deep transition-colors hover:border-teal-dark hover:bg-accent focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
