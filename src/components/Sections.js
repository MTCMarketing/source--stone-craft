import React, { useRef } from "react";
import { alsoMade, business, colors, facts, gallery, green, projects, pull, services, specs } from "../data/site";
import { pickService } from "../utils/sendQuote";
import Icon from "./Icon";
import QuoteForm from "./QuoteForm";

export function SectionHead({ eyebrow, title, children, light = false }) {
  return (
    <header className={`section-head ${light ? "section-head--light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-head__lead">{children}</p>}
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="chip">
            <span className="chip__dot" /> Buxton, Maine &middot; Fully insured
          </p>
          <h1 id="hero-title">
            Concrete countertops and polished floors, <span className="hl">made to order.</span>
          </h1>
          <p className="hero__lead">
            As Maine&rsquo;s pre-eminent creators of elegantly designed concrete, we have never served two clients who are exactly the same, so we never make two pieces that are.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href="#contact">
              Request a quote <Icon name="arrow" size={18} />
            </a>
            <a className="btn btn--ghost btn--lg" href={business.phoneHref}>
              <Icon name="phone" size={18} /> {business.phone}
            </a>
          </div>
          <ul className="hero__trust">
            <li>
              <Icon name="check" size={16} /> Residential and commercial
            </li>
            <li>
              <Icon name="check" size={16} /> Custom colors and shapes
            </li>
            <li>
              <Icon name="check" size={16} /> Made in Maine
            </li>
          </ul>
        </div>

        <div className="bento">
          <figure className="tile tile--a">
            <img
              src="/images/hero-1600.webp"
              srcSet="/images/hero-900.webp 900w, /images/hero-1600.webp 1600w"
              sizes="(min-width: 960px) 28vw, 90vw"
              width="1600"
              height="897"
              alt="Bright open room with a polished concrete floor and floor-to-ceiling windows"
              fetchpriority="high"
              decoding="async"
            />
            <figcaption className="tile__tag">Polished floors</figcaption>
          </figure>
          <figure className="tile tile--b">
            <img src="/images/counter2.webp" width="1000" height="560" alt="Modern kitchen with a concrete countertop" loading="eager" decoding="async" />
            <figcaption className="tile__tag">Countertops</figcaption>
          </figure>
          <figure className="tile tile--c">
            <img src="/images/vanity.webp" width="1200" height="673" alt="Bathroom vanity with a concrete top and a stone vessel sink" loading="eager" decoding="async" />
            <figcaption className="tile__tag">Vanities and sinks</figcaption>
          </figure>
          <div className="float" aria-hidden="true">
            <span className="float__icon">
              <Icon name="shield" size={18} />
            </span>
            <span>
              <strong>Fully insured</strong>
              <small>Homes, shops, restaurants</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Specs() {
  return (
    <section className="specs" aria-label="Concrete performance">
      <div className="container">
        <dl className="specs__card">
          {specs.map((s) => (
            <div key={s.label} className="spec">
              <dd>
                {s.value}
                {s.unit && <small>{s.unit}</small>}
              </dd>
              <dt>{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const pick = (title) => (title.startsWith("Polished") ? "Polished concrete floor" : title.startsWith("Concrete counter") ? "Kitchen countertop" : "Restaurant or bar");

function CardBody({ s }) {
  return (
    <>
      <h3>{s.title}</h3>
      <p>{s.text}</p>
      <ul className="ticks">
        {s.points.map((p) => (
          <li key={p}>
            <Icon name="check" size={15} /> {p}
          </li>
        ))}
      </ul>
      <a className="more-link" href="#contact" onClick={() => pickService(pick(s.title))}>
        Request a quote{" "}
        <span className="more-link__arrow">
          <Icon name="arrow" size={16} />
        </span>
      </a>
    </>
  );
}

export function Services() {
  const [floors, counters, commercial] = services;
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <SectionHead eyebrow="What we make" title={<span id="services-title">Floors, counters and bars, made one piece at a time</span>}>
          Every project starts with your room, your use and your colors. Here is where most of our work goes.
        </SectionHead>

        <div className="svc-bento">
          <article className="card card--hero" id={floors.id}>
            <img src={floors.img} width={floors.w} height={floors.h} alt={floors.alt} loading="lazy" decoding="async" />
            <div className="card--hero__body">
              <p className="pill pill--light">{floors.kicker}</p>
              <CardBody s={floors} />
            </div>
          </article>

          <article className="card card--tall" id={counters.id}>
            <div className="card__media card__media--duo">
              <img src={counters.img} width={counters.w} height={counters.h} alt={counters.alt} loading="lazy" decoding="async" />
              <img src={counters.img2} width={counters.w2} height={counters.h2} alt={counters.alt2} loading="lazy" decoding="async" />
            </div>
            <div className="card__body">
              <p className="pill">{counters.kicker}</p>
              <CardBody s={counters} />
            </div>
          </article>

          <article className="card card--tall" id={commercial.id}>
            <div className="card__media">
              <img src={commercial.img} width={commercial.w} height={commercial.h} alt={commercial.alt} loading="lazy" decoding="async" />
            </div>
            <div className="card__body">
              <p className="pill">{commercial.kicker}</p>
              <CardBody s={commercial} />
            </div>
          </article>

          <article className="card card--mosaic">
            <div className="mosaic__head">
              <p className="pill pill--light">Also made here</p>
              <h3>And more, all in concrete</h3>
              <p>Beyond floors and counters, we make the pieces that make a space feel finished.</p>
            </div>
            <ul className="mosaic">
              {alsoMade.map((a) => (
                <li key={a.label} className={`mosaic__tile ${a.img ? "mosaic__tile--img" : ""}`}>
                  {a.img ? <img src={a.img} alt="" loading="lazy" decoding="async" /> : <Icon name={a.icon} size={28} />}
                  <span>{a.label}</span>
                </li>
              ))}
            </ul>
            <a className="more-link more-link--light" href="#contact">
              Tell us your idea{" "}
              <span className="more-link__arrow">
                <Icon name="arrow" size={16} />
              </span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function NotesCarousel() {
  const track = useRef(null);
  const hex = Object.fromEntries(colors.map((c) => [c.name, c.hex]));
  const by = (dir) => track.current && track.current.scrollBy({ left: dir * Math.min(380, track.current.clientWidth * 0.85), behavior: "smooth" });
  return (
    <div className="notes">
      <div className="notes__head">
        <div>
          <p className="eyebrow">Project notes</p>
          <h3>Stories from the shop</h3>
        </div>
        <div className="notes__nav">
          <button type="button" aria-label="Previous notes" onClick={() => by(-1)}>
            <Icon name="chevleft" size={20} />
          </button>
          <button type="button" aria-label="Next notes" onClick={() => by(1)}>
            <Icon name="chevright" size={20} />
          </button>
        </div>
      </div>
      <ul className="notes__track" ref={track} tabIndex={0} aria-label="Project notes: scroll sideways">
        {projects.map((p) => (
          <li key={p.title} className="note">
            <span className="note__tag">{p.tag}</span>
            <h4>{p.title}</h4>
            <p>{p.text}</p>
            {p.colors.length > 0 && (
              <div className="note__colors">
                {p.colors.map((c) => (
                  <span key={c}>
                    <i style={{ background: hex[c] }} /> {c}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ColorMarquee() {
  const list = [...colors, ...colors];
  return (
    <div className="colors">
      <div className="colors__top">
        <p className="eyebrow">Colors we have poured</p>
        <p className="colors__hint">On-screen shades are approximate. Ask us for real samples.</p>
      </div>
      <div className="marquee">
        <ul className="marquee__track">
          {list.map((c, i) => (
            <li key={`${c.name}-${i}`} aria-hidden={i >= colors.length ? "true" : undefined}>
              <span className="swatch" style={{ background: c.hex }} />
              {c.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section className="section section--soft" id="work" aria-labelledby="work-title">
      <div className="container">
        <SectionHead eyebrow="Our work" title={<span id="work-title">From our own projects</span>}>
          Photos from StoneCraft jobs: bar tops, sinks, counters, fireplaces, outdoor spaces and stained floors.
        </SectionHead>

        <ul className="masonry">
          {gallery.map((g) => (
            <li key={g.id}>
              <img src={`/images/gallery/${g.id}.webp`} width={g.w} height={g.h} alt={g.alt} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>

        <NotesCarousel />
        <ColorMarquee />
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section className="section" id="why" aria-labelledby="why-title">
      <div className="container why">
        <SectionHead eyebrow="Why concrete" title={<span id="why-title">What to expect from a StoneCraft surface</span>}>
          Straight answers about strength, heat, chips, cracks and stains, so there are no surprises after it is installed.
        </SectionHead>
        <div className="facts">
          {facts.map((f) => (
            <article key={f.term} className={`fact ${f.stat ? "fact--stat" : ""} ${f.wide ? "fact--wide" : ""}`}>
              <span className="fact__icon">
                <Icon name={f.icon} size={20} />
              </span>
              {f.stat && (
                <p className="fact__stat">
                  {f.stat.value}
                  <small>{f.stat.unit}</small>
                </p>
              )}
              <h3>{f.term}</h3>
              <p>{f.text}</p>
              {f.chips && (
                <ul className="chips chips--light">
                  {f.chips.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const greenIcons = ["leaf", "pin", "droplet", "layers"];

export function Green() {
  return (
    <section className="section section--green" id="green" aria-labelledby="green-title">
      <span className="orb orb--a" aria-hidden="true" />
      <span className="orb orb--b" aria-hidden="true" />
      <Icon name="leaf" size={420} strokeWidth={0.6} className="deco deco--a" />
      <Icon name="leaf" size={300} strokeWidth={0.6} className="deco deco--b" />
      <div className="container">
        <SectionHead light eyebrow="The green room" title={<span id="green-title">Concrete made with care for Maine</span>}>
          Local materials, recycled glass and a shop that reuses what it can.
        </SectionHead>
        <ul className="green">
          {green.map((g, i) => (
            <li key={g.title} className={`gcard ${g.feature ? "gcard--feature" : ""} ${g.wide ? "gcard--wide" : ""}`}>
              <span className="gcard__icon">
                <Icon name={greenIcons[i]} size={22} />
              </span>
              {g.stat && (
                <p className="gcard__stat">
                  {g.stat}
                  <small>{g.statLabel}</small>
                </p>
              )}
              <h3>{g.title}</h3>
              <p>{g.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PressBand() {
  return (
    <section className="section section--tight" aria-label="In the press">
      <div className="container">
        <div className="press-card">
          <Icon name="quote" size={260} strokeWidth={0.8} className="press-card__q" />
          <Icon name="newspaper" size={200} strokeWidth={0.8} className="press-card__n" />
          <div className="press-card__covers" aria-hidden="true">
            <img src="/images/mag-1.webp" width="152" height="192" alt="" loading="lazy" decoding="async" />
            <img src="/images/mag-2.webp" width="152" height="192" alt="" loading="lazy" decoding="async" />
          </div>
          <div className="press-card__copy">
            <p className="eyebrow eyebrow--light">In the press</p>
            <h2>Seen in the news and in Maine HOME+DESIGN</h2>
            <blockquote className="press-card__pull">
              <p>&ldquo;{pull.text}&rdquo;</p>
              <footer>{pull.who}</footer>
            </blockquote>
            <a className="btn btn--light" href="/in-the-press/">
              Read the coverage <Icon name="arrow" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container about">
        <div className="about__copy">
          <SectionHead eyebrow="About StoneCraft" title={<span id="about-title">A Maine concrete studio built around one-off pieces</span>} />
          <p>
            StoneCraft was founded by {business.founder}. We make countertops, sinks, fireplace surrounds, outdoor pieces and floors in concrete, one project at a time, now from a new
            shop in {business.city}.
          </p>
          <p>
            Our customers tell us the same things: {business.founder.split(" ")[0]} is responsive, easy to work with and full of ideas, and the finished piece gets compliments for years. We
            are fully insured and work with homeowners, restaurants and businesses.
          </p>
          <p className="about__motto">{business.tagline}</p>
        </div>
        <figure className="about__figure">
          <img src="/images/about-photo.webp" width="1200" height="800" alt="Scott Chasse with a customer and her recycled-glass kitchen counter" loading="lazy" decoding="async" />
          <span className="about__badge">
            <Icon name="shield" size={16} /> Fully insured
          </span>
          <figcaption>Scott Chasse with a customer and her recycled-glass kitchen counter.</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <span className="contact-section__ring contact-section__ring--a" aria-hidden="true" />
      <span className="contact-section__ring contact-section__ring--b" aria-hidden="true" />
      <div className="container contact">
        <div className="contact__info">
          <SectionHead light eyebrow="Contact" title={<span id="contact-title">Tell us what you are building</span>}>
            Send a few details and we will get back to you with the next step. Or call, we pick up.
          </SectionHead>
          <ul className="contact__list">
            <li>
              <span className="contact__icon">
                <Icon name="phone" size={20} />
              </span>
              <div>
                <small>Phone</small>
                <a href={business.phoneHref}>{business.phone}</a>
              </div>
            </li>
            <li>
              <span className="contact__icon">
                <Icon name="mail" size={20} />
              </span>
              <div>
                <small>Email</small>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </div>
            </li>
            <li>
              <span className="contact__icon">
                <Icon name="pin" size={20} />
              </span>
              <div>
                <small>Come see our facility</small>
                <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {business.street}, {business.city}, {business.region} {business.zip}
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="contact__card">
          <h3>Request a quote</h3>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
