import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { ChangeIndicator } from "../ui/value-change-indicator";
import { GetTrendingCoins } from "@/actions/getTrendingCoins";
import { type TrendingCoinType } from "@/types";

interface TrendingCoinProps {
  trendingCoinData: {
    coin_id: string;
    name: string;
    symbol: string;
    thumb: string;
    price: string;
    price_change_percentage_24h_usd: number;
    sparkline: string;
  };
}

export function TrendingCoin({ trendingCoinData }: TrendingCoinProps) {
  const {
    coin_id,
    name,
    symbol,
    thumb,
    price,
    price_change_percentage_24h_usd,
    sparkline,
  } = trendingCoinData;
  // console.log(sparkline);
  return (
    <div className="flex flex-col items-start gap-2 rounded-xl md:p-4 p-1 bg-white border">
      <div className="flex items-center gap-2">
        <Image
          src={thumb}
          alt="icon"
          width={20}
          height={20}
          className="w-7 h-7 rounded-full"
        />
        <h3 className="md:text-base text-[0.625rem]">{symbol}</h3>
        <ChangeIndicator
          className="h-5 w-14 text-[0.7rem]"
          change={price_change_percentage_24h_usd}
        />
      </div>
      <h2 className="font-medium text-lg">{price}</h2>
      <Image src={sparkline} alt="sparkline" width={100} height={100} />
    </div>
  );
}

export async function TrendingCoins() {
  //fetch data here using server action
  const trendingCoinsData = await GetTrendingCoins();
  if (!trendingCoinsData) return null;
  //   const trendingCoinsDataSample = ;
  return (
    <div className="flex flex-col w-full gap-5 p-2 bg-white md:rounded-none rounded-b-lg border-l border-r md:border-0 border-b">
      <h2 className="md:text-2xl text-xl font-semibold">Trending Coin</h2>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {trendingCoinsData.map((trendingCoinData) => {
            return (
              <CarouselItem
                key={trendingCoinData.coin_id}
                className="pl-2 md:pl-4 md:basis-[20%] basis-[45%]"
              >
                <TrendingCoin trendingCoinData={trendingCoinData} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 bg-white w-8 h-8" />
        <CarouselNext className="absolute right-0  bg-white w-8 h-8" />
      </Carousel>
    </div>
  );
}
