-- PULSO RD - initial database schema
-- Run in Supabase SQL Editor.

create extension if not exists "pgcrypto";

create table if not exists public.pulse_questions (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  question text not null,
  category text not null default 'General',
  options jsonb not null check (jsonb_typeof(options) = 'array'),
  status text not null default 'draft' check (status in ('draft','published','closed')),
  published_at timestamptz,
  closes_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.pulse_votes (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.pulse_questions(id) on delete cascade,
  option text not null,
  audience text not null check (audience in ('DR','US')),
  region text,
  ip_hash text not null,
  user_agent text,
  created_at timestamptz not null default now(),
  unique(question_id, ip_hash)
);

create table if not exists public.issue_snapshots (
  id uuid primary key default gen_random_uuid(),
  issue text not null,
  audience text not null check (audience in ('DR','US','ALL')),
  region text,
  score numeric(5,2) not null check (score >= 0 and score <= 100),
  sample_size integer not null default 0,
  observed_at timestamptz not null default now(),
  methodology text
);

create table if not exists public.sentiment_events (
  id uuid primary key default gen_random_uuid(),
  source_type text not null,
  topic text not null,
  audience text check (audience in ('DR','US','UNKNOWN')),
  region text,
  sentiment numeric(5,2) check (sentiment >= -1 and sentiment <= 1),
  confidence numeric(5,2) check (confidence >= 0 and confidence <= 1),
  source_ref text,
  observed_at timestamptz not null default now()
);

alter table public.pulse_questions enable row level security;
alter table public.pulse_votes enable row level security;
alter table public.issue_snapshots enable row level security;
alter table public.sentiment_events enable row level security;

-- Public clients can read only published questions.
drop policy if exists "public_read_published_questions" on public.pulse_questions;
create policy "public_read_published_questions"
on public.pulse_questions
for select
to anon, authenticated
using (status = 'published');

-- No direct browser access to raw votes or raw sentiment events.
-- Server API uses SUPABASE_SERVICE_ROLE_KEY and bypasses RLS.

insert into public.pulse_questions
  (slug, question, category, options, status, published_at)
values
  (
    'prioridad-nacional-001',
    '¿Cuál debería ser la prioridad nacional número uno?',
    'Prioridades nacionales',
    '["Costo de vida","Seguridad","Empleo","Educación","Salud","Infraestructura"]'::jsonb,
    'published',
    now()
  ),
  (
    'presidencial-2028',
    'Si las elecciones presidenciales fueran hoy, ¿por quién votarías?',
    'Elecciones',
    '["David Collado","Leonel Fernández","Omar Fernández","Gonzalo Castillo","Santiago Matías","Carolina Mejía","Guido Gómez Mazara","Wellington Arnaud","Ramfis Trujillo","Otro / Indeciso"]'::jsonb,
    'published',
    now()
  )
on conflict (slug) do nothing;

create index if not exists pulse_votes_question_idx
  on public.pulse_votes(question_id);

create index if not exists pulse_votes_audience_idx
  on public.pulse_votes(audience);

create index if not exists issue_snapshots_observed_idx
  on public.issue_snapshots(observed_at desc);

create index if not exists sentiment_events_observed_idx
  on public.sentiment_events(observed_at desc);
