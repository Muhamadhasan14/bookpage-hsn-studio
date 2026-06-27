'use client';

import { useState } from 'react';
import { WHATSAPP_URL, SOCIAL, HOURS, SITE_URL } from '../config';
import { WhatsAppIcon, InstagramIcon, TikTokIcon, ShareIcon } from './Icons';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  function handleShare() {
    if (navigator.share) {
      navigator.share({ title: 'hsn.studio — Feel the Frame', url: SITE_URL });
    } else {
      navigator.clipboard?.writeText(SITE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  }

  return (
    <div className="hero-shell">
      {/* Top bar — share only */}
      <div className="hero-topbar">
        <div style={{ position: 'relative' }}>
          <div className={`share-alert${copied ? ' show' : ''}`}>Link disalin!</div>
          <button className="share-btn" onClick={handleShare} aria-label="Bagikan halaman">
            <span style={{ width: 16, height: 16, display: 'inline-flex' }}><ShareIcon /></span>
          </button>
        </div>
      </div>

      {/* Logo — taruh logo.png (200x200, PNG) di folder public/ */}
      <div className="avatar-logo">
        <img
          src="/logo.png"
          alt="HSN Studio"
          width={96}
          height={96}
        />
      </div>

      <div className="hero-badge">
        <span className="badge-dot" />
        Buka Setiap Hari
      </div>

      <p className="hero-name">hsn.studio</p>
      <p className="hero-sub">{HOURS} &nbsp;·&nbsp; Tasikmalaya</p>

      {/* Social: IG + TikTok only */}
      <div className="social-row">
        <a href={SOCIAL.instagram.url} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
          <span style={{ width: 20, height: 20, display: 'inline-flex' }}><InstagramIcon /></span>
        </a>
        <a href={SOCIAL.tiktok.url} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="TikTok">
          <span style={{ width: 20, height: 20, display: 'inline-flex' }}><TikTokIcon /></span>
        </a>
      </div>

      {/* Single premium WA button */}
      <div className="wa-btn-wrap">
        <a className="wa-btn" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <span style={{ width: 22, height: 22, display: 'inline-flex' }} className="wa-btn-icon">
            <WhatsAppIcon />
          </span>
          Hubungi via WhatsApp
        </a>
        <div className="wa-glow" />
      </div>

      <div style={{ height: 56 }} />
    </div>
  );
}
