import React, { useEffect, useState } from "react";
import { business, nav } from "../data/site";
import Icon from "./Icon";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__row">
          <p>
            <Icon name="pin" size={14} /> Come see our brand new facility: {business.street}, {business.city}, {business.region}
          </p>
          <a href={business.phoneHref}>
            <Icon name="phone" size={14} /> {business.phone}
          </a>
        </div>
      </div>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container site-header__bar">
          <a className="brand" href="/" onClick={close} aria-label="StoneCraft, home">
            <img src="/images/logo-clean.webp" width="853" height="413" alt="StoneCraft Iconic Concrete" />
          </a>

          <nav className="nav" aria-label="Primary">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="site-header__cta">
            <a className="btn btn--primary btn--sm" href="/#contact">
              Request a quote
            </a>
          </div>

          <button className="menu-btn" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>

        <div id="mobile-nav" className="mobile-nav" hidden={!open}>
          <nav aria-label="Mobile">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={close}>
                {n.label}
              </a>
            ))}
            <a href="/#contact" onClick={close}>
              Contact
            </a>
          </nav>
          <a className="btn btn--primary btn--block" href={business.phoneHref}>
            <Icon name="phone" size={18} /> Call {business.phone}
          </a>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/images/logo-clean.webp" width="853" height="413" alt="StoneCraft Iconic Concrete" loading="lazy" decoding="async" />
          <p>{business.tagline}</p>
        </div>
        <nav className="footer__col" aria-label="Footer">
          <h2>Explore</h2>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="footer__col">
          <h2>Visit or call</h2>
          <address>
            {business.street}
            <br />
            {business.city}, {business.region} {business.zip}
          </address>
          <p>
            <a href={business.phoneHref}>{business.phone}</a>
            <br />
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
        </div>
      </div>
      <div className="container footer__legal">
        <p>&copy; {new Date().getFullYear()} StoneCraft. Fully insured.</p>
        <p>Concrete countertops, polished floors and more across Maine.</p>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="mobile-bar">
      <a className="btn btn--ghost" href={business.phoneHref}>
        <Icon name="phone" size={18} /> Call
      </a>
      <a className="btn btn--primary" href="/#contact">
        Request a quote
      </a>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <MobileBar />
    </>
  );
}
