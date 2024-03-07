import { GetCoinData } from "@/actions/getCoinData";
import { MainLayout } from "@/components/containers/mainLayout";
import TradingViewWidget from "@/components/internal/TradingViewWidget";
import { AboutCard } from "@/components/internal/about-card";
import { GetStarted } from "@/components/internal/get-started-card";
import { Menu } from "@/components/internal/menu";
import { PerformanceCard } from "@/components/internal/performance-card";
import { SentimentCard } from "@/components/internal/sentiment-card";
import { TeamCard } from "@/components/internal/team-card";
import { TokenomicsCard } from "@/components/internal/tokenomics";
import { TrendingCoins } from "@/components/internal/trending-coins";
import { TrendingCoin24h } from "@/components/internal/trendingCoins24h";
import { YouMayAlsoLike } from "@/components/internal/youmayalsolike";
import Image from "next/image";

export default async function Home({ params }: { params: { slug: string } }) {
  // console.log(params);
  const fetchCoinData = await GetCoinData({
    coidId: params.slug,
  });
  if (!fetchCoinData) {
    return (
      <MainLayout>
        <h2>Sorry, we were unable to fetch the data of {params.slug}</h2>
      </MainLayout>
    );
  }
  return (
    <>
      <MainLayout className="xl:flex-row flex-col gap-5">
        <div className="flex flex-col xl:w-[100%] h-full rounded-3xl gap-5">
          <div className="flex flex-col  w-full h-[45rem]">
            <TradingViewWidget coinData={fetchCoinData} />
          </div>
          <Menu />
          <PerformanceCard coinData={fetchCoinData} />
          <SentimentCard id={"sentiments"} />
          <AboutCard coinData={fetchCoinData} />
          <TokenomicsCard id="tokenomics" className="md:flex hidden" />
          <TeamCard id="team" />
        </div>
        <div className="flex flex-col gap-5">
          <GetStarted />
          <TrendingCoin24h className="md:flex hidden" />
        </div>
      </MainLayout>
      <div className="w-full flex flex-col md:p-10 p-5 md:bg-white ">
        <YouMayAlsoLike />
        <TrendingCoins />
      </div>
      <TrendingCoin24h className="md:hidden flex rounded-none" />
    </>
  );
}
