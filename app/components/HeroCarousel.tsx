"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/banners/ride-on-adventure.png",
    kicker: "",
    title: "",
    accent: "",
    copy: "",
  },
  {
    image: "/banners/ride-on-bike.png",
    kicker: "",
    title: "",
    accent: "",
    copy: "",
  },
  {
    image: "/banners/ride-on-jeep.png",
    kicker: "",
    title: "",
    accent: "",
    copy: "",
  },
  {
    image: "/banners/ride-on-sport-bike.png",
    kicker: "",
    title: "",
    accent: "",
    copy: "",
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  const previous = () => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  useEffect(() => {
    const timer = window.setInterval(next, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="hero-carousel" aria-label="Kidz Auto highlights">
      <div className="hero-carousel-image">
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.title}
          fill
          sizes="100vw"
          priority={active === 0}
        />
      </div>

      <div className="hero-carousel-overlay" />

      <div className="hero-carousel-content">
        <p className="eyebrow">
          {slide.kicker} <span />
        </p>

        <h1>
          {slide.title}
          <br />
          <em>{slide.accent}</em>
        </h1>

        <p className="hero-lede">{slide.copy}</p>

        {/* <a className="button button-light" href="/products">
          Explore the collection <span className="arrow">↗</span>
        </a> */}
      </div>

      <div className="hero-carousel-controls">
        <button type="button" aria-label="Previous banner" onClick={previous}>
          ←
        </button>

        <div className="hero-dots">
          {slides.map((item, index) => (
            <button
              type="button"
              aria-label={`Show banner ${index + 1}`}
              className={index === active ? "active" : ""}
              onClick={() => setActive(index)}
              key={item.image}
            />
          ))}
        </div>

        <button type="button" aria-label="Next banner" onClick={next}>
          →
        </button>

        <span>
          0{active + 1} / 0{slides.length}
        </span>
      </div>
    </section>
  );
}
