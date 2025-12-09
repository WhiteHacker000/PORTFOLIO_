import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div>
            <h3 className={styles.brand}>
              <span className={styles.primary}>Port</span>
              <span className={styles.accent}>folio</span>
            </h3>
            <p className={styles.description}>A modern portfolio crafted with passion and precision.</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className={styles.heading}>Navigation</h4>
            <ul className={styles.list}>
              <li>
                <a href="#home" className={styles.link}>
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className={styles.link}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className={styles.link}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.link}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className={styles.heading}>Social</h4>
            <ul className={styles.list}>
              <li>
                <a href="#" className={styles.link}>
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={styles.heading}>Contact</h4>
            <ul className={styles.list}>
              <li>
                <a href="mailto:kushalvats1316@gmail.com" className={styles.link}>
                  kushalvats1316@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918800764452" className={styles.link}>
                  88007 64452
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Your Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
