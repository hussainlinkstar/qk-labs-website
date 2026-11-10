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
  labsDeliverySteps,
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
          eyebrow="How Labs ships"
          title="Built. Tested. Proven."
          description="Mobilise an agent squad, validate with real customers, then harden and embed workers into the workflows that matter — including Pulse on CRM."
          items={seeHowAiCards}
          note="Ship with the receipts — evidence you can sell on."
        />
        <StepsPathSection
          id="path"
          title="From brief to embedded worker."
          description="Labs runs a delivery path that ends in production use: mobilise, test with customers, then harden and embed."
          steps={labsDeliverySteps}
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
          title="Mobilise · Test · Harden · Embed"
          description="Four stages to take a Labs build from orchestrator squad to native workers in your workflows."
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
          description="Start with Pulse on your CRM, or bring Labs a harder problem and we will build, test, and embed the worker."
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
