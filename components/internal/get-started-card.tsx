import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export function GetStarted() {
  return (
    <div className="flex flex-col w-full rounded-lg gap-5 bg-primary p-10 text-white items-center text-center">
      <h2 className="font-bold text-2xl">Get Started with KoinX for FREE</h2>
      <h3 className="font-medium text-sm">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </h3>
      <Image
        src="/images/getting-started.svg"
        alt="Get Started"
        width={600}
        height={400}
        className=" w-40"
      />
      <Button variant={"secondary"} className="font-semibold hover:bg-white/80">
        Get Started for FREE <MoveRight />
      </Button>
    </div>
  );
}
