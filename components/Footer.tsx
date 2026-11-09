export default function Footer() {
  return (
    <footer className="border-t border-line dark:border-line-dark">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-8 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between sm:px-10 dark:text-night-text/50">
        <span>© {new Date().getFullYear()} Md. Ashikur Rahman</span>
        <span>Built with Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
