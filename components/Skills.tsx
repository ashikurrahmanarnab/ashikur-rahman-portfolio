const skillGroups = [
  {
    title: "Working with people",
    items: [
      "Customer communication",
      "Diplomacy & neutrality",
      "Problem resolution",
      "Chat & social media support",
    ],
  },
  {
    title: "Working with the details",
    items: [
      "Attention to detail",
      "Time management & prioritization",
      "Multitasking",
      "Adaptability",
    ],
  },
];

const education = [
  {
    title: "B.Sc., North South University",
    detail: "In progress — currently in 5th semester",
  },
  {
    title: "Higher Secondary Certificate",
    detail: "Dhaka City College — GPA 5.00",
  },
  {
    title: "Secondary School Certificate",
    detail: "National Ideal School — GPA 5.00",
  },
  {
    title: "IELTS Preparation & English Language Course",
    detail: "Mentors",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line dark:border-line-dark">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
          <h2 className="font-display text-3xl text-ink dark:text-night-text">
            Skills
          </h2>

          <div className="max-w-prose">
            <div className="grid gap-8 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="font-display text-lg text-ink dark:text-night-text">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-ink/75 dark:text-night-text/75"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-line pt-8 dark:border-line-dark">
              <h3 className="font-display text-lg text-ink dark:text-night-text">
                Languages
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75 dark:text-night-text/75">
                English — strong communicator, IELTS-trained · Bangla — native
              </p>
            </div>

            <div className="mt-10 border-t border-line pt-8 dark:border-line-dark">
              <h3 className="font-display text-lg text-ink dark:text-night-text">
                Education
              </h3>
              <ul className="mt-4 space-y-4">
                {education.map((item) => (
                  <li key={item.title} className="text-sm leading-relaxed">
                    <span className="block text-ink/90 dark:text-night-text/90">
                      {item.title}
                    </span>
                    <span className="text-ink/60 dark:text-night-text/60">
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
