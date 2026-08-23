import "./globals.css";

export const metadata = {
  title: "Outbid",
  description: "A public leaderboard.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
