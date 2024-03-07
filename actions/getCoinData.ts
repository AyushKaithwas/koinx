"use server";

import { CoinData } from "@/types";

export async function GetCoinData({ coidId }: { coidId: string }) {
  try {
    const response = await fetch(
      `${process.env.api_url}/coins/${coidId}?x_cg_demo_api_key=${process.env.api_key}`
    );
    const data = await response.json();
    const coinData: CoinData = {
      id: data.id,
      name: data.name,
      symbol: data.symbol,
      thumb: data.image.small,
      price_usd: data.market_data.current_price.usd,
      price_inr: data.market_data.current_price.inr,
      market_cap_rank: data.market_cap_rank,
      description: data.description.en,
      marketData: {
        current_price: data.market_data.current_price.usd,
        high_24h: data.market_data.high_24h.usd,
        low_24h: data.market_data.low_24h.usd,
        market_cap: data.market_data.market_cap.usd,
        market_cap_rank: data.market_cap_rank,
        total_volume: data.market_data.total_volume.usd,
        price_change_percentage_24h:
          data.market_data.price_change_percentage_24h,
        all_time_high: data.market_data.ath.usd,
        all_time_low: data.market_data.atl.usd,
        all_time_high_date: data.market_data.ath_date.usd,
        all_time_low_date: data.market_data.atl_date.usd,
      },
    };

    return coinData;
  } catch (error) {
    console.log(error);
    return null;
  }
}
