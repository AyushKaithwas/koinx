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
    <div className={cn("flex items-start gap-2 rounded-md px-4 py-6", bgColor)}>
      <Image
        src={icon}
        alt="icon"
        width={20}
        height={20}
        className="w-10 h-10 rounded-full"
      />
      <div>
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-sm text-[#44475B]">{description}</p>
      </div>
    </div>
  );
}

export function SentimentCard() {
  return (
    <div className="flex flex-col">
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
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          <CarouselItem className="pl-2 md:pl-4 basis-1/2">
            <CarouselItemEach
              bgColor="bg-blue-100"
              icon="/images/icons/news-icon.svg"
              title="Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
              description="Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
            />
          </CarouselItem>
          <CarouselItem className="pl-2 md:pl-4">
            <CarouselItemEach
              bgColor="bg-green-100"
              icon="/images/icons/rising-icon.svg"
              title="Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
              description="Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
