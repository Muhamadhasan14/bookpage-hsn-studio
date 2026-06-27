import { WHATSAPP_URL, CTA_QUOTE, CTA_BUTTON_LABEL } from '../config';
import { WhatsAppIcon } from './Icons';

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-inner">
        <span className="cta-eyebrow">Filosofi Kami</span>
        <p className="cta-quote">{CTA_QUOTE}</p>
        <div className="cta-accent" />
        <div className="cta-btn-wrap">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="cta-btn">
            <span style={{ width: 18, height: 18, display: 'inline-flex' }} className="cta-btn-icon">
              <WhatsAppIcon />
            </span>
            {CTA_BUTTON_LABEL}
          </a>
        </div>
      </div>
    </section>
  );
}
