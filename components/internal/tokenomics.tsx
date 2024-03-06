import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export function TokenomicsCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col w-full md:px-5 px-1 gap-4 pt-6 pb-10 rounded-xl bg-white",
        className
      )}
    >
      <h2 className="font-semibold text-2xl py-2">Tokenomics</h2>
      <h3 className="font-semibold text-lg">Initial Distribution</h3>
      <div className="flex  items-center  gap-5">
        <Image
          src="/images/donut-chart.svg"
          alt="Initial Distribution"
          width={150}
          height={150}
          className="w-38 h-38"
        />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 justify-around">
            <div className="min-w-3 min-h-3 bg-[#0082FF] rounded-full"></div>
            <p className="font-medium">Crowdsale investors: 80%</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="min-w-3 min-h-3 bg-[#FAA002] rounded-full"></div>
            <p className="font-medium">Foundation: 20%</p>
          </div>
        </div>
      </div>

      <p className="font-medium">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
}
