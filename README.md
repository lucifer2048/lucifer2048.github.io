# Portfolio — Brutalist / Raw / Experimental

A from-scratch Next.js portfolio built around one idea: instead of hiding
how the page works, it exposes it. A live "debug HUD" in the corner shows
your real cursor position, scroll depth, current section, and an
auto-generated interaction log — the raw machinery of the page, on display,
which is what brutalism is actually about.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (CSS-first theme tokens in `app/globals.css`)
- **Framer Motion** (scroll reveals, count-up stats, project card transitions)
- Zero other dependencies. No component library, no animation-as-a-service.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> **First build needs internet access.** The display/mono/body fonts
> (Anton, IBM Plex Mono, IBM Plex Sans) load via `next/font/google`, which
> fetches them at build time. This is normal for any Next.js project using
> `next/font` — nothing to configure, it just needs to reach
> `fonts.googleapis.com` once.

## Customize everything from one file

Open **`lib/config.ts`**. That's it — name, role, bio, stats, projects,
tech stack, and social links all live there. Nothing else needs touching
unless you want to change layout or animation behavior.

A few things to swap before you ship:

- `profile.resumeUrl` — points at the sanitized public résumé in `public/`.
- `profile.email` — used by the client-only `mailto:` contact form.
- `socials` — point these at your real GitHub/LinkedIn/X profiles.
- `projects` — replace with your real work. Each has a `status` of
  `RUNNING | DEPLOYED | EXPERIMENT | ARCHIVED` which drives the badge color.

## The signature element

`components/DebugHUD.tsx` is the one place worth understanding before you
touch it. It listens to real mouse, scroll, and `IntersectionObserver`
events and renders them live. Other components (`Projects.tsx`,
`Contact.tsx`) push lines into its log via a tiny event bus:

```ts
import { logToHud } from "@/components/DebugHUD";
logToHud("did a thing");
```

Use that anywhere you want the HUD to narrate an interaction.

## Contact form and security

The contact form intentionally opens the visitor's local email client with a
length-limited, encoded `mailto:` link. The static site has no public form API,
database, authentication system, or server secrets. If a hosted form provider
is added later, review its spam controls, data retention, domain restrictions,
and secret-handling model before deployment.

## Accessibility / motion

- All interactive elements have a visible focus ring (the orange outline).
- `prefers-reduced-motion` is respected throughout: the scramble-text
  intro, marquee, glitch-jitter, and count-up all fall back to static or
  instant states.
- The custom crosshair cursor only activates on devices with a fine
  pointer (`hover: hover` + `pointer: fine`); touch devices keep their
  native cursor.

## Deploying to GitHub Pages

The project uses Next.js static export and the pinned workflow in
`.github/workflows/deploy-pages.yml`. Push the source to the `main` branch of
the `lucifer2048.github.io` repository, then select **GitHub Actions** under
**Settings → Pages → Build and deployment**. The workflow installs exactly the
locked dependencies without lifecycle scripts, audits them, builds `out/`, and
deploys that artifact with least-privilege permissions.

In **Settings → Pages**, also enable **Enforce HTTPS**. Keep Dependabot and
repository vulnerability alerts enabled, review its pull requests, protect the
`main` branch, and require the Pages workflow to pass before merging changes.
