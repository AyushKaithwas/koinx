// TradingViewWidget.jsx
"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, memo } from "react";

function SymbolDescription() {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 ">
      <span className="text-sm text-gray-500">BTCUSD</span>
      <span className="text-sm text-gray-500">5D</span>
    </div>
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
    <div
      className={cn(
        "tradingview-widget-container bg-white border border-transparent",
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
  );
}

export default memo(TradingViewWidget);
