import { CoinData } from "@/types";
import { AlternateCard } from "./alternate-card";

const bgGradient1 = {
  background: "linear-gradient(-45deg, #0E5CAD, #79F1A4)",
};
const bgGradient2 = {
  background: "linear-gradient(-45deg, #EF3031, #FF9865)",
};
const animatedGradient1 = {
  background: "linear-gradient(-45deg, #0E5CAD, #79F1A4)",
  backgroundSize: "200% 200%",
  animation: "gradientAnimation 5s ease-in-out infinite",
};
const animatedGradient2 = {
  background: "linear-gradient(-45deg, #EF3031, #FF9865)",
  backgroundSize: "200% 200%",
  animation: "gradientAnimation 5s ease-in-out infinite",
};
const createMarkup = (htmlContent: string) => {
  const styledContent = htmlContent.replace(
    /<a /g,
    '<a style="color: #3498db; text-decoration: underline;" '
  );
  return { __html: styledContent };
};

export function AboutCard({ coinData }: { coinData: CoinData }) {
  return (
    <div className="flex flex-col w-full md:px-5 px-1 pt-6 pb-10 rounded-xl bg-white md:border-0 border">
      <h2 className="font-semibold text-2xl">About {coinData.name}</h2>
      <div className="flex flex-col border-b py-5 gap-2">
        <h3 className="font-bold text-lg">What is {coinData.name}?</h3>
        <p
          className="font-medium"
          dangerouslySetInnerHTML={createMarkup(coinData.description)}
        />
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
            animatedGradient={animatedGradient1}
          />
          <AlternateCard
            title="Calculate your tax liability"
            image="/images/mobile-stocks.png"
            imageAlt="Mobile Graph"
            bgGradient={bgGradient2}
            animatedGradient={animatedGradient2}
          />
        </div>
      </div>
    </div>
  );
}
