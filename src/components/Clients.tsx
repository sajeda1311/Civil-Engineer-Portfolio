import { ScrollReveal } from "@/components/ScrollReveal";

const clients = [
  "Crystal Construction (Government Licensed)",
  "Memorial University of Newfoundland",
  "PEGNL — Professional Engineers & Geoscientists NL",
  "WES — World Education Services",
];

export function Clients() {
  return (
    <section className="section-padding bg-background relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Collaborations
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Institutional & Industry Partners
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client) => (
            <ScrollReveal key={client}>
              <div className="glass rounded-sm p-6 text-center hover:border-primary/40 transition-all">
                <p className="font-medium text-foreground/70 text-sm">
                  {client}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
