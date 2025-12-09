export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              <span className="text-primary">Port</span>
              <span className="text-accent">folio</span>
            </h3>
            <p className="text-foreground/60 text-sm">A modern portfolio crafted with passion and precision.</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-foreground/60 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/60 hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/60 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Social</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hello@portfolio.com"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  hello@portfolio.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-foreground/60 hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-foreground/50 text-sm">
          <p>&copy; {currentYear} Your Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
