import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

function AlternateCard({
  title,
  image,
  imageAlt,
  bgGradient,
}: {
  title: string;
  image: string;
  imageAlt: string;
  bgGradient: React.CSSProperties;
}) {
  return (
    <div
      className={cn("flex flex-col rounded-xl bg-green-200 p-4 max-w-[25rem]")}
      style={bgGradient}
    >
      <div className="flex gap-4 items-center">
        <Image
          src={image}
          alt={imageAlt}
          width={600}
          height={400}
          className=" w-32"
        />
        <div className="flex flex-col gap-4 w-[40%]">
          <h3 className="text-white font-bold text-xl">{title}</h3>
          <Button variant={"secondary"} className="gap-3 font-semibold">
            Check Now
            <MoveRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
const bgGradient1 = {
  background: "linear-gradient(-45deg, #0E5CAD, #79F1A4)",
};
const bgGradient2 = {
  background: "linear-gradient(-45deg, #EF3031, #FF9865)",
};

export function AboutCard() {
  return (
    <div className="flex flex-col w-full md:px-5 px-1 pt-6 pb-10 rounded-xl bg-white">
      <h2 className="font-semibold text-2xl">About Bitcoin</h2>
      <div className="flex flex-col border-b py-5 gap-2">
        <h3 className="font-bold text-lg">What is Bitcoin?</h3>
        <p className="font-medium">
          Bitcoin&apos;s price today is US$16,951.82, with a 24-hour trading
          volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
          currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40%
          from its 7-day all-time low of $16,394.75. BTC has a circulating
          supply of 19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>
      <div className="flex flex-col border-b py-5 gap-2">
        <h3 className="font-bold text-lg">Lorem ipsum dolor sit amet</h3>
        <p className="font-medium">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus. <br />
          <br /> Diam praesent massa dapibus magna aliquam a dictumst volutpat.
          Egestas vitae pellentesque auctor amet. Nunc sagittis libero
          adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
          velit in senectus enim dui. Turpis tristique placerat interdum sed
          volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
          faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue
          viverra nulla et quis lobortis phasellus. Integer pellentesque enim
          convallis ultricies at.
          <br />
          <br />
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>
      <div className="flex flex-col w-full py-5 gap-5">
        <h2 className="font-semibold text-2xl">Already Holding Bitcoin?</h2>
        <div className="flex md:flex-row flex-col gap-10">
          <AlternateCard
            title="Calculate your Profits"
            image="/images/mobile-graph.png"
            imageAlt="Mobile Graph"
            bgGradient={bgGradient1}
          />
          <AlternateCard
            title="Calculate your tax liability"
            image="/images/mobile-stocks.png"
            imageAlt="Mobile Graph"
            bgGradient={bgGradient2}
          />
        </div>
      </div>
    </div>
  );
}
