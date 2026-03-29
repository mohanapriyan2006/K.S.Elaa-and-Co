# K.S. ELAA & CO

Premium, minimal frontend website for an Indian event decoration company.

## Tech Stack

- React (JavaScript)
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM

## Features

- Three-page structure: Home, Services, Contact
- Modern Indian aesthetic with ivory + brown + golden accents
- Sticky navbar and smooth route transitions
- Animated hero, scroll reveals, card hover effects, and staggered grids
- Services filtering: All, Wedding, Celebrations, Panthal & Stage, Corporate
- Masonry-style gallery sections
- Contact form with client-side validation
- EmailJS-powered booking request submissions
- Floating WhatsApp click-to-chat CTA
- Mobile-first responsive layout

## EmailJS Setup

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file from [.env.example](.env.example):

```bash
cp .env.example .env
```

3. Fill the EmailJS values in [.env](.env):

- VITE_SERVICE_ID
- VITE_TEMPLATE_ID
- VITE_PUBLIC_KEY

4. Ensure your EmailJS template has the following variables:

- name
- phone
- event_type
- event_date
- message

## Project Structure

```text
src/
	components/
	data/
	pages/
	utils/
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

### Vercel

1. Import the repository in Vercel.
2. Framework preset: Vite.
3. Build command: `npm run build`.
4. Output directory: `dist`.

### Netlify

1. Import the repository in Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. SPA fallback is already configured in `public/_redirects`.
