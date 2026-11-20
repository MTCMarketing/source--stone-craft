import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { AllReviews } from "../components/Reviews";

export default function ReviewsPage() {
  return (
    <Layout>
      <AllReviews />
    </Layout>
  );
}

export const Head = () => (
  <Seo path="/reviews/" title="Reviews | StoneCraft Concrete, Maine" description="Google reviews and customer testimonials for StoneCraft's concrete countertops, vanities, sinks and floors in Maine." />
);
