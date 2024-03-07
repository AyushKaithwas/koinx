import { GetTrendingCoins } from "@/actions/getTrendingCoins";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { TrendingCoin } from "./trending-coins";
import { type TrendingCoinType } from "@/types";

export async function YouMayAlsoLike() {
  const trendingCoinsData = await GetTrendingCoins();
  if (!trendingCoinsData) return null;
  return (
    <div className="flex flex-col w-full gap-5 bg-white p-2 md:rounded-none rounded-t-lg border-l border-r md:border-0 border-t">
      <h2 className="md:text-2xl text-xl font-semibold">You May Also Like</h2>
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
        <CarouselNext className="absolute right-0 bg-white w-8 h-8" />
      </Carousel>
    </div>
  );
}
