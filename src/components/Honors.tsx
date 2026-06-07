import { ScrollReveal } from "@/components/ScrollReveal";
import { Award } from "lucide-react";

const honors = [
  {
    title: "Best Safety Advisor",
    issuer: "Crystal Construction",
    date: "Mar 2023",
    summary:
      "Recognized for outstanding leadership in risk management, regulatory compliance, and workforce safety training across active construction sites.",
    bullets: [
      "Proactive Risk Management — 50+ risk assessments, FMEA/HAZOP studies, and site audits identifying hazards early.",
      "Regulatory Excellence — full compliance with WHMIS, OSHA, NFPA, ISO 45001, and local codes.",
      "Emergency Preparedness — developed site-specific ERPs (fire drills, confined-space, evacuation) improving response times by 40%.",
      "Training & Mentorship — led workshops and toolbox talks for 125+ workers, embedding a strong safety culture.",
      "Process Improvements — workflow and hazard controls reducing high-risk activity exposure by 30%.",
    ],
  },
  {
    title: "Best Employee of the Year — 2020",
    issuer: "Crystal Construction",
    date: "Dec 2020",
    summary:
      "Recognized for exceptional performance, consistent project delivery, sharp technical skills, and mentorship of junior engineers.",
    bullets: [
      "Consistent Excellence — delivered projects with outstanding quality and full code/client compliance.",
      "Mentorship & Team Development — coached junior engineers, fostering accountability and technical learning.",
      "Continuous Growth — applied new design, risk-assessment, and safety-systems skills directly to project outcomes.",
      "Sharp Technical & Managerial Skills — resolved high-stakes design/site conflicts and balanced cost, schedule, and safety priorities.",
    ],
  },
];

export function Honors() {
  return (
    <section id="honors" className="section-padding bg-muted/30 relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Recognition
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Honors & Awards
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {honors.map((h) => (
            <ScrollReveal key={h.title}>
              <article className="glass rounded-sm p-6 h-full hover:border-primary/40 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-mono text-[11px] text-primary/80 uppercase tracking-wider">
                    {h.date}
                  </span>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">
                  {h.title}
                </h3>
                <p className="font-mono text-[11px] text-primary/80 mb-3">
                  Issued by {h.issuer}
                </p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {h.summary}
                </p>
                <ul className="space-y-2 border-t border-border/50 pt-4">
                  {h.bullets.map((b, i) => (
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
