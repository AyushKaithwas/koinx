"use client";
import { cn } from "@/lib/utils";
import { CryptoData, MarketData } from "@/types";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const initialState: CryptoData = {
  pricePoints: {
    todayLow: 0,
    todayHigh: 0,
    weekLow: 0,
    weekHigh: 0,
    week52Low: 0,
    week52High: 0,
  },
  marketData: {
    price: 0,
    marketCap: 0,
    marketCapDominance: 0,
    volume: 0,
    volumeMarketCapRatio: 0,
    marketCapRank: 0,
    allTimeHigh: {
      value: 0,
      percentageChange: 0,
      date: "",
    },
    allTimeLow: {
      value: 0,
      percentageChange: 0,
      date: "",
    },
  },
};

const gradientStyle = {
  background: `linear-gradient(
    to right, 
    #FF4949 0%, 
    #FF4E11 20%, 
    #FC870A 30%, 
    #FFAF11 50%, 
    #C2CB21 60%, 
    #11EB68 100%
  )`,
};

const formatKeyName = (key: string) => {
  const map: { [key: string]: string } = {
    todayLow: "Today's Low",
    todayHigh: "Today's High",
    weekLow: "7d Low",
    weekHigh: "7d High",
    week52Low: "52W Low",
    week52High: "52W High",
    price: "Bitcoin Price",
    marketCap: "Market Cap",
    marketCapDominance: "Market Cap Dominance",
    volume: "Trading Volume",
    volumeMarketCapRatio: "Volume / Market Cap",
    marketCapRank: "Market Cap Rank",
    allTimeHigh: "All-Time High",
    allTimeLow: "All-Time Low",
  };

  return map[key] || key;
};

const formatField = (key: string, value: number) => {
  switch (key) {
    case "marketCap":
    case "price":
    case "volume":
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    case "marketCapDominance":
    case "volumeMarketCapRatio":
      return `${value.toFixed(2)}%`; // assuming these should be shown as percentages
    case "marketCapRank":
      return `#${value}`; // assuming rank should be prefixed with a hash
    default:
      return value.toLocaleString(); // default numeric formatting
  }
};

const renderData = (cryptoData: CryptoData) => {
  const combinedData = {
    ...cryptoData.pricePoints,
    ...cryptoData.marketData,
  };
  return Object.entries(combinedData)
    .map(([key, value]) => {
      if (typeof value === "number" || (value && "value" in value)) {
        // Call formatField appropriately based on whether value is a number or an object
        const displayValue =
          typeof value === "number"
            ? formatField(key, value)
            : formatComplexField(key, value);

        return (
          <div key={key} className="flex w-[40%] justify-between my-2">
            <span className="text-sm text-[#44475B]">{formatKeyName(key)}</span>
            <span className="font-medium">{displayValue}</span>
          </div>
        );
      }
    })
    .filter(Boolean); // Filter out null values (non-numeric fields)
};

const formatComplexField = (
  key: string,
  value: { value: number; percentageChange: number; date: string }
) => {
  return `${formatField(key, value.value)} (${value.percentageChange.toFixed(
    2
  )}%, ${value.date})`;
  // Format the object containing value, percentageChange, and date...
};

function HighLowGradientLine({ showArrow }: { showArrow?: boolean }) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col text-[#44475B] gap-2">
          <span className="text-sm ">Today&apos;s Low</span>
          <span className="font-medium">46,930.22</span>
        </div>
        <div
          className={cn(
            "flex flex-col md:w-[70%] w-[40%] items-center",
            showArrow ? "mt-10" : ""
          )}
        >
          <div
            className="flex flex-col w-full h-[8px] rounded-md "
            style={gradientStyle}
          ></div>
          {showArrow && (
            <div className="flex flex-col justify-center items-center w-[10px] h-full">
              <span className=" text-[#44475B] text-sm">▲</span>
              <span className=" text-[#44475B] text-sm">$48,637.83</span>
            </div>
          )}
        </div>
        <div className="flex flex-col text-[#44475B] gap-2">
          <span className="text-sm">Today&apos;s High</span>
          <span className="font-medium">49,343.83</span>
        </div>
      </div>
    </div>
  );
}

function Fundamentals({ cryptoData }: { cryptoData: CryptoData }) {
  const cryptoDataEntries = renderData(cryptoData);

  return (
    <div>
      <div className="flex items-center gap-2">
        <h2 className="font-semibold text-[1.2rem]">Fundamentals</h2>
        <Image
          src="/images/icons/info-icon.svg"
          alt="info-icon"
          width={20}
          height={20}
          className="cursor-pointer w-5 h-5"
        />
      </div>
      {cryptoDataEntries}
    </div>
  );
}

export function PerformanceCard() {
  const [cryptoData, setCryptoData] = useState<CryptoData>(initialState);
  useEffect(() => {
    // setCryptoData here
  }, []);

  return (
    <div className="flex flex-col w-full h-[45rem] md:px-5 px-1 py-4 rounded-xl gap-5 bg-white">
      <div className="flex flex-col w-full h-[45rem] gap-5">
        <h2 className="text-2xl font-semibold">Performance</h2>
        <HighLowGradientLine showArrow />
        <HighLowGradientLine />
        <Fundamentals cryptoData={cryptoData} />
      </div>
    </div>
  );
}
