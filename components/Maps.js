import { LOCATION_LABEL } from '../config';
import { PinIcon, ArrowUpRightIcon } from './Icons';

const GOOGLE_MAPS_URL = 'https://share.google/MvsnngRwxs9r52IZB';

// Koordinat GPS tepat: -7.355115618460864, 108.22478740751629
const MAPS_EMBED_SRC =
  'https://maps.google.com/maps?q=-7.355115618460864,108.22478740751629&z=17&t=&ie=UTF8&iwloc=&output=embed';

export default function Maps() {
  return (
    <section className="maps" id="lokasi">
      <span className="eyebrow">Lokasi</span>
      <div className="heading-wrap">
        <h2 className="heading-gradient">Studio &amp; area operasional</h2>
      </div>
      <p className="maps-subtitle">
        <span style={{ width: 15, height: 15, display: 'inline-flex', color: '#378add', flexShrink: 0 }}>
          <PinIcon />
        </span>
        {LOCATION_LABEL}
      </p>
      <div className="maps-frame">
        <iframe
          src={MAPS_EMBED_SRC}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi HSN Studio — Tasikmalaya"
        />
      </div>
      <div className="maps-cta-row">
        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="maps-cta">
          Buka di Google Maps
          <span style={{ width: 13, height: 13, display: 'inline-flex' }}><ArrowUpRightIcon /></span>
        </a>
      </div>
    </section>
  );
}
