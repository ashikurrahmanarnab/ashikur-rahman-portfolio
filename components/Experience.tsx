const responsibilities = [
  "Handle customer inquiries and purchase-related problems, both face to face and over Messenger chat.",
  "Explain pricing, offers, and service details clearly enough that they don't need explaining twice.",
  "Balance customer needs against business constraints, rather than just telling people what they want to hear.",
  "Manage support alongside the rest of running the business — inventory, logistics, follow-ups — often in the same hour.",
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line dark:border-line-dark">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
          <h2 className="font-display text-3xl text-ink dark:text-night-text">
            Experience
          </h2>

          <div className="max-w-prose">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line pb-4 dark:border-line-dark">
              <h3 className="font-display text-xl text-ink dark:text-night-text">
                Founder &amp; Business Owner
              </h3>
              <span className="text-sm text-ink/50 dark:text-night-text/50">
                4 months · Dhaka, Bangladesh
              </span>
            </div>
            <ul className="mt-6 space-y-4">
              {responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base leading-relaxed text-ink/80 dark:text-night-text/80"
                >
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-honey dark:bg-honey-light"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
