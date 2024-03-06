import Image from "next/image";
import { cn } from "@/lib/utils";

function TeamMemberCard({
  image,
  imageAlt,
  name,
  role,
  message,
}: {
  image: string;
  imageAlt: string;
  name: string;
  role: string;
  message: string;
}) {
  return (
    <div className="flex md:flex-row flex-col gap-4 bg-[#E8F4FD] p-4 rounded-lg items-center">
      <div className="flex flex-col gap-4 items-center justify-center text-center md:w-[30%] w-full">
        <Image
          src={image}
          alt={imageAlt}
          width={600}
          height={400}
          className=" w-32 rounded-md"
        />
        <div>
          <h3 className=" font-semibold">{name}</h3>
          <h3 className="font-medium text-[0.7rem] text-muted-foreground">
            {role}
          </h3>
        </div>
      </div>
      <p className="text-sm text-[#0F1629]">{message}</p>
    </div>
  );
}

export function TeamCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col w-full md:px-5 px-1 gap-4 pt-6 pb-10 rounded-xl bg-white md:border-0 border",
        className
      )}
    >
      <h2 className="font-semibold text-2xl py-2">Team</h2>
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
      <TeamMemberCard
        image="/images/johnSmith.png"
        imageAlt="John Smith Pic"
        name="John Smith"
        role="Designation here"
        message="Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
      />
      <TeamMemberCard
        image="/images/elinaWilliams.png"
        imageAlt="John Smith Pic"
        name="John Smith"
        role="Designation here"
        message="Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
      />
      <TeamMemberCard
        image="/images/johnSmith2.png"
        imageAlt="John Smith Pic"
        name="John Smith"
        role="Designation here"
        message="Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
      />
    </div>
  );
}
