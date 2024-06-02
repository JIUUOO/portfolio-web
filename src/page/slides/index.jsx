import { useContext } from "react";
import { GlobalContext } from "../../context";
import Intro from "./intro";
import Skills from "./skills";
import Contact from "./contact";
import End from "./end";
import Footer from "../../components/footer";

import Template from "./template";

export default function Slides() {
  return (
    <div>
      <Intro slideNo={0} />
      <Skills slideNo={1} />
      <Contact slideNo={2} />
      <End slideNo={3} />
    </div>
  );
}
