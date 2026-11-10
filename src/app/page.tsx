import AudienceSection from "@/components/AudienceSection";
import BuildHowSection from "@/components/BuildHowSection";
import ContactBand from "@/components/ContactBand";
import CreatorStory from "@/components/CreatorStory";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import PlatformHandles from "@/components/PlatformHandles";
import SiteMotion from "@/components/SiteMotion";
import FaqAccordion from "@/components/shared/FaqAccordion";
import FeatureCardsSection from "@/components/shared/FeatureCardsSection";
import StepsPathSection from "@/components/shared/StepsPathSection";
import TwoWaysSection from "@/components/shared/TwoWaysSection";
import {
  audienceCards,
  buildWorkerSteps,
  homeFaqs,
  platformHandleCards,
  seeHowAiCards,
  twoWaysCards,
  visibilitySteps,
  whyWorkerCards,
} from "@/lib/home-sections";

export default function HomePage() {
  return (
    <SiteMotion>
      <Nav />
      <main id="main">
        <Hero />
        <FeatureCardsSection
          id="see"
          title="See how AI sees your business"
          description="Pulse shows where CRM context creates opportunity — and where the team needs a clearer next step. Then Labs can build when the product alone is not enough."
          items={seeHowAiCards}
          note="Strong operational clarity is the foundation. Here is what it unlocks."
        />
        <StepsPathSection
          id="path"
          title="Visibility is step one."
          description="Getting the right signal from your business data is where it starts. Being understood accurately and eventually acted on is where it goes. Qiko Labs takes you along that path at your pace."
          steps={visibilitySteps}
        />
        <FeatureCardsSection
          id="why-workers"
          eyebrow="Why digital workers"
          title="Generic AI is smart. Your digital worker is you."
          description="Deploy a worker grounded in your expertise. As you grow, train on proprietary data and keep the competitive edge."
          items={whyWorkerCards}
          note="Why specialised workers beat generic chat for high-stakes B2B work."
        />
        <BuildHowSection
          title="From idea to a production-ready digital worker"
          description="Four steps to describe, train, deploy, and operate a custom AI worker with Labs."
          steps={buildWorkerSteps}
        />
        <CreatorStory />
        <PlatformHandles
          title="What Qiko handles for you"
          description="Everything between your expertise and a production-ready worker — models, infra, data, security, APIs, and iteration."
          items={platformHandleCards}
        />
        <AudienceSection title="Who Qiko Labs is for" items={audienceCards} />
        <TwoWaysSection
          id="products"
          title={
            <>
              Two ways to work with{" "}
              <img src="/qiko-static/assets/qiko-logo.png" alt="Qiko" width={91} height={37} />
            </>
          }
          description="Run Signal to see where you stand on AI visibility, or bring Labs a harder problem and we will build the worker for it. Either way, you own the result."
          cards={twoWaysCards}
        />
        <FaqAccordion items={homeFaqs} />
        <ContactBand />
        <CtaBand />
      </main>
      <Footer />
    </SiteMotion>
  );
}
