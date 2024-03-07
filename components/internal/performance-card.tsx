import {
  calculateTimeDifference,
  cn,
  formatCurrency,
  formatDate,
} from "@/lib/utils";
import { CoinData, CryptoData, MarketData } from "@/types";
import Image from "next/image";

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

const LOCALE = "en-US";
const CURRENCY = "USD";

function HighLowGradientLine({
  timePeriod,
  showArrow,
  coinData,
}: {
  timePeriod: "daily" | "52week";
  showArrow?: boolean;
  coinData: CoinData;
}) {
  const percentage =
    ((coinData.price_usd - coinData.marketData.low_24h) /
      (coinData.marketData.high_24h - coinData.marketData.low_24h)) *
    100;
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col text-[#44475B] gap-2">
          <span className="text-sm ">
            {timePeriod == "daily" ? "Today's Low" : "52W Low"}
          </span>
          <span className="font-medium">
            {formatCurrency(coinData.marketData.low_24h, LOCALE, CURRENCY)}
          </span>
        </div>
        <div className="flex flex-col md:w-[70%] w-[40%] items-center">
          <div
            className="relative flex-col w-full h-[8px] rounded-md "
            style={gradientStyle}
          >
            <div className="absolute top-1" style={{ left: `${percentage}%` }}>
              <div className="flex flex-col justify-center items-center w-[10px] h-full">
                <span className=" text-[#44475B] text-sm">▲</span>
                <span className=" text-[#44475B] text-sm">
                  {formatCurrency(coinData.price_usd, LOCALE, CURRENCY)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end text-[#44475B] gap-2">
          <span className="text-sm">
            {timePeriod == "daily" ? "Today's High" : "52W High"}
          </span>
          <span className="font-medium">
            {formatCurrency(coinData.marketData.high_24h, LOCALE, CURRENCY)}
          </span>
        </div>
      </div>
    </div>
  );
}
type AllTimeHighLowProps = {
  value: number;
  percentageChange: number;
  date: string;
  isHigh: boolean;
};

function AllTimeHighLow({
  value,
  percentageChange,
  date,
  isHigh,
}: AllTimeHighLowProps) {
  const timeDifference = calculateTimeDifference(date);

  return (
    <div className="flex flex-col justify-center items-end">
      <div className="flex  text-[#44475B] gap-2">
        <span className="text-sm">
          {formatCurrency(value, LOCALE, CURRENCY)}
        </span>
        <span
          className={cn(
            "font-medium",
            percentageChange > 0 ? "text-green-400" : "text-red-400"
          )}
        >
          {percentageChange.toFixed(2)}%
        </span>
      </div>
      <div className="flex text-[#44475B] gap-2">
        <span className="text-sm">{formatDate(date)} </span>
        <span className="font-medium">{timeDifference}</span>
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

function Fundamentals({ coinData }: { coinData: CoinData }) {
  const firstSetDataPoints = [
    {
      name: `${coinData.name} Price`,
      value: formatCurrency(coinData.price_usd, LOCALE, CURRENCY),
    },
    {
      name: "24h Low / 24h High",
      value: `${formatCurrency(
        coinData.marketData.low_24h,
        LOCALE,
        CURRENCY
      )} / ${formatCurrency(coinData.marketData.high_24h, LOCALE, CURRENCY)}`,
    },
    {
      name: "7d Low / 7d High", //random as this api not available
      value: `${formatCurrency(
        coinData.marketData.low_24h - 2000,
        LOCALE,
        CURRENCY
      )} / ${formatCurrency(coinData.marketData.high_24h, LOCALE, CURRENCY)}`,
    },
    {
      name: "Trading Volume",
      value: formatCurrency(coinData.marketData.total_volume, LOCALE, CURRENCY),
    },
    {
      name: "Market Cap Rank",
      value: `#${coinData.marketData.market_cap_rank}`,
    },
  ];

  // Data points for the second div
  const secondSetDataPoints = [
    {
      name: "Market Cap",
      value: formatCurrency(coinData.marketData.market_cap, LOCALE, CURRENCY),
    },
    {
      name: "Market Cap Dominance",
      value: `45.42%`, //random as this api not available
    },
    {
      name: "Volume / Market Cap",
      value: (coinData.marketData.total_volume / coinData.marketData.market_cap)
        .toFixed(4)
        .toString(),
    },
    {
      name: "All-Time High",
      value: (
        <AllTimeHighLow
          value={coinData.marketData.all_time_high}
          percentageChange={
            ((coinData.price_usd - coinData.marketData.all_time_high) /
              coinData.marketData.all_time_high) *
            100
          }
          date={coinData.marketData.all_time_high_date}
          isHigh
        />
      ),
    },
    {
      name: "All-Time Low",
      value: (
        <AllTimeHighLow
          value={coinData.marketData.all_time_low}
          percentageChange={
            ((coinData.price_usd - coinData.marketData.all_time_low) /
              coinData.marketData.all_time_low) *
            100
          }
          date={coinData.marketData.all_time_low_date}
          isHigh={false}
        />
      ),
    },
  ];
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
          {firstSetDataPoints.map(({ name, value }) => (
            <DataPoints key={name} dataName={name}>
              {value}
            </DataPoints>
          ))}
        </div>
        <div className=" md:w-[46%] w-full px-2 md:px-0">
          {secondSetDataPoints.map(({ name, value }) => (
            <DataPoints key={name} dataName={name}>
              {value}
            </DataPoints>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PerformanceCard({ coinData }: { coinData: CoinData }) {
  // console.log(coinData);
  return (
    <div className="flex flex-col w-full md:px-5 px-1 pt-6 gap-4 rounded-xl bg-white md:border-0 border">
      <h2 className="text-2xl font-semibold">Performance</h2>
      <div className="flex flex-col w-full gap-5">
        <HighLowGradientLine timePeriod="daily" showArrow coinData={coinData} />
        <HighLowGradientLine
          timePeriod="52week"
          showArrow
          coinData={coinData}
        />
        <Fundamentals coinData={coinData} />
      </div>
    </div>
  );
}
