import { useEffect, useState } from "react";
import { SanityClient } from "../lib/sanityClient";
import { getHeroQuery } from "../lib/queries";

import React from "react";
import { section } from "framer-motion/client";

const Hero = () => {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    SanityClient.fetch(getHeroQuery).then(setHero);
  }, []);

  if (!hero) return <div>Loading...</div>;

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{hero.title}</h1>
        <p>{hero.subtitle}</p>
        <a href={hero.ctaLink} className="cta-button">
          {hero.ctaText}
        </a>
      </div>
      {hero.image && (
        <div className="hero-image">
          <img src={SanityClient.urlFor(hero.image).url()} alt={hero.title} />
        </div>
      )}
    </section>
  );
};

export default Hero;
