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
import { YouMayAlsoLike } from "@/components/internal/youmayalsolike";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MainLayout className="xl:flex-row flex-col gap-5">
        <div className="flex flex-col w-full h-full rounded-3xl gap-5">
          <div className="flex flex-col  w-full h-[45rem]">
            <TradingViewWidget />
          </div>
          <Menu />
          <PerformanceCard />
          <SentimentCard />
          <AboutCard />
          <TokenomicsCard className="md:flex hidden" />
          <TeamCard />
        </div>
        <div>
          <GetStarted />
        </div>
      </MainLayout>
      <div className="w-full flex flex-col md:p-10 p-5 md:bg-white ">
        <YouMayAlsoLike />
        <TrendingCoins />
      </div>
    </>
  );
}
