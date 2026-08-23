import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

const categories = [
  {
    name: "People & Profiles",
    slug: "people-profiles",
  },
  {
    name: "Ecommerce & Retail",
    slug: "ecommerce-retail",
  },
  {
    name: "Media & News",
    slug: "media-news",
  },
];

export default function Categories() {
  return (
    <main>
      <header className="nav">
        <Link href="/" className="logo">
          chaffer.io
        </Link>

        <nav>
          <Link href="/categories">Categories</Link>
          <Link href="/rules">Rules</Link>
          <Link href="/about">About</Link>
          <ThemeToggle />
        </nav>
      </header>

      <article className="content">
        <div className="eyebrow">CATEGORIES</div>

        <h1>Pick a category.</h1>

        <p>
          Every category has its own ranking. Pick one to see who leads it.
        </p>

        <div className="category-list">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="category-item"
            >
              <span>{category.name}</span>
              <span>→</span>
            </Link>
          ))}
        </div>
      </article>
    </main>
  );
}