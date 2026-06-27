# hsn.studio — Landing Page

One-Stop Creative & Event Ecosystem · Tasikmalaya, Indonesia

## Stack
- Next.js 14 (App Router)
- React 18
- Plus Jakarta Sans (Google Fonts)

## Quick Start

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur File

```
hsn-studio/
├── app/
│   ├── globals.css          ← Semua style (dark premium theme)
│   ├── layout.js            ← Root layout + metadata
│   └── page.js              ← Halaman utama
├── components/
│   ├── Navbar.js            ← Wordmark "Feel the Frame"
│   ├── Hero.js              ← Avatar, badge, social, WA button
│   ├── Maps.js              ← Google Maps embed + CTA
│   ├── CTA.js               ← Quote + button konsultasi
│   └── Icons.js             ← SVG icons
├── public/
│   ├── logo-placeholder.svg ← Placeholder sementara
│   └── logo.png             ← ⭐ TARUH LOGO KAMU DI SINI
├── config.js                ← ⭐ Edit untuk update konten & URL
├── next.config.js
├── jsconfig.json
└── package.json
```

---

## ⭐ Cara Pasang Logo

1. Taruh file logo di **`public/logo.png`** (200×200px, PNG, background transparan)
2. Buka `components/Hero.js`
3. Ganti baris:
   ```jsx
   src="/logo-placeholder.svg"
   ```
   menjadi:
   ```jsx
   src="/logo.png"
   ```

---

## ⭐ Cara Fix Lokasi Google Maps (WAJIB)

Google Maps embed memerlukan URL khusus. Ikuti langkah ini:

1. Buka **Google Maps** di browser
2. Cari **"Jl. Peta No.127 Tasikmalaya"** dan pastikan pin tepat di lokasi studio
3. Klik tombol **Share** (ikon bagikan)
4. Pilih tab **"Embed a map"**
5. Salin hanya bagian **src** dari kode iframe, contoh:
   ```
   https://www.google.com/maps/embed?pb=!1m18!1m12...
   ```
6. Buka **`components/Maps.js`**
7. Ganti nilai `MAPS_EMBED_SRC` dengan URL yang disalin

---

## Cara Update Konten Lainnya

Edit **`config.js`**:

| Variable | Fungsi |
|---|---|
| `WHATSAPP_NUMBER` | Nomor WA tanpa + |
| `WHATSAPP_DEFAULT_MESSAGE` | Pesan default WA |
| `SOCIAL.instagram.url` | URL Instagram |
| `SOCIAL.tiktok.url` | URL TikTok |
| `GOOGLE_MAPS_URL` | Link share Google Maps |
| `CTA_QUOTE` | Teks quote di section bawah |

---

## Deploy ke Vercel

```bash
npx vercel
```

