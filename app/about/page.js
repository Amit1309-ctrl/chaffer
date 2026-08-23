import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

export default function About() {
  return (
    <main>
      <Header />
      <article className="content">
        <div className="eyebrow">ABOUT</div>
        <h1>A leaderboard where money talks.</h1>

        <p>
          Outbid is a simple public leaderboard. Submit your website or social
          profile and compete for attention by bidding more than everyone else.
        </p>

        <p>
          There are no complicated algorithms, approval queues, or advertising
          dashboards. Your position is determined by your bid.
        </p>

        <h2>Why?</h2>
        <p>
          Because the internet is more fun when the rules are simple. If you
          want the top spot, outbid whoever is there.
        </p>

        <h2>Built to be simple</h2>
        <p>
          No account is required. No subscription is required. Just a public
          board where the highest bids get the most visibility.
        </p>

        <div className="links">
          <Link href="/rules">Read the rules →</Link>
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
