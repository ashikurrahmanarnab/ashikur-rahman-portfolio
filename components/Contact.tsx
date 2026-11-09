const channels = [
  {
    label: "Email",
    value: "ashikur.rahman.arnab@gmail.com",
    href: "mailto:ashikur.rahman.arnab@gmail.com",
  },
  {
    label: "Phone",
    value: "+880 1756-846015",
    href: "tel:+8801756846015",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/md-ashikur-rahman-11bb903a3",
    href: "https://www.linkedin.com/in/md-ashikur-rahman-11bb903a3/",
  },
  {
    label: "Location",
    value: "Uttara, Dhaka, Bangladesh",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
          <div>
            <h2 className="font-display text-3xl text-ink dark:text-night-text">
              Get in touch
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60 dark:text-night-text/60">
              Available for support, client-relations, or front-of-house
              roles. I reply quickly — it's sort of the job.
            </p>
          </div>

          <dl className="grid max-w-prose gap-6 border-t border-line pt-8 sm:grid-cols-2 dark:border-line-dark">
            {channels.map((channel) => (
              <div key={channel.label}>
                <dt className="text-sm text-ink/50 dark:text-night-text/50">
                  {channel.label}
                </dt>
                <dd className="mt-1">
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-base text-ink underline decoration-line underline-offset-4 transition-colors hover:text-honey hover:decoration-honey dark:text-night-text dark:hover:text-honey-light dark:hover:decoration-honey-light"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <span className="text-base text-ink dark:text-night-text">
                      {channel.value}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
