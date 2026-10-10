export interface Project {
  name: string;
  url: string;
  description: string;
  language: 'Rust' | 'TypeScript' | 'C#';
  tags?: string[];
}

export const GITHUB_URL = 'https://github.com/Lucy-dot-dot';

/**
 * The flagship project gets its own detailed card on the projects page.
 */
export const featuredProject = {
  name: 'ssh-honeypot',
  url: 'https://github.com/Lucy-dot-dot/ssh-honeypot',
  tagline: 'A high-interaction SSH honeypot in Rust that pretends to be an Ubuntu server',
  description:
    'Attackers get a believable shell — fake filesystem, fake processes, simulated ls, cat, ps, free and friends, ' +
    'pipes and redirects included — while every keystroke, credential and SFTP upload lands in PostgreSQL. ' +
    'No attacker command is ever executed: all shell output is fabricated, so the honeypot can never be turned ' +
    'against the host it runs on.',
  highlights: [
    'Fully fabricated shell sessions — nothing an attacker types is ever run for real',
    'Captures auth attempts, commands, sessions and SFTP uploads into PostgreSQL',
    'Built-in live desktop dashboard (egui) plus CLI/GUI report generators',
    'Automatic AbuseIPDB abuse-confidence scores, Tor-exit detection and IPAPI geolocation',
    'Malware-aware file capture: magic-byte MIME detection, Shannon-entropy scoring, hashing',
    'Post-quantum key exchange (mlkem768x25519-sha256) alongside the usual curve25519 suites',
    'Ships as a hardened Docker image: FROM scratch, USER 1000, cap_drop ALL, no-new-privileges',
  ],
  tags: ['Rust', 'SSH', 'PostgreSQL', 'egui', 'Docker', 'AbuseIPDB', 'Threat Intel'],
};

/**
 * Everything else shown in the project grid.
 */
export const projects: Project[] = [
  {
    name: 'egui-ssh-config-editor',
    url: 'https://github.com/Lucy-dot-dot/egui-ssh-config-editor',
    description:
      'A small desktop GUI for editing your ~/.ssh/config — no more hand-editing Host blocks at 2 a.m.',
    language: 'Rust',
    tags: ['egui', 'ssh'],
  },
  {
    name: 'egui-csr-generator',
    url: 'https://github.com/Lucy-dot-dot/egui-csr-generator',
    description:
      'Creates a CSR, a private key and a matching OpenSSL config for you, via a simple GUI on top of openssl.',
    language: 'Rust',
    tags: ['egui', 'openssl'],
  },
  {
    name: 'dsgvo-downloader-rs',
    url: 'https://github.com/Lucy-dot-dot/dsgvo-downloader-rs',
    description:
      'Downloads GDPR/DSGVO breach incident reports from dsgvo-portal.de and stores them in PostgreSQL for analysis.',
    language: 'Rust',
    tags: ['postgres', 'dsgvo'],
  },
  {
    name: '2048-clone-ai',
    url: 'https://github.com/Lucy-dot-dot/2048-clone-ai',
    description: 'A 2048 clone in TypeScript that plays itself — watch the AI stack tiles better than you do.',
    language: 'TypeScript',
  },
  {
    name: 'invite-tracker',
    url: 'https://github.com/Lucy-dot-dot/invite-tracker',
    description: 'Discord bot that tracks who invited whom, and how those invites are actually used.',
    language: 'Rust',
  },
  {
    name: 'metadata_scrub',
    url: 'https://github.com/Lucy-dot-dot/metadata_scrub',
    description: 'Scrubs EXIF and other metadata off supported files before you share them.',
    language: 'Rust',
  },
  {
    name: 'subnet-calc',
    url: 'https://github.com/Lucy-dot-dot/subnet-calc',
    description: 'A no-nonsense subnet calculator for the terminal.',
    language: 'Rust',
  },
  {
    name: 'collatz-weyl',
    url: 'https://github.com/Lucy-dot-dot/collatz-weyl',
    description: 'A straightforward implementation of the Collatz-Weyl PRNG, straight from the paper.',
    language: 'Rust',
  },
  {
    name: 'json-to-md',
    url: 'https://github.com/Lucy-dot-dot/json-to-md',
    description: 'Converts OpenWebUI chat exports to clean Markdown.',
    language: 'Rust',
  },
  {
    name: 'discord-ocr',
    url: 'https://github.com/Lucy-dot-dot/discord-ocr',
    description: 'Discord bot that runs OCR on images posted in a channel.',
    language: 'Rust',
  },
];
