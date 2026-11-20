import React from "react";
import { business, mentions, reviews } from "../data/site";
import Icon from "./Icon";
import { SectionHead } from "./Sections";

const initial = (name) => name.replace(/[^A-Za-z]/g, "").charAt(0).toUpperCase() || "S";

function Card({ r, kind }) {
  return (
    <li className="rv">
      <div className="rv__top">
        <span className="rv__avatar" aria-hidden="true">
          {initial(r.name)}
        </span>
        <span className="rv__who">
          <strong>{r.name}</strong>
          <small>{kind === "google" ? `${r.tag ? `${r.tag} · ` : ""}Google review` : r.place}</small>
        </span>
      </div>
      {r.title && <p className="rv__title">{r.title}</p>}
      <blockquote>{r.text}</blockquote>
    </li>
  );
}

function Mentions() {
  return (
    <ul className="mentions" aria-label="What reviewers mention most">
      {mentions.map((m) => (
        <li key={m}>
          <Icon name="check" size={14} /> {m}
        </li>
      ))}
    </ul>
  );
}

/** Home page: a feature story about floors, four more voices, and the way to all of them. */
export function HomeReviews() {
  const f = reviews.featured;
  const quad = [reviews.google[0], reviews.google[1], reviews.google[2], reviews.google[3]];
  return (
    <section className="section section--reviews" id="reviews" aria-labelledby="reviews-title">
      <div className="container">
        <div className="reviews__head">
          <SectionHead eyebrow="Reviews" title={<span id="reviews-title">What customers say about working with Scott</span>}>
            From Google and from the admirers page on our previous site.
          </SectionHead>
          <div className="reviews__mentions">
            <p className="reviews__label">Reviewers mention</p>
            <Mentions />
          </div>
        </div>

        <div className="rv-bento">
          <figure className="rv-feature">
            <Icon name="quote" size={150} strokeWidth={1} className="rv-feature__q" />
            <p className="rv-feature__kicker">A floors story</p>
            <blockquote>
              <p>{f.excerpt}</p>
            </blockquote>
            <figcaption>
              <span className="rv__top">
                <span className="rv__avatar rv__avatar--light" aria-hidden="true">
                  {initial(f.name)}
                </span>
                <span className="rv__who">
                  <strong>{f.name}</strong>
                  <small>{f.source}</small>
                </span>
              </span>
              <a className="btn btn--light" href="/reviews/#stephani">
                Read the full review <Icon name="arrow" size={16} />
              </a>
            </figcaption>
          </figure>

          <ul className="rv-quad">
            {quad.map((r) => (
              <Card key={r.name} r={r} kind="google" />
            ))}
          </ul>
        </div>

        <div className="rv-cta">
          <a className="btn btn--primary" href="/reviews/">
            Read all reviews <Icon name="arrow" size={16} />
          </a>
          <a className="btn btn--ghost" href={business.googleReviews} target="_blank" rel="noopener noreferrer">
            See them on Google
          </a>
        </div>
      </div>
    </section>
  );
}

/** Reviews page: every review, in two groups. */
export function AllReviews() {
  const f = reviews.featured;
  return (
    <>
      <section className="page-head page-head--image" style={{ "--ph": "url(/images/counters.webp)" }}>
        <div className="container">
          <p className="eyebrow eyebrow--light">Reviews</p>
          <h1>Customer reviews</h1>
          <p className="page-head__lead">Reviews from Google and kind words from earlier customers, in their own words.</p>
          <Mentions />
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="g-title">
        <div className="container">
          <h2 id="g-title" className="group-title">
            Google reviews
          </h2>
          <article className="rv-long" id="stephani">
            <Icon name="quote" size={120} strokeWidth={1} className="rv-long__q" />
            <p className="rv-feature__kicker">A floors story</p>
            <h3>{f.name}</h3>
            {f.text.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </article>
          <ul className="rv-grid rv-grid--all">
            {reviews.google.map((r) => (
              <Card key={r.name} r={r} kind="google" />
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--soft section--tight" aria-labelledby="a-title">
        <div className="container">
          <h2 id="a-title" className="group-title">
            Our admirers
          </h2>
          <ul className="rv-grid rv-grid--all">
            {reviews.admirers.map((r) => (
              <Card key={r.name} r={r} kind="admirer" />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
