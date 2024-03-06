import Image from "next/image";
import { ChangeIndicator } from "../ui/value-change-indicator";
import { GetTrendingCoins } from "@/actions/getTrendingCoins";
import { TrendingCoinType } from "@/types";
import { cn } from "@/lib/utils";

function TrendingCoin({ coin }: { coin: TrendingCoinType }) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <Image
          src={coin.thumb}
          alt={coin.name}
          width={100}
          height={100}
          className="w-8 h-8 rounded-full "
        />
        <h3 className="font-medium">{coin.name}</h3>
      </div>
      <ChangeIndicator
        showArrow
        change={coin.price_change_percentage_24h_usd}
        className="w-[6rem]"
      />
    </div>
  );
}

export async function TrendingCoin24h({ className }: { className?: string }) {
  const trendingCoins = await GetTrendingCoins();
  if (!trendingCoins) return null;
  return (
    <div
      className={cn(
        "w-full flex flex-col p-10  gap-3 bg-white rounded-lg",
        className
      )}
    >
      <h2 className="text-2xl font-semibold">Trending Coins (24h)</h2>
      {trendingCoins.slice(0, 3).map((coin) => {
        return <TrendingCoin coin={coin} key={coin.coin_id} />;
      })}
    </div>
  );
}
