export const aboutMission = [
  {
    title: "Creator-first",
    body: "Everything we build starts with the expert’s needs. Your knowledge is the product; Labs is the enabler.",
    icon: "/qiko-static/assets/icons/labs-flash-purple.svg",
  },
  {
    title: "Infra-serious",
    body: "Models, GPUs, security, and performance — we obsess over the stack so you can focus on outcomes.",
    icon: "/qiko-static/assets/icons/labs-setting-purple.svg",
  },
  {
    title: "Long-term partner",
    body: "Not a quick no-code toy. We build lasting AI products and workers with teams that ship.",
    icon: "/qiko-static/assets/icons/dedicated-support.svg",
  },
] as const;

export const aboutPhilosophy = {
  generic: [
    "Hallucinate outside their training data",
    "Don’t understand a specific person’s judgment",
    "Hard to audit or constrain for one domain",
    "Unpredictable latency on shared infrastructure",
  ],
  workers: [
    "Trained on narrowly defined domains for accuracy",
    "Reflect your judgment, tone, and style",
    "Deployed with privacy and governance controls",
    "Predictable latency — optimised for one job",
  ],
} as const;

export const aboutProcess = [
  {
    step: "01",
    title: "Guided brief",
    body: "Tell us about your expertise, who you serve, and how the worker should behave.",
    icon: "/qiko-static/assets/icons/labs-frame-question.svg",
  },
  {
    step: "02",
    title: "Intelligent data intake",
    body: "Upload documents, transcripts, or connect systems. We validate quality and flag gaps.",
    icon: "/qiko-static/assets/icons/labs-element4-purple.svg",
  },
  {
    step: "03",
    title: "Worker configuration",
    body: "We recommend model fit, context, and training approach — without you owning the AI stack.",
    icon: "/qiko-static/assets/icons/labs-setting3-purple.svg",
  },
  {
    step: "04",
    title: "Live testing",
    body: "Chat with the worker as it improves. Review quality and iterate with Labs.",
    icon: "/qiko-static/assets/icons/labs-search-status.svg",
  },
  {
    step: "05",
    title: "Launch & operate",
    body: "Ship behind secure APIs and a hosted interface, with monitoring as you scale.",
    icon: "/qiko-static/assets/icons/labs-initiate.svg",
  },
] as const;

export const aboutTeamTags = [
  "Enterprise AI",
  "Infrastructure",
  "SaaS products",
  "Security",
  "Production ML",
] as const;

export const enterpriseServices = [
  {
    title: "Custom digital workers",
    body: "Workers trained on your proprietary data — with control over architecture, training, and deployment.",
    icon: "/qiko-static/assets/icons/labs-worker-purple.svg",
  },
  {
    title: "On-prem & hybrid",
    body: "Deploy on your infrastructure, cloud, or hybrid for sovereignty and compliance.",
    icon: "/qiko-static/assets/icons/secure-compliant.svg",
  },
  {
    title: "Scalable deployment",
    body: "From proof-of-concept to production with high availability and reliable scaling.",
    icon: "/qiko-static/assets/icons/status-up.svg",
  },
  {
    title: "Expert support",
    body: "Dedicated account support from Labs specialists through implementation and beyond.",
    icon: "/qiko-static/assets/icons/dedicated-support.svg",
  },
] as const;

export const pricingCompare = {
  traditional: [
    "Developer time to design, integrate and test — thousands upfront.",
    "Infrastructure setup (cloud, security, pipelines) plus ongoing maintenance.",
    "Model hosting and GPUs — hundreds per month depending on traffic.",
    "Monitoring, logging and scaling — continuous engineering time.",
  ],
  qiko: [
    "No engineering team to hire or manage for the AI stack.",
    "Infrastructure, GPUs and monitoring included.",
    "Spin up a production-ready worker in days, not months.",
    "Start from a simple monthly price; advanced plans as you scale.",
  ],
} as const;

export const pricingReassurance = [
  {
    title: "Cancel anytime",
    body: "No long-term contracts or hidden fees.",
  },
  {
    title: "Founder-friendly",
    body: "Early builders get rates that scale with value.",
  },
  {
    title: "Pay for value",
    body: "You pay more when workers are delivering outcomes.",
  },
] as const;

export const pricingFeatures = [
  { feature: "Digital workers", premium: "3", enterprise: "Custom / scalable" },
  { feature: "Chats", premium: "Unlimited", enterprise: "Unlimited" },
  { feature: "Training rules", premium: "Unlimited", enterprise: "Unlimited" },
  { feature: "Knowledge auto-learning", premium: "Yes", enterprise: "Yes" },
  { feature: "Custom knowledge training", premium: "Yes", enterprise: "Yes" },
  { feature: "Website chat embed", premium: "Yes", enterprise: "Yes" },
  { feature: "Voice enablement", premium: "Yes", enterprise: "Yes" },
  { feature: "Calendly integration", premium: "Yes", enterprise: "Yes" },
  { feature: "Custom model build (IP owned)", premium: "—", enterprise: "Yes" },
  { feature: "Data tagging & AI pipeline", premium: "—", enterprise: "Yes" },
  { feature: "On-prem deployment", premium: "—", enterprise: "Yes" },
  { feature: "Full model export", premium: "—", enterprise: "Yes" },
  { feature: "Dedicated account manager", premium: "—", enterprise: "Yes" },
] as const;
