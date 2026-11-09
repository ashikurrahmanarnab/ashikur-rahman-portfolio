export default function About() {
  return (
    <section id="about" className="border-b border-line dark:border-line-dark">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <h2 className="font-display text-3xl text-ink dark:text-night-text">
          About
        </h2>
        <div className="max-w-prose space-y-5 text-base leading-relaxed text-ink/80 dark:text-night-text/80">
          <p>
            I'm currently in my fifth semester of a BBA. at North South
            University, and for the past four months I've also been running my
            own small business in Dhaka — which means I'm the person
            customers talk to when something's unclear, wrong, or just needs
            explaining again, more patiently, in a second language.
          </p>
          <p>
            Most of that happens over Messenger chat and in person: walking
            someone through pricing, catching a misunderstanding before it
            becomes a complaint, or just staying level when a conversation
            starts tense. I communicate confidently in both English (IELTS-
            trained) and Bangla (native), and I'm comfortable switching
            between the two mid-conversation.
          </p>
          <p>
            Outside of work, I picked up competitive swimming and, after two
            months of training, raced — and beat — a national-level swimmer.
            I mention it here not for the medal, but because it's the
            clearest example I have of how I learn things fast under
            pressure.
          </p>
        </div>
      </div>
    </section>
  );
}
