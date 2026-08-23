import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero">
        <div className="badge">CHAFFER</div>
        <h1>Outbid your competition.</h1>
        <p className="starting-bid">
        <strong>New spots start at $1.</strong> Paying less than the #1 price still
        puts you on the board at whatever place that bid can take.
        </p>
        <p>Pay to rank. The more you bid, the higher you appear.</p>
        <div className="buttons">
          <Link href="/about" className="button primary">About</Link>
          <Link href="/categories" className="button">Categories</Link>
          <Link href="/rules" className="button">Rules</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="nav">
      <Link href="/" className="logo">chaffer.lol</Link>
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
      <span>chaffer.io</span>
    </footer>
  );
}
