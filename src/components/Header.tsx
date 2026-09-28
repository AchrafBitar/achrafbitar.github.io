import { useEffect, useState } from 'react';

const links = [
  { href: '#profile', n: '01', label: 'Profile' },
  { href: '#work', n: '02', label: 'Work' },
  { href: '#projects', n: '03', label: 'Projects' },
  { href: '#stack', n: '04', label: 'Stack' },
  { href: '#education', n: '05', label: 'Education' },
  { href: '#contact', n: '06', label: 'Contact' },
];

export default function Header({ initials }: { initials: string }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  // Layout.astro already applied the class before paint; read it back so the
  // label matches what is actually on screen.
  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      /* storage blocked: the theme still applies for this page view */
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-sm dark:border-rule-dark dark:bg-night/90">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:px-10">
        <a href="#top" className="display text-lg font-medium tracking-tight">
          {initials}
          <span className="text-accent dark:text-accent-dark">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="meta group text-ink-2 dark:text-bone-2">
              <span className="text-accent dark:text-accent-dark">{l.n}</span>{' '}
              <span className="group-hover:text-ink dark:group-hover:text-bone">{l.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="meta text-ink-2 hover:text-ink dark:text-bone-2 dark:hover:text-bone"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="meta text-ink-2 hover:text-ink md:hidden dark:text-bone-2 dark:hover:text-bone"
          >
            {open ? 'Close' : 'Index'}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-rule bg-paper px-6 py-2 md:hidden dark:border-rule-dark dark:bg-night">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="meta flex gap-3 border-b border-rule/60 py-3 last:border-0 dark:border-rule-dark/60"
            >
              <span className="text-accent dark:text-accent-dark">{l.n}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
