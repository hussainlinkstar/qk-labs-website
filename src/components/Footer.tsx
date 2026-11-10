import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/qiko-static/assets/logo-footer.png"
              alt="Qiko"
              width="100"
              height="41"
            />
            <p>Be visible, understood, and ready for a world where AI does the searching.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <span className="footer-col-title">Product</span>
              <a href="/#see">Insights</a>
              <a href="/#path">How it works</a>
              <a href="/#build-how">Workers</a>
              <a href={siteConfig.signalUrl} rel="noopener noreferrer">
                Signal
              </a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Company</span>
              <a href="/contact">Contact</a>
              <a href={siteConfig.signalUrl} rel="noopener noreferrer">
                About on qiko.ai
              </a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Get started</span>
              <a href={siteConfig.calendlyUrl} rel="noopener noreferrer" target="_blank">
                Book a demo
              </a>
              <a href="/#enquire">Enquire</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Qiko</span>
          <nav className="footer-legal">
            <a href={`${siteConfig.signalUrl}/privacy`} rel="noopener noreferrer">
              Privacy Policy
            </a>
            <a href={`${siteConfig.signalUrl}/cookies`} rel="noopener noreferrer">
              Cookie Policy
            </a>
            <a href={`${siteConfig.signalUrl}/terms`} rel="noopener noreferrer">
              Terms and Conditions
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
