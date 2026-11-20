import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Icon from "../components/Icon";
import press from "../data/press.json";
import { pull } from "../data/site";

const byline = press.byline.replace(/^By JOHN RICHARDSON/, "By John Richardson");

export default function PressPage() {
  return (
    <Layout>
      <section className="page-head page-head--image" style={{ "--ph": "url(/images/bars.webp)" }}>
        <div className="container page-head__row">
          <div>
            <p className="eyebrow eyebrow--light">In the press</p>
            <h1>StoneCraft in the news</h1>
            <p className="page-head__lead">Coverage of our recycled-glass countertops, and two features in Maine HOME+DESIGN.</p>
          </div>
          <div className="page-head__covers" aria-hidden="true">
            <img src="/images/mag-1.webp" width="152" height="192" alt="" />
            <img src="/images/mag-2.webp" width="152" height="192" alt="" />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container press">
          <article className="article">
            <h2>{press.headline}</h2>
            <p className="article__deck">{press.deck}</p>
            <p className="article__by">{byline}</p>
            {press.paragraphs.map((p, i) => (
              <React.Fragment key={p.slice(0, 32)}>
                <p>{p}</p>
                {i === 3 && (
                  <blockquote className="article__pull">
                    <Icon name="quote" size={36} strokeWidth={1.4} />
                    <p>{pull.text}</p>
                    <footer>{pull.who}</footer>
                  </blockquote>
                )}
              </React.Fragment>
            ))}
            <ul className="article__captions">
              {press.captions
                .filter((c) => !c.startsWith("John Ewing"))
                .map((c) => (
                  <li key={c.slice(0, 24)}>{c}</li>
                ))}
            </ul>
          </article>

          <aside className="press-aside" aria-label="Magazine features">
            <h3>Also featured</h3>
            <ul>
              {[
                { img: "/images/mag-1.webp", text: press.clippings[0] },
                { img: "/images/mag-2.webp", text: press.clippings[1] },
              ].map((m) => (
                <li key={m.img}>
                  <img src={m.img} width="152" height="192" alt="Maine HOME+DESIGN magazine cover" loading="lazy" decoding="async" />
                  <p>
                    <strong>Maine HOME+DESIGN</strong>
                    <span>{m.text.replace(" - By ", ", by ")}</span>
                  </p>
                </li>
              ))}
            </ul>
            <a className="btn btn--primary btn--sm" href="/#contact">
              Start your project <Icon name="arrow" size={16} />
            </a>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

export const Head = () => (
  <Seo path="/in-the-press/" title="In the Press | StoneCraft Concrete, Maine" description="Press coverage of StoneCraft's recycled-glass concrete countertops, and features in Maine HOME+DESIGN." />
);
