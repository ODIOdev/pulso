# Pulso RD

Responsive public-opinion starter for Dominican Republic + U.S. Dominican diaspora.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Supabase/Postgres
- Vercel
- GitHub

## 1. Open in Cursor

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Create Supabase project

Create a Supabase project, then open **SQL Editor** and run:

`supabase/schema.sql`

Copy your project URL, publishable key, and service-role key into `.env.local`.

```bash
cp .env.example .env.local
```

Required values:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=
VOTE_HASH_SECRET=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Generate a vote secret:

```bash
openssl rand -hex 32
```

Never expose `SUPABASE_SERVICE_ROLE_KEY` or `VOTE_HASH_SECRET` to browser code.

## 3. GitHub

```bash
git init
git add .
git commit -m "Initial Pulso RD build"
git branch -M main
git remote add origin https://github.com/ODIOdev/pulso.git
git push -u origin main
```

Repo: https://github.com/ODIOdev/pulso.git

## 4. Vercel

Import the GitHub repository into Vercel.

Add the same environment variables in:

Project Settings → Environment Variables

Use your production URL for:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Deploy.

Every push to the connected GitHub branch can create a new deployment/preview according to your Vercel Git settings.

## Current functionality

- Responsive landing/dashboard
- Dominican Republic vs U.S. diaspora selector
- Public poll question loaded from Supabase
- Voting through a server-only route
- Option validation
- HMAC-based IP fingerprint to reduce repeat votes
- Aggregate poll results
- Issue tracker demo data
- Regional + diaspora demo cards
- Methodology page
- RLS enabled on sensitive tables
- Raw votes not directly readable from the browser

## Production hardening before a public launch

1. Add Cloudflare Turnstile or equivalent CAPTCHA.
2. Add distributed rate limiting (for example Upstash Redis).
3. Add a proper administrator auth/role system.
4. Add audit logs for poll creation and edits.
5. Normalize provinces/states instead of free-text entry.
6. Add sample-size suppression for small demographic cells.
7. Add survey weighting only with a documented statistical methodology.
8. Keep web participation metrics separate from representative polling.
9. Obtain Dominican election/data-privacy legal review before enabling electoral preference polling or campaign-specific targeting.
10. Add a consent/privacy notice and data-retention policy.

## Suggested next modules

- `/admin` — question builder and publishing console
- `/mapa` — SVG/GeoJSON Dominican province map
- `/diaspora` — U.S. state-level diaspora dashboard
- `/temas/[slug]` — issue trend pages
- `/api/sentiment` — approved-source sentiment ingestion
- `/api/admin/questions` — protected poll management
- Supabase Auth for admins
