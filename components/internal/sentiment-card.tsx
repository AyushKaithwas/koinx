import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { cn } from "@/lib/utils";

function CarouselItemEach({
  bgColor,
  icon,
  title,
  description,
}: {
  bgColor: string;
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className={cn("flex items-start gap-2 rounded-xl p-4  ", bgColor)}>
      <Image
        src={icon}
        alt="icon"
        width={20}
        height={20}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col gap-2">
        <h2 className="font-medium ">{title}</h2>
        <p className="text-sm text-[#44475B]">{description}</p>
      </div>
    </div>
  );
}

// function CarouselComponent
interface Props extends React.HTMLAttributes<HTMLDivElement> {}
export function SentimentCard({ className, ...props }: Props) {
  return (
    <div
      {...props}
      className="flex flex-col w-full md:px-5 px-1 pt-6 pb-10 rounded-xl gap-7 bg-white md:border-0 border"
    >
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-2xl">Sentiment</h2>
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-xl text-[#44475B]">Key Events</h2>
          <Image
            src="/images/icons/info-icon.svg"
            alt="info-icon"
            width={20}
            height={20}
            className="cursor-pointer w-5 h-5"
          />
        </div>
      </div>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          <CarouselItem className="pl-2 md:pl-4 md:basis-[60%] basis-[80%]">
            <CarouselItemEach
              bgColor="bg-[#E8F4FD]"
              icon="/images/icons/news-icon.svg"
              title="Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
              description="Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
            />
          </CarouselItem>
          <CarouselItem className="pl-2 md:pl-4 md:basis-[60%] basis-[80%]">
            <CarouselItemEach
              bgColor="bg-[#EBF9F4]"
              icon="/images/icons/rising-icon.svg"
              title="Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
              description="Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 bg-white" />
        <CarouselNext className="absolute right-2 bg-white" />
      </Carousel>
      <div className="flex flex-col items-start gap-5">
        <div className="flex gap-2 items-center">
          <h2 className="font-semibold text-xl text-[#44475B]">
            Analyst Estimates
          </h2>
          <Image
            src="/images/icons/info-icon.svg"
            alt="info-icon"
            width={20}
            height={20}
            className="cursor-pointer w-5 h-5"
          />
        </div>
        <div className="flex gap-10 md:w-[80%] w-full">
          <div className="flex w-28 h-28 rounded-full items-center justify-center  bg-[#EBF9F4]">
            <h2 className="text-[2rem] font-medium text-[#0FBA83]">76%</h2>
          </div>
          <div className="flex flex-col gap-5 flex-grow">
            <div className="w-full flex gap-3 items-center">
              <h3 className="w-[2rem]">Buy</h3>
              <div className="w-[76%] h-[0.5rem] rounded-sm bg-[#0FBA83]"></div>
              <h3>76%</h3>
            </div>
            <div className="w-full flex gap-3 items-center">
              <h3 className="w-[2rem]">Hold</h3>
              <div className="w-[8%] h-[0.5rem] rounded-sm bg-[#C7C8CE]"></div>
              <h3>8%</h3>
            </div>
            <div className="w-full flex gap-3 items-center">
              <h3 className="w-[2rem]">Sell</h3>
              <div className="w-[16%] h-[0.5rem] rounded-sm bg-[#F7324C]"></div>
              <h3>16%</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
