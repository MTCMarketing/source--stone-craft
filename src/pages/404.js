import React from "react";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import { business } from "../data/site";

export default function NotFoundPage() {
  return (
    <Layout>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Error 404</p>
          <h1>We could not find that page</h1>
          <p className="page-head__lead">It may have moved. Head back home, or call us and we will help directly.</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="/">
              Back to home <Icon name="arrow" size={16} />
            </a>
            <a className="btn btn--ghost" href={business.phoneHref}>
              <Icon name="phone" size={16} /> {business.phone}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>Page not found | StoneCraft</title>
    <meta name="robots" content="noindex" />
  </>
);
