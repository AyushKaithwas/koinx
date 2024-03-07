interface PricePoints {
  todayLow: number;
  todayHigh: number;
  weekLow: number;
  weekHigh: number;
  week52Low: number;
  week52High: number;
}

export interface MarketData {
  price: number;
  marketCap: number;
  marketCapDominance: number;
  volume: number;
  volumeMarketCapRatio: number;
  marketCapRank: number;
  allTimeHigh: {
    value: number;
    percentageChange: number;
    date: string;
  };
  allTimeLow: {
    value: number;
    percentageChange: number;
    date: string;
  };
}

export interface CryptoData {
  pricePoints: PricePoints;
  marketData: MarketData;
}

export type TrendingCoinType = {
  coin_id: string;
  name: string;
  symbol: string;
  thumb: string;
  price: string;
  price_change_percentage_24h_usd: number;
  sparkline: string;
};

export interface CoinData {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
  price_usd: number;
  price_inr: number;
  market_cap_rank: number;
  description: string;
  marketData: {
    current_price: number;
    high_24h: number;
    low_24h: number;
    market_cap: number;
    market_cap_rank: number;
    total_volume: number;
    price_change_percentage_24h: number;
    all_time_high: number;
    all_time_high_date: string;
    all_time_low: number;
    all_time_low_date: string;
  };
}
