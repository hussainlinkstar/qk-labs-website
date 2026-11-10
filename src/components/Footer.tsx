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
            <p>
              Qiko Labs builds Pulse and custom AI workers — mobilise, test with real customers, and
              ship with the receipts.
            </p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <span className="footer-col-title">Product</span>
              <a href="/#see">How Labs ships</a>
              <a href="/#build-how">Workers</a>
              <a href="/pricing">Pricing</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Company</span>
              <a href="/about">About</a>
              <a href="/enterprise">Enterprise</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Get started</span>
              <a href={siteConfig.calendlyUrl} rel="noopener noreferrer" target="_blank">
                Book a demo
              </a>
              <a href="/contact">Talk to Labs</a>
              <a href="/enterprise">Enterprise</a>
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
