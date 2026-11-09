export default function CaseStudy() {
  return (
    <section className="border-b border-line bg-ink dark:border-line-dark dark:bg-night-bg/60">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
          <div>
            <p className="font-body text-sm text-honey-light">Case study</p>
            <h2 className="mt-3 font-display text-3xl text-paper">
              The pricing dispute
            </h2>
          </div>

          <div className="max-w-prose space-y-6">
            <div>
              <h3 className="font-display text-lg text-honey-light">
                Situation
              </h3>
              <p className="mt-2 text-base leading-relaxed text-paper/80">
                A client pushed back on pricing, feeling it didn't match what
                had been discussed earlier. Left unresolved, it risked both
                the relationship and the business's reputation.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-honey-light">
                Approach
              </h3>
              <p className="mt-2 text-base leading-relaxed text-paper/80">
                Rather than defend the price or concede it outright, I walked
                the client through exactly what it covered and why — while
                genuinely hearing out their side instead of just waiting for
                my turn to talk. The goal was protecting the business's
                position without making the customer feel dismissed.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-honey-light">
                Outcome
              </h3>
              <p className="mt-2 text-base leading-relaxed text-paper/80">
                The client stayed, understood the reasoning, and went on to
                become one of the business's most frequent customers at the
                time — a relationship built from a conversation that could
                easily have gone the other way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
