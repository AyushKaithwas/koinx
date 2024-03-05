import { MainLayout } from "@/components/containers/mainLayout";
import TradingViewWidget from "@/components/ui-self/TradingViewWidget";

import Image from "next/image";

export default function Home() {
  return (
    <MainLayout className="">
      <div className="flex w-full h-full rounded-3xl">
        <div className="flex md:w-[66%] w-full h-[40rem]">
          <TradingViewWidget className="" />
        </div>
        <div className="md:flex hidden"></div>
      </div>
    </MainLayout>
  );
}
