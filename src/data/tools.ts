export interface Tool {
  name: string;
  context: string;
}

export interface ToolCategory {
  category: string;
  tools: Tool[];
}

export const toolCategories: ToolCategory[] = [
  {
    category: "Design & Drafting",
    tools: [
      { name: "AutoCAD", context: "2D/3D drafting & construction drawings" },
      { name: "Revit", context: "BIM modeling & structural coordination" },
      { name: "MicroStation", context: "Infrastructure design documentation" },
    ],
  },
  {
    category: "Structural Analysis",
    tools: [
      { name: "STAAD Pro", context: "Structural analysis & load validation" },
      { name: "SAP2000", context: "Advanced structural modeling" },
      { name: "SAFE", context: "Foundation & slab design" },
      { name: "ETABS", context: "Multi-story building analysis" },
      { name: "Tekla Structures", context: "Steel detailing & fabrication models" },
    ],
  },
  {
    category: "Safety & Risk",
    tools: [
      { name: "BowTieXP", context: "Barrier-based risk visualization" },
      { name: "PHA-Pro", context: "Process hazard analysis" },
      { name: "FMEA Templates", context: "Failure mode & effects analysis" },
      { name: "RCFA Tools", context: "Root cause failure analysis" },
    ],
  },
  {
    category: "Quality & QA/QC",
    tools: [
      { name: "ISO 55000", context: "Asset management frameworks" },
      { name: "NDT Tools", context: "Non-destructive testing methods" },
      { name: "Vibration Analyzers", context: "Equipment condition monitoring" },
    ],
  },
  {
    category: "Construction & Controls",
    tools: [
      { name: "Primavera P6", context: "Project scheduling & controls" },
      { name: "Bluebeam Revu", context: "Document markup & review" },
      { name: "CMMS", context: "Maintenance management systems" },
    ],
  },
  {
    category: "Data & Computation",
    tools: [
      { name: "MATLAB", context: "Engineering computation & modeling" },
      { name: "Advanced Excel", context: "Data analysis & calculations" },
      { name: "GeoStudio", context: "Geotechnical analysis" },
      { name: "PLAXIS", context: "Finite element geotechnical modeling" },
    ],
  },
];
