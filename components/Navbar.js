import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-wordmark">
          Feel the Frame
        </Link>
      </div>
    </nav>
  );
}
