import type { FeatureCardItem } from "@/components/shared/FeatureCardsSection";
import type { FaqItem } from "@/components/shared/FaqAccordion";
import type { StepItem } from "@/components/shared/StepsPathSection";
import type { WayCard } from "@/components/shared/TwoWaysSection";
import { siteConfig } from "@/lib/site-config";

export const seeHowAiCards: FeatureCardItem[] = [
  {
    title: "Know your Pulse",
    body: "See the insights Pulse can surface from the CRM context your team already trusts.",
    icon: "/qiko-static/assets/icons/know-your-score.svg",
    tint: "blue",
  },
  {
    title: "See the gap",
    body: "Where coverage, relationships, or follow-through are thin — and what to do next.",
    icon: "/qiko-static/assets/icons/see-the-gap.svg",
    tint: "orange",
  },
  {
    title: "Act on it",
    body: "Accept insights into actions, or scope a custom AI worker when Pulse is not enough.",
    icon: "/qiko-static/assets/icons/act-on-it.svg",
    tint: "red",
  },
];

export const visibilitySteps: StepItem[] = [
  {
    label: "Step 1",
    status: "Live",
    title: "Discover",
    body: "Pulse finds the signals in your CRM and operations that the team should not miss.",
    icon: "/qiko-static/assets/icons/search-status.svg",
  },
  {
    label: "Step 2",
    status: "Available",
    title: "Be Understood",
    body: "Structure the insight so owners can understand the evidence and the next move.",
    icon: "/qiko-static/assets/icons/layer.svg",
  },
  {
    label: "Step 3",
    status: "On the horizon",
    title: "Transact",
    body: "Be ready for agent-assisted workflows and custom workers when the work gets harder.",
    icon: "/qiko-static/assets/icons/ranking.svg",
  },
];

export const twoWaysCards: WayCard[] = [
  {
    title: "Start with Signal",
    body: "Run a free assessment, see where you stand, and subscribe to track and improve your AI visibility over time. Best if you want to act now and move fast.",
    graphic: "signal-orbit",
    ctaLabel: "Go to Signal",
    ctaHref: siteConfig.signalUrl,
    features: [
      {
        title: "Scan across top AI engines",
        body: "ChatGPT, Gemini, Claude and more.",
        icon: "/qiko-static/assets/icons/scan-across-top.svg",
      },
      {
        title: "Understand your gaps",
        body: "Why competitors appear instead of you.",
        icon: "/qiko-static/assets/icons/understand-your-gap.svg",
      },
      {
        title: "Take action & improve",
        body: "Get prioritised fixes and check progress.",
        icon: "/qiko-static/assets/icons/token-action.svg",
      },
    ],
  },
  {
    title: "Build with Qiko Labs",
    body: "For teams that want Pulse on CRM, or custom AI workers and agentic workflows without managing models, infrastructure, or security.",
    graphic: "labs-reveal",
    variant: "dark",
    ctaLabel: "Talk to Labs",
    ctaHref: "/#enquire",
    outline: false,
    features: [
      {
        title: "Secure & compliant",
        body: "Your data encrypted, available through Qiko managed infrastructure.",
        icon: "/qiko-static/assets/icons/secure-compliant.svg",
      },
      {
        title: "Custom integrations",
        body: "Connect the systems your team already uses.",
        icon: "/qiko-static/assets/icons/custom-integration.svg",
      },
      {
        title: "Dedicated support",
        body: "Strategy and ongoing optimisation with Labs.",
        icon: "/qiko-static/assets/icons/dedicated-support.svg",
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
    title: "Describe your digital worker",
    body: "Start in plain English. Tell Labs what the worker should do, who it helps, and how it should behave.",
    icon: "/qiko-static/assets/icons/communication-icon.svg",
  },
  {
    step: "02",
    title: "Upload your expertise",
    body: "Share documents, transcripts, decision logs, and knowledge so the worker learns your edge.",
    icon: "/qiko-static/assets/icons/labs-element4-purple.svg",
  },
  {
    step: "03",
    title: "Labs configures and deploys",
    body: "We pick the model fit, wire retrieval, integrate APIs, and handle infrastructure and security.",
    icon: "/qiko-static/assets/icons/labs-setting3-purple.svg",
  },
  {
    step: "04",
    title: "Launch and operate",
    body: "Ship behind secure APIs and a hosted interface — ready for your team or your customers.",
    icon: "/qiko-static/assets/icons/labs-initiate.svg",
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

export const creatorStory = {
  name: "Alex",
  role: "French Villa Expert",
  paragraphs: [
    "Alex has spent a decade curating the best French villas for high-end travellers. With Qiko Labs, they described their ideal assistant in plain English, uploaded villa notes, client preferences, and past recommendations — and let Labs handle models and infrastructure.",
    "Alex now licenses that knowledge so travellers can find the right property 24/7, grounded in expert judgment rather than a generic chat model.",
  ],
  metrics: [
    { label: "Time to first worker", value: "1 day" },
    { label: "Response time", value: "Sub-second" },
    { label: "Revenue model", value: "Per agency" },
  ],
  tags: ["Digital twin", "Earn while you sleep", "Full control"],
} as const;

export const homeFaqs: FaqItem[] = [
  {
    q: "What is Qiko Labs?",
    a: "Labs is the B2B home for Pulse and custom AI workers. Signal stays on qiko.ai for AI visibility.",
  },
  {
    q: "What's the difference between Signal and Labs?",
    a: "Signal audits and scores your AI visibility so you know where you stand. Labs builds Pulse and custom AI workers once you need to go further than visibility.",
  },
  {
    q: "Do I need Signal to use Labs?",
    a: "No. Teams come to Labs for Pulse or a custom build. Many customers use both, with a clear product split.",
  },
  {
    q: "How do I get started?",
    a: "Book a Labs demo for Pulse, or enquire about a custom worker. For AI visibility, start with a free assessment on qiko.ai.",
  },
];
