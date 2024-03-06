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
