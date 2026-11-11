import type { FeatureCardItem } from "@/components/shared/FeatureCardsSection";
import type { FaqItem } from "@/components/shared/FaqAccordion";
import type { StepItem } from "@/components/shared/StepsPathSection";
import type { WayCard } from "@/components/shared/TwoWaysSection";

export const seeHowAiCards: FeatureCardItem[] = [
  {
    title: "Mobilise the squad",
    body: "An orchestrator spins up research, prototype, FE/BE, and QA agents to build at AI-native speed.",
    icon: "/qiko-static/assets/icons/labs-worker.svg",
    tint: "blue",
  },
  {
    title: "Test with real customers",
    body: "Labs puts the build in front of a live customer ecosystem — feedback comes back as tickets, not slide decks.",
    icon: "/qiko-static/assets/icons/labs-search-normal.svg",
    tint: "orange",
  },
  {
    title: "Harden and embed",
    body: "Ship a worker you can sell on — then embed it into sales, finance, concierge, or CRM workflows with Pulse.",
    icon: "/qiko-static/assets/icons/secure-compliant.svg",
    tint: "red",
  },
];

/** Labs delivery path (Mobilise → Test → Harden & embed). */
export const labsDeliverySteps: StepItem[] = [
  {
    label: "Step 1",
    status: "Live",
    title: "Mobilise",
    body: "Spin up the agent squad and scope the worker against a real outcome — not a prototype graveyard.",
    icon: "/qiko-static/assets/icons/labs-worker.svg",
  },
  {
    label: "Step 2",
    status: "Available",
    title: "Test",
    body: "Validate with sales and real customers. Feedback becomes tickets that go straight back into the build.",
    icon: "/qiko-static/assets/icons/labs-search-normal.svg",
  },
  {
    label: "Step 3",
    status: "On the horizon",
    title: "Harden & embed",
    body: "Prove it in production, then embed native AI workers into the workflows that need them.",
    icon: "/qiko-static/assets/icons/custom-integration.svg",
  },
];

export const twoWaysCards: WayCard[] = [
  {
    title: "Start with Pulse",
    body: "B2B AI intelligence on your CRM and operations — insights, actions, and value from the records your team already trusts.",
    graphic: "flow-radial",
    ctaLabel: "Book a Pulse demo",
    ctaHref: "/#enquire",
    features: [
      {
        title: "CRM-grounded insights",
        body: "Surface opportunity and risk from context you already own.",
        icon: "/qiko-static/assets/icons/labs-flash-purple.svg",
      },
      {
        title: "Clear next actions",
        body: "Owners see the evidence and the move — not another opaque score.",
        icon: "/qiko-static/assets/icons/act-on-it.svg",
      },
      {
        title: "Path to custom workers",
        body: "When Pulse is not enough, Labs scopes the bespoke build.",
        icon: "/qiko-static/assets/icons/labs-worker-purple.svg",
      },
    ],
  },
  {
    title: "Build with Qiko Labs",
    body: "Custom AI workers and agentic workflows — from orchestrator squad to real customers to embedded production systems.",
    graphic: "labs-reveal",
    variant: "dark",
    ctaLabel: "Talk to Labs",
    ctaHref: "/#enquire",
    outline: false,
    features: [
      {
        title: "Working product in use",
        body: "Not a procurement-dead prototype — shipped and used.",
        icon: "/qiko-static/assets/icons/labs-flash-purple.svg",
      },
      {
        title: "Validated live",
        body: "Tested in a real customer ecosystem with feedback loops.",
        icon: "/qiko-static/assets/icons/labs-search-status.svg",
      },
      {
        title: "Built by a shipping team",
        body: "Hardened with evidence you can sell on.",
        icon: "/qiko-static/assets/icons/ranking.svg",
      },
    ],
  },
];

