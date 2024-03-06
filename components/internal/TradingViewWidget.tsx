// TradingViewWidget.jsx
"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, memo, useState } from "react";
import { ChangeIndicator } from "../ui/value-change-indicator";
import { GetCoinData } from "@/actions/getCoinData";
import { CoinData } from "@/types";
import { Skeleton } from "../ui/skeleton";

function CoinNameAndRank({ coinData }: { coinData: CoinData }) {
  return (
    <>
      <Image
        src={coinData.thumb}
        alt={coinData.name}
        width={100}
        height={100}
        className="w-8 h-8 rounded-full "
      />
      <div className="flex gap-2">
        <span className="text-2xl font-semibold">Bitcoin</span>
        <span className="text-[1rem] font-semibold text-muted-secondary">
          {coinData.symbol.toUpperCase()}
        </span>
      </div>
      <div className="bg-muted-foreground text-white px-2 py-[0.3rem] rounded-md ml-5">
        Rank #{coinData.market_cap_rank}
      </div>
    </>
  );
}

function SymbolDescription({ coinData }: { coinData: CoinData }) {
  return (
    <>
      <div className="flex flex-col gap-5 items-start justify-between w-full py-4">
        <div className="md:flex items-center gap-2 py-3 px-2 hidden">
          <CoinNameAndRank coinData={coinData} />
        </div>
        <div className="flex flex-col ml-1">
          <div className="flex md:gap-5 gap-2 items-center justify-between">
            <h2 className="text-3xl font-semibold">
              ${coinData.price_usd.toLocaleString("en-US")}.00
            </h2>

            <ChangeIndicator
              change={coinData.marketData.price_change_percentage_24h}
              showArrow
            />

            <span className="text-muted-foreground text-[0.875rem]">
              {"(24H)"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="font-medium">
              ₹ {coinData.price_inr.toLocaleString("en-IN")}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

function TradingViewWidget({
  className,
  coingeckoId,
}: {
  className?: string;
  coingeckoId: string;
}) {
  const container = useRef<HTMLDivElement>(null);
  const [coinData, setCoinData] = useState<CoinData | null>(null);
  useEffect(() => {
    const script = document.createElement("script");

    const fetchCoin = async () => {
      const fetchCoinData = await GetCoinData({
        coidId: coingeckoId,
      });
      if (!fetchCoinData) return;
      setCoinData(fetchCoinData);
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:${coinData?.symbol}USD",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "hide_legend": true,
          "withdateranges": true,
          "range": "5D",
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    };
    fetchCoin();
    const currentContainer = container.current;

    if (currentContainer) {
      currentContainer.appendChild(script);
    }
    // Use the captured value in the cleanup function
    return () => {
      if (currentContainer && script.parentNode === currentContainer) {
        currentContainer.removeChild(script);
      }
    };
  }, [coinData?.symbol, coingeckoId]);

  return (
    <>
      <div className="md:hidden flex mb-5 gap-2">
        {!coinData ? (
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
        ) : (
          <CoinNameAndRank coinData={coinData} />
        )}
      </div>
      <div
        className={cn(
          "tradingview-widget-container bg-white border border-transparent px-5 pb-[10rem]",
          className
        )}
        ref={container}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {!coinData ? (
          <>
            <Skeleton className="w-[500px] h-[20px] rounded-full my-10" />
            <Skeleton className="w-[200px] h-[20px] rounded-full my-10" />
            <Skeleton className="w-[300px] h-[20px] rounded-full my-10" />
          </>
        ) : (
          <SymbolDescription coinData={coinData} />
        )}
        <div
          className="tradingview-widget-container__widget"
          style={{
            height: "calc(100% - 32px)",
            width: "100%",
          }}
        ></div>
        <div className="tradingview-widget-copyright"></div>
      </div>
    </>
  );
}

export default memo(TradingViewWidget);
