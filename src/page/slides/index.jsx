import Intro from "./intro";
import Skills from "./skills";
import Contact from "./contact";
import End from "./end";
import "./style.css";

export default function Slides() {
  return (
    <div>
      {/* <div>
        <svg className="absolute paper hidden">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.17"
              numOctaves="100"
              stitchTiles="stitch"
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#noiseFilter)"
            opacity="0.12"
          />
        </svg>
      </div> */}
      <Intro slideNo={0} />
      <Skills slideNo={1} />
      <Contact slideNo={2} />
      <End slideNo={3} />
    </div>
  );
}
