import { ScrollReveal } from "@/components/ScrollReveal";
import { BookOpen } from "lucide-react";

const reviews = [
  {
    title:
      "Monte Carlo Analysis: An Application to Aircraft Design and Crash",
    venue: "Memorial University of Newfoundland · Apr 30, 2024",
    source: "Soydemir, E.; Petratos, P. (2021), Aerospace (MDPI)",
    bullets: [
      "Evaluated 5,000 Monte Carlo simulations estimating crash frequencies and casualty ranges via random sampling and dispersion measures.",
      "Assessed normal-distribution sampling, mean/variance analysis, and outlier detection for reliable safety forecasts on new aircraft designs.",
      "Reflected on Monte Carlo's predictive value during early-stage design when safety data is limited.",
      "Identified weaknesses in dataset availability while reinforcing simulation-based approaches for high-uncertainty engineering domains.",
    ],
  },
  {
    title:
      "Quantitative Risk Evaluation by Building Type Based on Probability and Cost of Accidents",
    venue: "Memorial University of Newfoundland · Dec 25, 2023",
    source: "Soh, J.; Jeong, J.; Lee, J. (2023), Buildings (MDPI)",
    bullets: [
      "Assessed integration of Bayesian probability, accident cost modelling, normalization ranking, and K-means clustering for construction risk evaluation.",
      "Highlighted the shift from qualitative, subjective safety assessment to quantitative, data-driven risk management.",
      "Discussed applications for owners, contractors, and regulators across pre-construction and construction phases.",
      "Identified limitations between fatal and non-fatal risk handling and proposed facility-level model improvements.",
    ],
  },
];

export function Publications() {
  return (
    <section id="publications" className="section-padding bg-background relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Publications
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Journal Article Reviews
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <ScrollReveal key={r.title}>
              <article className="glass rounded-sm p-6 h-full hover:border-primary/40 transition-all group">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 leading-snug">
                  {r.title}
                </h3>
                <p className="font-mono text-[11px] text-primary/80 mb-1">
                  {r.venue}
                </p>
                <p className="font-mono text-[11px] text-muted-foreground mb-4">
                  Source: {r.source}
                </p>
                <ul className="space-y-2">
                  {r.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5 text-[6px]">◆</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
