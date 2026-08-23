import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

export default function Rules() {
  return (
    <main>
      <Header />
      <article className="content">
        <div className="eyebrow">RULES</div>
        <h1>How Chaffer works.</h1>

        <h2>1. Ranking</h2>
        <p>
          Listings are ranked by the amount they have bid. A larger total bid
          means a higher position on the board.
        </p>

        <h2>2. Outbidding</h2>
        <p>
          To take a higher position, your bid must beat the amount currently
          holding that position. The highest bidder gets number one.
        </p>

        <h2>3. Existing listings</h2>
        <p>
          If your website is already listed, submitting it again increases its
          total bid and can move it higher on the leaderboard.
        </p>

        <h2>4. What can be listed?</h2>
        <p>
          Websites, products, apps, startups, and social profiles are welcome.
          Content that is illegal, abusive, deceptive, or otherwise unsuitable
          may be removed.
        </p>

        <h2>5. Removal</h2>
        <p>
          Listings that violate these rules may be removed. The board is
          intended to remain simple, public, and useful.
        </p>

        <h2>6. The point</h2>
        <p>
          There is no secret ranking formula. If you want to move up, outbid
          the competition.
        </p>

        <div className="links">
          <Link href="/about">About →</Link>
          <Link href="/">Back to leaderboard →</Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="nav">
      <Link href="/" className="logo">chaffer.io</Link>
      <nav>
        <Link href="/categories">Categories</Link>
        <Link href="/rules">Rules</Link>
        <Link href="/about">About</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <span>outbid.lol</span>
      <div>
        <Link href="/rules">Rules</Link>
        <Link href="/about">About</Link>
      </div>
    </footer>
  );
}
