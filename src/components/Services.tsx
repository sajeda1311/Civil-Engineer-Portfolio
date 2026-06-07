import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Ruler,
  ShieldAlert,
  ClipboardCheck,
  HardHat,
  FileText,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Structural & Constructability Review",
    problem: "Designs that miss buildability constraints lead to costly rework.",
    value: "Independent review of structural drawings, specifications, and construction sequences to flag coordination gaps before they reach site.",
    deliverables: "Review report, markup set, risk register",
  },
  {
    icon: ShieldAlert,
    title: "Safety & Risk Assessment",
    problem: "Unidentified process or structural hazards create liability and regulatory exposure.",
    value: "Systematic FMEA, HAZOP, and QRA to quantify risks, define barriers, and establish mitigation hierarchies aligned with regulatory expectations.",
    deliverables: "Risk matrix, BowTie diagrams, ALARP justification",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Audits & Compliance Review",
    problem: "Non-conformances discovered late delay commissioning and erode stakeholder trust.",
    value: "Structured QA/QC audits against project specifications, codes, and ISO frameworks — with traceable non-conformance tracking.",
    deliverables: "Audit report, NCR log, corrective action plan",
  },
  {
    icon: HardHat,
    title: "Construction Technical Support",
    problem: "Field teams need responsive engineering support for RFIs, change orders, and method statements.",
    value: "On-call or embedded technical support during construction — bridging design intent and field execution.",
    deliverables: "RFI responses, method statements, site directives",
  },
  {
    icon: FileText,
    title: "Engineering Documentation & Review",
    problem: "Incomplete or inconsistent documentation creates audit failures and knowledge loss.",
    value: "Preparation and review of engineering submittals, calculations, specifications, and as-built documentation packages.",
    deliverables: "Calculation sets, specification reviews, document registers",
  },
  {
    icon: Settings,
    title: "Asset Reliability & Lifecycle Support",
    problem: "Aging assets without reliability frameworks face unplanned failures and escalating costs.",
    value: "Reliability-centered maintenance planning, failure analysis, and lifecycle cost modeling for infrastructure and industrial assets.",
    deliverables: "RCM plan, failure analysis report, lifecycle cost model",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-background relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Consulting
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Engineering Services
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <ScrollReveal key={svc.title}>
              <div className="glass rounded-sm p-6 h-full flex flex-col hover:border-primary/40 transition-all group">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svc.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-3">
                  {svc.title}
                </h3>
                <p className="text-sm text-primary/80 font-medium mb-2">
                  {svc.problem}
                </p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                  {svc.value}
                </p>
                <div className="border-t border-border/50 pt-3">
                  <p className="font-mono text-xs text-muted-foreground">
                    <span className="text-primary">Deliverables:</span>{" "}
                    {svc.deliverables}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
