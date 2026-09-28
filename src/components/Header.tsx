import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header({ initials }: { initials: string }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  // The inline script in Layout.astro already set the class; read it back so
  // the icon matches what is actually on screen.
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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-slate-50/85 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/85">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-serif text-xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          {initials}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-600 transition-colors hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-200 md:hidden dark:text-slate-400 dark:hover:bg-slate-800"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-slate-50 px-6 py-3 md:hidden dark:border-slate-800 dark:bg-slate-900">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-slate-600 dark:text-slate-400"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
