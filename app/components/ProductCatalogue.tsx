"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "./ProductCard";
import { products } from "../site-data";

export function ProductCatalogue() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | "bikes" | "jeeps">("all");
  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === category;
      const matchesQuery =
        !normalizedQuery ||
        `${product.name} ${product.categoryLabel} ${product.description}`
          .toLowerCase()
          .includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <div className="catalogue-toolbar">
        <label className="catalogue-search">
          <span aria-hidden="true">⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search product, model, or category"
          />
        </label>
        <div className="catalogue-filter" aria-label="Filter products">
          {(["all", "jeeps", "bikes"] as const).map((value) => (
            <button
              className={category === value ? "active" : ""}
              key={value}
              type="button"
              onClick={() => setCategory(value)}
            >
              {value === "all" ? "All" : value}
            </button>
          ))}
        </div>
      </div>
      <div className="catalogue-results-heading">
        <div>
          <span className="section-kicker">Browse models</span>
          <h2>Product gallery</h2>
        </div>
        <span>{filteredProducts.length} models</span>
      </div>
      <div className="catalogue-grid">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.slug} />
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p className="catalogue-empty">No models match that search yet.</p>
      )}
    </>
  );
}
