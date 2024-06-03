import { useContext } from "react";
import Footer from "../../components/footer";
import { GlobalContext } from "../../context";

export default function Template({ slideNo, title, content, isEnd = false }) {
  const { currSlide } = useContext(GlobalContext);
  const freq = [0.1, 0.12, 0.05, 0.2];
  const opac = [0.11, 0.08, 0.06, 0.1];
  console.log(freq[currSlide]);

  return (
    <div className={currSlide === slideNo ? "" : "hidden"}>
      <div
      // className={
      //   "flex place-items-center h-screen overflow-hidden" +
      //   (isEnd ? " bg-black" : "")
      // }
      >
        <svg className="absolute paper">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={freq[currSlide]}
              numOctaves="100"
              stitchTiles="stitch"
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#noiseFilter)"
            opacity={opac[currSlide]}
          />
        </svg>
        <div className="absolute screen container mx-auto px-4 flex flex-col gap-5 place-content-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold opacity-90">
              {title}
            </h1>
          </div>
          <div className="opacity-90">{content}</div>
          <div className="opacity-70">
            {isEnd ? (
              <div className="text-xs text-center">
                <span className="block italic">슬라이드가 종료되었습니다</span>
                <span className="block pt-1">&nbsp;</span>
              </div>
            ) : (
              <Footer />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