export const whyWorkerCards: FeatureCardItem[] = [
  {
    title: "Accurate",
    body: "Grounded in your own data, decisions, and judgment — not generic training data.",
    icon: "/qiko-static/assets/icons/cross-examined.svg",
    tint: "blue",
  },
  {
    title: "Low latency",
    body: "Optimised for your specific use case instead of a one-size-fits-all model.",
    icon: "/qiko-static/assets/icons/labs-flash-purple.svg",
    tint: "orange",
  },
  {
    title: "Secure & private",
    body: "Data stays in a dedicated environment, with private or VPC options when you need them.",
    icon: "/qiko-static/assets/icons/data-isolated.svg",
    tint: "purple",
  },
  {
    title: "On-brand",
    body: "Tone, style, and behaviour that match your team or your company — not a generic assistant.",
    icon: "/qiko-static/assets/icons/built-to-extend-purple.svg",
    tint: "red",
  },
];

export const buildWorkerSteps = [
  {
    step: "01",
    title: "Mobilise",
    body: "Describe the outcome. Labs spins up research, prototype, build, and QA agents around your brief.",
    icon: "/qiko-static/assets/icons/labs-worker.svg",
  },
  {
    step: "02",
    title: "Test with customers",
    body: "Put the worker in front of a live ecosystem. Feedback returns as tickets, not opinions.",
    icon: "/qiko-static/assets/icons/labs-search-normal.svg",
  },
  {
    step: "03",
    title: "Harden & prove",
    body: "Iterate from real deployments until the worker is reliable enough to sell on.",
    icon: "/qiko-static/assets/icons/secure-compliant.svg",
  },
  {
    step: "04",
    title: "Embed",
    body: "Qiko Creator embeds native AI workers into sales, finance, concierge, or CRM workflows.",
    icon: "/qiko-static/assets/icons/custom-integration.svg",
  },
] as const;

export const platformHandleCards = [
  {
    title: "Model selection & optimisation",
    body: "Best-fit base models sized to your use case — not over- or under-provisioned.",
    icon: "/qiko-static/assets/icons/multimodel.png",
  },
  {
    title: "GPU & infra orchestration",
    body: "Capacity, monitoring, and scaling handled for you so the worker stays available.",
    icon: "/qiko-static/assets/icons/labs-setting-purple.svg",
  },
  {
    title: "Data pipelines & RAG",
    body: "Retrieval and training pipelines so the worker can use your documents and systems reliably.",
    icon: "/qiko-static/assets/icons/labs-element4-purple.svg",
  },
  {
    title: "Security & isolation",
    body: "Isolated deployments, encryption, and private options for stricter compliance needs.",
    icon: "/qiko-static/assets/icons/secure-compliant.svg",
  },
  {
    title: "APIs & integration",
    body: "Documented APIs and webhooks so you can embed the worker into the tools you already use.",
    icon: "/qiko-static/assets/icons/custom-integration-purple.svg",
  },
  {
    title: "Monitoring & iteration",
    body: "Track performance and feedback so the worker gets sharper over time.",
    icon: "/qiko-static/assets/icons/status-up.svg",
  },
] as const;

export const audienceCards = [
  {
    title: "Recruiters",
    body: "Who want an AI that screens and pitches the way they do.",
    icon: "/qiko-static/assets/icons/labs-search-status.svg",
  },
  {
    title: "Travel & lifestyle experts",
    body: "Who want an assistant that knows their taste and inventory.",
    icon: "/qiko-static/assets/icons/globe.svg",
  },
  {
    title: "Sales trainers",
    body: "Who want an AI that coaches reps in their methodology.",
    icon: "/qiko-static/assets/icons/token-action-purple.svg",
  },
  {
    title: "Niche consultants",
    body: "Who want to package deep expertise as a product their clients can use.",
    icon: "/qiko-static/assets/icons/labs-worker-purple.svg",
  },
] as const;

export const homeFaqs: FaqItem[] = [
  {
    q: "What is Qiko Labs?",
    a: "Labs builds Pulse for B2B teams and custom AI workers — from orchestrator squads to real-customer validation to production embed.",
  },
  {
    q: "How is Labs different from a typical AI prototype?",
    a: "Prototypes stall in procurement. Labs ships working product, tests it with real customers, hardens from feedback, and embeds it into workflows you can sell on.",
  },
  {
    q: "What is Pulse?",
    a: "Pulse is Labs’ B2B AI intelligence on CRM and operations — insights and actions from the records your team already trusts. When you need more, Labs scopes a custom worker.",
  },
  {
    q: "How do I get started?",
    a: "Book a call for Pulse, or enquire about a custom build. Tell us the systems involved and the outcome you need.",
  },
];
