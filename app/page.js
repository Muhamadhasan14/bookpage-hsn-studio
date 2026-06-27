import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Maps from '../components/Maps';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Maps />
        <div className="section-divider" />
        <CTA />
      </main>
      <div className="bottom-bar">
        <p className="bottom-copy">
          © {new Date().getFullYear()} HSN Studio · Tasikmalaya, Indonesia
          <br />
          One-Stop Creative &amp; Event Ecosystem
        </p>
      </div>
    </>
  );
}
