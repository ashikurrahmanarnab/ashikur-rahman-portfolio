export default function Hero() {
  return (
    <section id="top" className="border-b border-line dark:border-line-dark">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="hero-rise font-body text-sm text-sage dark:text-sage-light">
            Customer Support &amp; Client Relations
          </p>
          <h1 className="hero-rise hero-rise-delay-1 mt-5 max-w-xl font-display text-4xl leading-[1.1] text-ink sm:text-5xl dark:text-night-text">
            Calm in the conversations other people dread.
          </h1>
          <p className="hero-rise hero-rise-delay-2 mt-6 max-w-prose text-lg leading-relaxed text-ink/75 dark:text-night-text/75">
            I handle customer concerns, pricing disputes, and day-to-day
            support — face to face and over chat — for a small business I run
            myself while studying full-time at North South University.
            Diplomacy is the job; staying accurate under pressure is what
            makes it work.
          </p>
          <div className="hero-rise hero-rise-delay-3 mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-sage dark:bg-honey-light dark:text-ink-dark dark:hover:bg-honey"
            >
              Read how I handled a dispute
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-honey hover:text-honey dark:border-line-dark dark:text-night-text dark:hover:border-honey-light dark:hover:text-honey-light"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* A quiet nod to the medium he actually works in: chat support */}
        <div className="hero-rise hero-rise-delay-2 flex flex-col gap-3 self-center">
          <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-line bg-white/60 px-5 py-3 text-sm text-ink/80 shadow-sm dark:border-line-dark dark:bg-white/5 dark:text-night-text/80">
            The price seems higher than what we discussed before.
          </div>
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-ink px-5 py-3 text-sm text-paper shadow-sm dark:bg-honey-light dark:text-ink-dark">
            You're right to flag that — here's exactly what changed and why,
            and what I can do about it.
          </div>
          <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-line bg-white/60 px-5 py-3 text-sm text-ink/80 shadow-sm dark:border-line-dark dark:bg-white/5 dark:text-night-text/80">
            Okay, that makes sense. Thanks for walking me through it.
          </div>
        </div>
      </div>
    </section>
  );
}
