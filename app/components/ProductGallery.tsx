"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ProductGallery({
  name,
  images,
}: {
  name: string;
  images: string[];
}) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [scale, setScale] = useState(1);
  const selectImage = (index: number) => {
    setActive(index);
    setScale(1);
  };
  const closeZoom = () => {
    setZoomed(false);
    setScale(1);
  };
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeZoom();
      if (!zoomed) return;
      if (event.key === "ArrowRight")
        setActive((current) => (current + 1) % images.length);
      if (event.key === "ArrowLeft")
        setActive((current) => (current - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [images.length, zoomed]);
  return (
    <>
      <div className="detail-gallery">
        <button
          className="detail-main-image"
          type="button"
          onClick={() => setZoomed(true)}
          aria-label={`Zoom ${name}`}
        >
          <Image
            src={images[active]}
            alt={`${name} view ${active + 1}`}
            fill
            priority
            sizes="(max-width: 800px) 100vw, 55vw"
          />
          <span className="zoom-badge">
            ⌕ <span>Click to zoom</span>
          </span>
        </button>
        <div className="detail-thumbs" aria-label={`${name} gallery`}>
          {images.map((image, index) => (
            <button
              className={index === active ? "active" : ""}
              key={image}
              type="button"
              onClick={() => selectImage(index)}
              aria-label={`View image ${index + 1}`}
            >
              <Image src={image} alt="" width={110} height={90} />
            </button>
          ))}
        </div>
      </div>
      {zoomed && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${name} enlarged gallery`}
          onClick={closeZoom}
        >
          <button
            className="lightbox-close"
            type="button"
            onClick={closeZoom}
            aria-label="Close image viewer"
          >
            ×
          </button>
          <button
            className="lightbox-arrow lightbox-prev"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActive(
                (current) => (current - 1 + images.length) % images.length,
              );
            }}
            aria-label="Previous image"
          >
            ←
          </button>
          <div
            className="lightbox-image"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[active]}
              alt={`${name} enlarged view`}
              fill
              sizes="90vw"
              style={{ transform: `scale(${scale})` }}
            />
          </div>
          <button
            className="lightbox-arrow lightbox-next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActive((current) => (current + 1) % images.length);
            }}
            aria-label="Next image"
          >
            →
          </button>
          <div
            className="zoom-controls"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() =>
                setScale((current) => Math.min(current + 0.25, 2.5))
              }
              aria-label="Zoom in"
            >
              +
            </button>
            <span>{Math.round(scale * 100)}%</span>
            <button
              type="button"
              onClick={() => setScale((current) => Math.max(current - 0.25, 1))}
              aria-label="Zoom out"
            >
              −
            </button>
          </div>
        </div>
      )}
    </>
  );
}
