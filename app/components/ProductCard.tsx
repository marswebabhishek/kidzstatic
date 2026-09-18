import Image from "next/image";
import Link from "next/link";
import type { Product } from "../site-data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="catalogue-card product-card">
      <Link
        className="catalogue-card-link"
        href={`/products/${product.slug}`}
        aria-label={`Explore ${product.name}`}
      >
        <div className="catalogue-image">
          <div className="catalogue-image-fade" />
          <div className="catalogue-image-shadow" />
          <Image
            className="catalogue-product-image"
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 78vw, (max-width: 1024px) 330px, 370px"
          />
        </div>
        <div className="catalogue-card-copy">
          <h3>{product.name}</h3>
          <span className="card-label">
            {product.categoryLabel.replace(
              "Kidz Ride on ",
              "Battery Operated ",
            )}
          </span>
          <p>{product.description}</p>
          <span className="catalogue-card-action">
            Explore product <span className="arrow">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
