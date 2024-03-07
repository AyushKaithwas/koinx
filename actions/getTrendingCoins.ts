"use server";

import { TrendingCoinType } from "@/types";

export async function GetTrendingCoins(): Promise<TrendingCoinType[] | null> {
  try {
    const response = await fetch(
      `${process.env.api_url}${process.env.trending_coins_path}`
    );
    const data = await response.json();
    // Regex to match only the valid price format (dollars and cents)
    const priceRegex = /^(?![A-Za-z])\$[\d,]+(?:\.\d+)?(?![A-Za-z])$/;
    const trendingCoinsData = data.coins.map((coin: any) => {
      const priceMatch = coin.item.data.price.match(priceRegex);
      const cleanPrice = priceMatch ? priceMatch[0] : "N/A"; // Use the match or 'N/A'
      return {
        coin_id: coin.item.coin_id,
        name: coin.item.name,
        symbol: coin.item.symbol,
        thumb: coin.item.thumb,
        price: cleanPrice, // Use the clean price or 'N/A'
        price_change_percentage_24h_usd:
          coin.item.data.price_change_percentage_24h.usd,
        sparkline: coin.item.data.sparkline,
      };
    });
    return trendingCoinsData;
  } catch (error) {
    console.log(error);
    return null;
  }
}
