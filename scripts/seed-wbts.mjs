import { getPayload } from 'payload'
import config from '../payload.config.ts'

const wbtsData = {
  title: 'wbts — what broke the server?',
  slug: 'wbts',
  description:
    'Forensic incident timeline builder for Linux/Docker systems. Correlates logs from journald, dmesg, Docker events, Kubernetes, apt, and auth into a single chronological timeline with an interactive TUI. Single static binary — run it after any incident to reconstruct what happened without manually cross-referencing six different log sources.',
  status: 'active',
  featured: true,
  githubUrl: 'https://github.com/bruceowenga/wbts',
  technologies: [
    { tech: 'Go' },
    { tech: 'bubbletea' },
    { tech: 'lipgloss' },
    { tech: 'journald' },
    { tech: 'Docker' },
    { tech: 'Kubernetes' },
  ],
  highlights: [
    { metric: 'Log Sources', value: '9' },
    { metric: 'Binary Size', value: '<10MB' },
    { metric: 'Dependencies', value: '3' },
    { metric: 'Install', value: '1 command' },
  ],
  caseStudy: `## The Problem

After a server incident, reconstructing what happened means manually cross-referencing journalctl, dmesg, Docker logs, auth.log, and package manager history — a process that takes 20–40 minutes and requires expertise across multiple tools with different timestamp formats, log locations, and query syntax.

## The Solution

wbts (what broke the server?) correlates all major Linux/Docker log sources into a single chronological incident timeline. It detects incident windows (clusters of ≥3 errors/crits in a 60-second window), identifies the likely first fault with a heuristic marker, and presents everything in an interactive TUI or plain-text/JSON output for scripting.

## Architecture

- Each log source is a Collector — a small Go interface with three methods: Name, Available, and Collect
- Collectors run concurrently in goroutines, streaming events over typed channels
- A timeline builder merges channels, sorts by timestamp, and collapses quiet periods (>5min gaps with no warnings or errors) into summary lines
- The interactive TUI (bubbletea + lipgloss) provides a scrollable timeline with keyboard navigation, level filtering, and raw log expansion

## Key Technical Challenges

- Timestamp normalization: each source uses a different format — ISO8601 (journald), boot-relative seconds (dmesg), month/day without year (auth.log/syslog)
- Embedded log level detection: many services route everything to journald at INFO priority but embed their own severity in the message body; wbts detects and elevates these (Logrus, Zap, cloudflared, klog, Gin)
- Permission model: non-root operation via group membership (systemd-journal, adm, docker); wbts collects from whatever it can reach and surfaces missing permissions via check-perms

## Collectors

- journald — service starts/stops/crashes via journalctl JSON output
- dmesg — OOM kills, kernel panics, I/O errors from kernel ring buffer
- Docker events — container die/OOM/restart via Docker socket API (no SDK — 3 HTTP calls over a Unix socket)
- Kubernetes — OOMKilling, CrashLoopBackOff, NodeNotReady via kubectl events
- apt/dnf — package installs, upgrades, removals from rotated log files
- auth — failed logins, SSH sessions, sudo commands
- rasdaemon — hardware ECC memory errors, CPU MCA events
- ipmi — PSU failures, thermal threshold crossings, fan failures from BMC SEL`,
}

async function seedWbts() {
  try {
    console.log('POSTGRES_URL:', process.env.POSTGRES_URL ? 'Set' : 'Not set')
    console.log('PAYLOAD_SECRET:', process.env.PAYLOAD_SECRET ? 'Set' : 'Not set')

    const resolvedConfig = await config
    const payload = await getPayload({ config })

    const existing = await payload.find({
      collection: 'projects',
      where: { slug: { equals: 'wbts' } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      console.log('wbts project already exists — updating...')
      await payload.update({
        collection: 'projects',
        id: existing.docs[0].id,
        data: wbtsData,
      })
      console.log('Updated wbts project.')
    } else {
      await payload.create({
        collection: 'projects',
        data: wbtsData,
      })
      console.log('Created wbts project successfully.')
    }

    process.exit(0)
  } catch (error) {
    console.error('Error seeding wbts:', error.message)
    process.exit(1)
  }
}

seedWbts()
