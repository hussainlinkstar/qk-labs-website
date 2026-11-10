import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import SiteMotion from "@/components/SiteMotion";

type Props = {
  eyebrow: string;
  title: string;
  sub: string;
  children: React.ReactNode;
};

export default function InnerPageShell({ eyebrow, title, sub, children }: Props) {
  return (
    <SiteMotion>
      <Nav />
      <main id="main">
        <section className="hero blog-hero" id="top">
          <div className="hero-bg" aria-hidden="true" />
          <div className="reveal">
            <span className="how-eyebrow">{eyebrow}</span>
            <h1 className="hero-title">{title}</h1>
            <p className="hero-sub">{sub}</p>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </SiteMotion>
  );
}
