# Qiko Labs website (`qikolabs.com`)

Lean marketing site for **Qiko Labs** — home for **Pulse** (B2B AI intelligence) and custom AI builds. Signal stays on [qiko.ai](https://qiko.ai).

Visual language is adapted from `qiko-website-v2`. Enquiry uses the Labs contact field shape (`name`, `work_email`, `company`, `company_size`, `message`).

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- pnpm

## Quick start

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

App runs at [http://localhost:3001](http://localhost:3001).

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (`https://qikolabs.com`) |
| `NEXT_PUBLIC_SIGNAL_SITE_URL` | Link out to Signal (`https://qiko.ai`) |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly scheduling URL for Book a call |
| `NEXT_PUBLIC_APP_BASE_URL` | Optional qiko-core base; proxies enquiry to `/api/v1/marketing/labs-contact` |
| `SITE_NOINDEX` | Set `true` on staging/preview |

Without `NEXT_PUBLIC_APP_BASE_URL`, enquiry submissions succeed and are logged server-side (useful for local/dev).

## Landing composition

1. Hero — Qiko Labs / Pulse + Book a call (Calendly) + Enquire
2. How Labs ships / delivery path
3. Why digital workers + build stages
4. Client case studies
5. Platform handles / audience / Two ways (Pulse + Labs)
6. FAQ
7. Contact band — Calendly + Labs enquiry form
8. Closing CTA

`/contact` repeats the Calendly + enquiry form for a dedicated page.

## Product split

| Product | Home | Role |
| --- | --- | --- |
| **Signal** | `qiko.ai` | AI visibility assessments and findings |
| **Labs / Pulse** | `qikolabs.com` | B2B Pulse + custom AI workers |

### Follow-up (not in this repo)

Point `qiko.ai/labs` (and Signal Labs CTAs) at `https://qikolabs.com` when ready — redirect or deep-link. This repo does not change `qiko-website-v2`.

## Scripts

- `pnpm dev` — local server on port 3001
- `pnpm build` / `pnpm start` — production
- `pnpm check` — TypeScript
- `pnpm lint` — ESLint
