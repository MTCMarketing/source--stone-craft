import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { About, Contact, Green, Hero, PressBand, Services, Specs, Why, Work } from "../components/Sections";
import { HomeReviews } from "../components/Reviews";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Specs />
      <Services />
      <Work />
      <HomeReviews />
      <Why />
      <Green />
      <PressBand />
      <About />
      <Contact />
    </Layout>
  );
}

export const Head = () => (
  <Seo
    home
    path="/"
    title="StoneCraft | Concrete Countertops & Polished Floors in Maine"
    description="Concrete countertops, polished concrete floors, vanities, bar tops and fireplaces made to order in Buxton, Maine. Residential and commercial. Fully insured. Call (207) 591-7711."
  />
);
