
# KoinX Cryptocurrency Taxation Platform

Welcome to the GitHub repository for the frontend of KoinX, a cutting-edge financial technology platform specializing in simplifying the complex world of cryptocurrency taxation. This project is a demonstration of the KoinX interface, developed as a part of a take-home assignment.

## About KoinX

KoinX is dedicated to providing innovative solutions for cryptocurrency investors and businesses, helping them navigate the rapidly evolving landscape of cryptocurrency taxation. As a seed-funded company, we're backed by a panel of marquee funds and angel investors, committed to revolutionizing how crypto taxes are calculated and managed.

## Project Overview

This Next.js website is designed to closely follow a provided Figma design, implementing various components and functionalities, including real-time cryptocurrency prices, trending coins, and interactive charts.

### Mandatory Tasks

- All components are implemented as per the Figma design specifications.
- Real-time Bitcoin prices in USD and INR, including the 24-hour change, are fetched using Coingecko’s `/simple/price` API.
- The Bitcoin USD price chart is integrated using TradingView’s advanced chart widget.
- The top 3 trending coins over the last 24 hours are displayed using Coingecko’s `/search/trending` API.
- A "You May Also Like" section features trending coins with details and price graphs, implemented as a horizontally scrollable carousel.
- The UI is fully responsive, adhering to the Figma design's responsiveness guidelines.
- Placeholder texts/images are used where specific API data or integrations are not required.

### Optional Task

- The website supports dynamic token display (e.g., `/bitcoin`, `/ethereum`) based on the URL, fetching and displaying data and charts specific to the requested cryptocurrency.

## Technologies Used

- **Next.js**: for SSR and SSG, enhancing the performance and SEO of the web application.
- **Coingecko API**: for fetching real-time cryptocurrency data.
- **TradingView Widget**: for embedding interactive cryptocurrency charts.
- **Netlify/Vercel**: for deployment and hosting of the web application.

## Deployment

This project is deployed on Vercel. Check out the live version here: [[Link to the deployed site]](https://koinx-ruby.vercel.app/bitcoin)

## Local Setup

To set up and run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/AyushKaithwas/koinx
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Contact

Ayush Kaithwas - [ayush.91011@gmail.com]
LinkedIn - [https://www.linkedin.com/in/ayush1kaithwas/]
