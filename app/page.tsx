import { MainLayout } from "@/components/containers/mainLayout";
import TradingViewWidget from "@/components/internal/TradingViewWidget";
import { Menu } from "@/components/internal/menu";
import { PerformanceCard } from "@/components/internal/performance-card";
import { SentimentCard } from "@/components/internal/sentiment-card";

import Image from "next/image";

export default function Home() {
  return (
    <MainLayout className="">
      <div className="flex flex-col md:w-[66%] h-full rounded-3xl gap-5">
        <div className="flex flex-col  w-full h-[45rem]">
          <TradingViewWidget />
        </div>
        <Menu />
        <PerformanceCard />
        <SentimentCard />
      </div>
    </MainLayout>
  );
}
