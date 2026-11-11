export type CaseStudy = {
  client: string;
  sector: string;
  eyebrow: string;
  title: string;
  summary: string;
  results: readonly { value: string; label: string }[];
  tags: readonly string[];
  accent: "purple" | "teal" | "blue";
};

/** First-draft client case studies for home + enterprise. */
export const caseStudies: readonly CaseStudy[] = [
  {
    client: "Joseph Mews",
    sector: "Hospitality · portfolio ops",
    eyebrow: "Case study",
    title: "From portfolio prototype to store-ready workers in weeks.",
    summary:
      "Labs mobilised an agent squad around Joseph Mews’ brief, tested with real operators, and hardened the build until it was ready to embed — not another demo that died in procurement.",
    results: [
      { value: "5 days", label: "First working build" },
      { value: "10", label: "Customers in the loop" },
      { value: "7 weeks", label: "Store-ready path" },
    ],
    tags: ["Custom workers", "Live validation", "Embed"],
    accent: "purple",
  },
  {
    client: "Alex",
    sector: "Travel · niche expertise",
    eyebrow: "Creator story",
    title: "French villa expertise packaged as a 24/7 digital worker.",
    summary:
      "A decade of villa curation became a revenue-ready assistant: plain-English brief, uploaded notes and preferences, Labs handled models and infra so Alex could license the knowledge.",
    results: [
      { value: "1 day", label: "Time to first worker" },
      { value: "Sub-sec", label: "Response time" },
      { value: "Per agency", label: "Revenue model" },
    ],
    tags: ["Digital twin", "RAG", "Monetisation"],
    accent: "teal",
  },
  {
    client: "B2B ops team",
    sector: "CRM · revenue operations",
    eyebrow: "Pulse draft",
    title: "Pulse on CRM — insights the team could act on the same week.",
    summary:
      "First draft of a Pulse engagement: surface coverage gaps and next actions from trusted CRM records, then scope a custom worker where the product alone was not enough.",
    results: [
      { value: "Same week", label: "First insights live" },
      { value: "CRM-native", label: "No parallel stack" },
      { value: "Scoped", label: "Follow-on worker" },
    ],
    tags: ["Pulse", "CRM", "Actions"],
    accent: "blue",
  },
] as const;

export const enterpriseProofPoints = [
  {
    value: "Custom IP",
    label: "Model ownership options for enterprise builds",
  },
  {
    value: "Private deploy",
    label: "On-prem, VPC, or hybrid when compliance requires it",
  },
  {
    value: "Named support",
    label: "Dedicated Labs specialists through go-live",
  },
] as const;
