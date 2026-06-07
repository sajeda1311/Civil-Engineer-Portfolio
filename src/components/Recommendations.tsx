import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const recommendations = [
  {
    name: "Dr. Abbas Mamudu, Ph.D., P.Eng.",
    designation:
      "Asst. Professor · Process Safety Expert · Asset Integrity & Reliability Engineer — Memorial University of Newfoundland",
    meta: "Mentor · Sep 1, 2025",
    text: "I had the distinct privilege of instructing Shahid Patel in several foundational courses, including Safety and Risk Engineering, and subsequently overseeing his capstone project at Memorial University. Throughout both academic coursework and project supervision, Shahid consistently exhibited exceptional technical expertise, analytical rigor, and professional maturity.\n\nHe demonstrated a strong command of advanced safety and risk engineering methodologies — quantitative risk assessment, fault tree analysis, and event tree modeling — adeptly bridging theoretical concepts with practical, real-world engineering challenges. His work was marked by meticulous attention to detail, robust problem-solving abilities, and a remarkable work ethic, placing him among the top performers I have encountered in my teaching career.\n\nBeyond his academic accomplishments, Shahid distinguished himself as a natural leader and collaborative team member. During the capstone project, he led his team with clarity and professionalism, communicating complex technical insights to both technical and non-technical audiences with ease.\n\nI confidently recommend Shahid for any role or opportunity that demands strong analytical skills, technical proficiency, and leadership capabilities. He is certain to be a valuable asset to any organization.",
  },
  {
    name: "Dr. Syed Imtiaz",
    designation: "Associate Professor, Process Engineering — Memorial University",
    meta: "",
    text: "Shahid demonstrates strong analytical rigor in safety and risk engineering. His work on quantitative risk assessment reflects systematic thinking and attention to regulatory frameworks.",
  },
];

export function Recommendations() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? recommendations.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === recommendations.length - 1 ? 0 : c + 1));

  const rec = recommendations[current];

  return (
    <section className="section-padding bg-muted/30 relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              References
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Professional Recommendations
          </h2>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-sm p-8 md:p-10 relative">
            <Quote className="h-10 w-10 text-primary/20 absolute top-6 left-6" />
            <div className="pt-8">
              <div className="text-foreground/80 leading-relaxed mb-6 italic space-y-3 max-h-[420px] overflow-y-auto pr-2">
                {rec.text.split("\n\n").map((para, i) => (
                  <p key={i}>&ldquo;{para}&rdquo;</p>
                ))}
              </div>
              <div className="border-t border-border/50 pt-4">
                <p className="font-bold text-foreground">{rec.name}</p>
                <p className="text-sm text-muted-foreground font-mono">
                  {rec.designation}
                </p>
                {rec.meta && (
                  <p className="text-xs text-primary/70 font-mono mt-1">
                    {rec.meta}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-sm border-border hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="font-mono text-sm text-muted-foreground">
              {current + 1} / {recommendations.length}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-sm border-border hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
