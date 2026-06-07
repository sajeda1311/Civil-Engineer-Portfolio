import { ScrollReveal } from "@/components/ScrollReveal";
import { GraduationCap } from "lucide-react";

const degrees = [
  {
    degree: "MASc",
    field: "Safety & Risk Engineering",
    institution: "Memorial University of Newfoundland",
    period: "2023 – 2025",
    focus: [
      "Reliability analysis",
      "Quantitative Risk Assessment",
      "System safety",
      "Safety Instrumented Systems",
      "NBCC/CSA codes",
    ],
  },
  {
    degree: "B.Eng.",
    field: "Civil Engineering",
    institution: "Gujarat Technological University",
    period: "2014 – 2017",
    note: "WES Verified",
    focus: [
      "Structural systems",
      "Construction management",
      "Geotechnical engineering",
      "Transportation engineering",
    ],
  },
  {
    degree: "Diploma",
    field: "Civil Engineering Technology",
    institution: "Gujarat Technological University",
    period: "2011 – 2014",
    focus: [
      "Surveying",
      "Construction materials",
      "Structural drafting",
      "Site engineering",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="section-padding bg-background relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Academic Foundation
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Education
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {degrees.map((deg) => (
            <ScrollReveal key={deg.degree}>
              <div className="glass rounded-sm p-6 h-full hover:border-primary/40 transition-all group">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xl font-bold text-primary">
                    {deg.degree}
                  </span>
                  {deg.note && (
                    <span className="font-mono text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-sm border border-primary/20">
                      {deg.note}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-foreground mb-1">
                  {deg.field}
                </p>
                <p className="text-sm text-muted-foreground mb-1">
                  {deg.institution}
                </p>
                <p className="font-mono text-xs text-muted-foreground mb-4">
                  {deg.period}
                </p>
                <div className="border-t border-border/50 pt-3">
                  <p className="font-mono text-[10px] text-primary uppercase tracking-wider mb-2">
                    Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {deg.focus.map((f) => (
                      <span
                        key={f}
                        className="font-mono text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-sm"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
