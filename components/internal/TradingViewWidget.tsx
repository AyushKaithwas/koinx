// TradingViewWidget.jsx
"use client";
import { GetSimplePrice } from "@/actions/getSimplePrice";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, memo, useState } from "react";
import { ChangeIndicator } from "../ui/value-change-indicator";

interface CoinData {
  [key: string]: {
    inr: number;
    inr_24h_change: number;
    usd: number;
    usd_24h_change: number;
  };
}
const initialState: CoinData | null = null;

function CoinNameAndRank() {
  return (
    <>
      <Image
        src="/images/icons/btc-icon.png"
        alt="bitcoin"
        width={100}
        height={100}
        className="w-8 h-8 rounded-full "
      />
      <div className="flex gap-2">
        <span className="text-2xl font-semibold">Bitcoin</span>
        <span className="text-[1rem] font-semibold text-muted-secondary">
          BTC
        </span>
      </div>
      <div className="bg-muted-foreground text-white px-2 py-[0.3rem] rounded-md ml-5">
        Rank #1
      </div>
    </>
  );
}

function SymbolDescription() {
  const [simplePrice, setSimplePrice] = useState<CoinData | null>(initialState);
  useEffect(() => {
    const fetchData = async () => {
      const fetchSimplePrice = await GetSimplePrice({
        ids: "bitcoin",
        vs_currencies: "inr%2Cusd",
        include_24hr_change: true,
      });
      setSimplePrice(fetchSimplePrice);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-5 items-start justify-between w-full py-4">
        <div className="md:flex items-center gap-2 py-3 px-2 hidden">
          <CoinNameAndRank />
        </div>
        <div className="flex flex-col ml-1">
          <div className="flex md:gap-5 gap-2 items-center justify-between">
            <h2 className="text-3xl font-semibold">
              ${simplePrice?.bitcoin?.usd.toLocaleString("en-US")}.00
            </h2>
            {simplePrice && (
              <ChangeIndicator
                change={simplePrice.bitcoin.usd_24h_change}
                showArrow
              />
            )}
            <span className="text-muted-foreground text-[0.875rem]">
              {"(24H)"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="font-medium">
              ₹ {simplePrice?.bitcoin?.inr.toLocaleString("en-IN")}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

function TradingViewWidget({ className }: { className?: string }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
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
    // Capture the current value of the ref
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
  }, []);

  return (
    <>
      <div className="md:hidden flex mb-5 gap-2">
        <CoinNameAndRank />
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
        <SymbolDescription />
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
