import { useEffect, useState } from "react";
import sanityClient from "../lib/sanityClient";
import { urlFor } from "../lib/imageBuilder";
import { getHeroQuery } from "../lib/queries";


const Hero = () => {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    sanityClient.fetch(getHeroQuery).then(setHero);
  }, []);

  if (!hero) return <div>Loading...</div>;

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{hero.title}</h1>
        <p>{hero.subtitle}</p>
        <a href={hero.buttonLink} className="cta-button">
          {hero.buttonText}
        </a>
      </div>
      {hero.image && (
        <div className="hero-image">
          <img src={urlFor(hero.image).url()} alt={hero.title} />
        </div>
      )}
    </section>
  );
};

export default Hero;
