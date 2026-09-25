import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'public', 'assets', 'logos');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const logos = [
  {
    name: 'ids.svg',
    content: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ids" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0055FF" />
          <stop offset="100%" stop-color="#00D1FF" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="25" height="60" rx="4" fill="url(#ids)" />
      <path d="M 55 20 H 70 C 85 20 85 50 70 50 H 55 Z" fill="url(#ids)" />
      <path d="M 55 50 H 70 C 85 50 85 80 70 80 H 55 Z" fill="url(#ids)" />
    </svg>`
  },
  {
    name: 'deep-visions.svg',
    content: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dv" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FF007A" />
          <stop offset="100%" stop-color="#7928CA" />
        </linearGradient>
      </defs>
      <path d="M 10 50 Q 50 10 90 50 Q 50 90 10 50" fill="none" stroke="url(#dv)" stroke-width="8" stroke-linecap="round" />
      <circle cx="50" cy="50" r="15" fill="url(#dv)" />
    </svg>`
  },
  {
    name: 'hyperstar.svg',
    content: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hs" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F5A623" />
          <stop offset="100%" stop-color="#F8E71C" />
        </linearGradient>
      </defs>
      <path d="M 50 10 L 60 40 L 90 50 L 60 60 L 50 90 L 40 60 L 10 50 L 40 40 Z" fill="url(#hs)" />
    </svg>`
  },
  {
    name: 'quantit.svg',
    content: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="qt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#50E3C2" />
          <stop offset="100%" stop-color="#00D1FF" />
        </linearGradient>
      </defs>
      <circle cx="45" cy="45" r="30" fill="none" stroke="url(#qt)" stroke-width="12" />
      <rect x="65" y="65" width="20" height="12" rx="4" transform="rotate(45 65 65)" fill="url(#qt)" />
      <rect x="35" y="30" width="8" height="30" fill="url(#qt)" />
      <rect x="50" y="40" width="8" height="20" fill="url(#qt)" />
    </svg>`
  },
  {
    name: 'fieldro.svg',
    content: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fr" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4A90E2" />
          <stop offset="100%" stop-color="#50E3C2" />
        </linearGradient>
      </defs>
      <path d="M 20 20 H 80 V 40 H 40 V 55 H 70 V 75 H 40 V 90 H 20 Z" fill="url(#fr)" />
      <circle cx="70" cy="85" r="8" fill="url(#fr)" />
    </svg>`
  },
  {
    name: 'avalve.svg',
    content: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="av" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7ED321" />
          <stop offset="100%" stop-color="#417505" />
        </linearGradient>
      </defs>
      <path d="M 50 15 L 85 85 H 65 L 50 55 L 35 85 H 15 Z" fill="url(#av)" />
      <path d="M 50 40 Q 65 20 80 40 Q 65 60 50 40" fill="url(#av)" opacity="0.8" />
    </svg>`
  },
  {
    name: 'cytur.svg',
    content: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#9013FE" />
          <stop offset="100%" stop-color="#BD10E0" />
        </linearGradient>
      </defs>
      <path d="M 50 10 L 90 25 V 55 C 90 75 70 90 50 95 C 30 90 10 75 10 55 V 25 Z" fill="none" stroke="url(#cy)" stroke-width="8" stroke-linejoin="round" />
      <path d="M 35 50 L 45 60 L 65 40" fill="none" stroke="url(#cy)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`
  },
  {
    name: 'addd.svg',
    content: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FF5E3A" />
          <stop offset="100%" stop-color="#FF2A68" />
        </linearGradient>
      </defs>
      <path d="M 30 50 H 70 M 50 30 V 70" stroke="url(#ad)" stroke-width="12" stroke-linecap="round" />
      <circle cx="20" cy="20" r="8" fill="url(#ad)" opacity="0.6"/>
      <circle cx="80" cy="80" r="12" fill="url(#ad)" opacity="0.8"/>
    </svg>`
  },
  {
    name: 'gauss-lab.svg',
    content: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00D1FF" />
          <stop offset="100%" stop-color="#0055FF" />
        </linearGradient>
      </defs>
      <path d="M 85 30 C 70 10 30 10 15 30 C 5 45 5 65 15 80 C 30 95 60 95 70 80 V 50 H 45" fill="none" stroke="url(#gl)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`
  },
  {
    name: 'nextlab.svg',
    content: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#141E30" />
          <stop offset="100%" stop-color="#243B55" />
        </linearGradient>
        <linearGradient id="nl2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00D1FF" />
          <stop offset="100%" stop-color="#4A90E2" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="url(#nl)" />
      <path d="M 25 75 V 25 L 75 75 V 25" fill="none" stroke="url(#nl2)" stroke-width="12" stroke-linejoin="round" />
    </svg>`
  }
];

for (const logo of logos) {
  fs.writeFileSync(path.join(outDir, logo.name), logo.content);
}
console.log('Logos generated successfully!');
