import { ScrollReveal } from "@/components/ScrollReveal";
import { Shield, Award } from "lucide-react";

const codeGroups = [
  {
    region: "Canadian",
    codes: ["NBCC 2020", "CSA A23.3", "CSA S16", "CSA S6", "Provincial Building Codes"],
  },
  {
    region: "Indian (Cross-Referenced)",
    codes: ["IS 456", "IS 875", "IS 1893", "NBC India 2016"],
  },
  {
    region: "International",
    codes: ["ASTM", "ISO", "NFPA", "OSHA", "WHMIS", "PCI", "CPCI"],
  },
];

const certifications = [
  "Basic First Aid / CPR C / AED — St. John Ambulance",
  "Confined Space Awareness — Canada Safety Training Centre",
  "Fall Arrest Protection",
  "WHMIS Certification",
  "Asbestos Awareness",
  "Respiratory Training",
  "WES Verified Academic Credentials",
  "P.Eng. Licensure — Application via PEGNL (AIP58273)",
];

export function CodesStandards() {
  return (
    <section id="codes" className="section-padding bg-muted/30 relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Regulatory Fluency
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Codes, Standards & Certifications
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {codeGroups.map((group) => (
            <ScrollReveal key={group.region}>
              <div className="glass rounded-sm p-6 hover:border-primary/40 transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-4 w-4 text-primary" />
                  <h3 className="font-mono text-sm font-semibold text-foreground uppercase tracking-wider">
                    {group.region}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.codes.map((code) => (
                    <span
                      key={code}
                      className="font-mono text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-sm border border-primary/20"
                    >
                      {code}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="glow-line mb-12" />

        <ScrollReveal>
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Certifications
          </h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {certifications.map((cert) => (
            <ScrollReveal key={cert}>
              <div className="glass rounded-sm p-4 hover:border-primary/40 transition-all">
                <p className="text-sm text-foreground/80">{cert}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
