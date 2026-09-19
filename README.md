# MedLicense Hub

Trust-first web app for a UAE/GCC healthcare licensing consultancy. Working brand name is **MedLicense Hub** (change `lib/site.ts`).

The site helps doctors, nurses, dentists and allied health professionals prepare **DHA / DOH / MOHAP** (and optional **SCFHS**) licensing files, and helps hospitals request licence-ready talent.

It does **not** issue official licences. It does **not** guarantee jobs.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 + shadcn/ui
- React Hook Form + Zod
- Phase 1 data is mocked (no live database)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Demo portal

- URL: `/portal/login`
- Any email
- Password: `demo1234`
- Choose **Candidate** or **Hospital / clinic**

Session is stored in `sessionStorage` only.

## Project structure

```
app/(marketing)/   Public pages (home, packages, eligibility, jobs, legal…)
app/portal/        Candidate and facility shells
components/        Layout, forms, eligibility, portal, shadcn UI
lib/               Site copy, packages, FAQs, eligibility logic
```

To rename the brand, edit `lib/site.ts`. To plug in a real backend later, replace mock modules in `lib/` and the form `onSubmit` handlers — page routes can stay.

## Important copy

Every package and job-related page includes:

- Job placement is not guaranteed
- Official licences are issued only by DHA, DOH, MOHAP or other authorities
