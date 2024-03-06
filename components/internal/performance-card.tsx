"use client";
import { cn } from "@/lib/utils";
import { CryptoData, MarketData } from "@/types";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

// const initialState: CryptoData = {
//   pricePoints: {
//     todayLow: 0,
//     todayHigh: 0,
//     weekLow: 0,
//     weekHigh: 0,
//     week52Low: 0,
//     week52High: 0,
//   },
//   marketData: {
//     price: 0,
//     marketCap: 0,
//     marketCapDominance: 0,
//     volume: 0,
//     volumeMarketCapRatio: 0,
//     marketCapRank: 0,
//     allTimeHigh: {
//       value: 0,
//       percentageChange: 0,
//       date: "",
//     },
//     allTimeLow: {
//       value: 0,
//       percentageChange: 0,
//       date: "",
//     },
//   },
// };

const initialState: CryptoData = {
  pricePoints: {
    todayLow: 46930.22, // Example value for Today's Low
    todayHigh: 49343.83, // Example value for Today's High
    weekLow: 16382.07, // Example value for 7d Low
    weekHigh: 16784.12, // Example value for 7d High
    week52Low: 16930.22, // Example value for 52W Low
    week52High: 49743.83, // Example value for 52W High
  },
  marketData: {
    price: 16815.46, // Example value for Bitcoin Price
    marketCap: 323507290047, // Example value for Market Cap
    marketCapDominance: 38.343, // Example value for Market Cap Dominance
    volume: 23149202782, // Example value for Trading Volume
    volumeMarketCapRatio: 0.0718, // Example value for Volume/Market Cap
    marketCapRank: 1, // Example value for Market Cap Rank
    allTimeHigh: {
      value: 69044.77, // Example value for All-Time High
      percentageChange: -75.6, // Example percentage change from All-Time High
      date: "Nov 10, 2021", // Example date for All-Time High
    },
    allTimeLow: {
      value: 67.81, // Example value for All-Time Low
      percentageChange: 24729.1, // Example percentage change from All-Time Low
      date: "Jul 06, 2013", // Example date for All-Time Low
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

function AllTimeHigh({
  allTimeHigh,
}: {
  allTimeHigh: MarketData["allTimeHigh"];
}) {
  return (
    <div className="flex flex-col justify-center items-end">
      <div className="flex  text-[#44475B] gap-2">
        <span className="text-sm ">
          {allTimeHigh.value.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
        <span
          className={cn(
            "font-medium",
            allTimeHigh.percentageChange > 0 ? "text-green-400" : "text-red-400"
          )}
        >
          {allTimeHigh.percentageChange}%
        </span>
      </div>
      <div className="flex text-[#44475B] gap-2">
        <span className="text-sm">{allTimeHigh.date} </span>
        <span className="font-medium">{`about 1 year`}</span>
      </div>
    </div>
  );
}

function AllTimeLow({ allTimeLow }: { allTimeLow: MarketData["allTimeLow"] }) {
  return (
    <div className="flex flex-col justify-center items-end">
      <div className="flex  text-[#44475B] gap-2">
        <span className="text-sm ">
          {allTimeLow.value.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
        <span
          className={cn(
            "font-medium",
            allTimeLow.percentageChange > 0 ? "text-green-400" : "text-red-400"
          )}
        >
          {allTimeLow.percentageChange}%
        </span>
      </div>
      <div className="flex text-[#44475B] gap-2">
        <span className="text-sm">{allTimeLow.date} </span>
        <span className="font-medium">{`about 1 year`}</span>
      </div>
    </div>
  );
}

function DataPoints({
  children,
  dataName,
}: {
  children: React.ReactNode;
  dataName: string;
}) {
  return (
    <div className="flex gap-2 justify-between items-center h-[3.8rem] border-b">
      <h2 className="text-sm text-muted-foreground">{dataName}</h2>
      <span className="text-sm">{children}</span>
    </div>
  );
}

function Fundamentals({ cryptoData }: { cryptoData: CryptoData }) {
  return (
    <div className="w-full">
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
      <div className="w-full flex-col md:flex-row flex justify-between">
        <div className=" md:w-[46%] w-full px-2 md:px-0">
          <DataPoints dataName="Bitcoin Price">
            {cryptoData.marketData.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </DataPoints>
          <DataPoints dataName="24h Low / 24h High">
            {cryptoData.pricePoints.todayLow.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}{" "}
            /{" "}
            {cryptoData.pricePoints.todayHigh.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </DataPoints>
          <DataPoints dataName="7d Low / 7d High">
            {cryptoData.pricePoints.weekLow.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}{" "}
            /{" "}
            {cryptoData.pricePoints.weekHigh.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </DataPoints>
          <DataPoints dataName="Trading Volume">
            {cryptoData.marketData.volume.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </DataPoints>
          <DataPoints dataName="Market Cap Rank">
            #{cryptoData.marketData.marketCapRank}
          </DataPoints>
        </div>
        <div className=" md:w-[46%] w-full px-2 md:px-0">
          <DataPoints dataName="Market Cap">
            {cryptoData.marketData.marketCap.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </DataPoints>
          <DataPoints dataName="Market Cap Dominance">
            {cryptoData.marketData.marketCapDominance}%
          </DataPoints>
          <DataPoints dataName="Volume / Market Cap">
            {cryptoData.marketData.volumeMarketCapRatio}
          </DataPoints>
          <DataPoints dataName="All-Time High">
            <AllTimeHigh allTimeHigh={cryptoData.marketData.allTimeHigh} />
          </DataPoints>
          <DataPoints dataName="All-Time Low">
            <AllTimeLow allTimeLow={cryptoData.marketData.allTimeLow} />
          </DataPoints>
        </div>
      </div>
    </div>
  );
}

export function PerformanceCard() {
  const [cryptoData, setCryptoData] = useState<CryptoData>(initialState);
  useEffect(() => {
    // setCryptoData here
  }, []);

  return (
    <div className="flex flex-col w-full md:px-5 px-1 pt-6 pb-10 rounded-xl gap-5 bg-white">
      <div className="flex flex-col w-full gap-5">
        <h2 className="text-2xl font-semibold">Performance</h2>
        <HighLowGradientLine showArrow />
        <HighLowGradientLine />
        <Fundamentals cryptoData={cryptoData} />
      </div>
    </div>
  );
}
