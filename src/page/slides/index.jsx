import { useContext } from "react";
import { GlobalContext } from "../../context";
import Intro from "./intro";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "../../components/footer";

import Template from "./template";

export default function Slides() {
  return (
    <div className="">
      <Intro slideNo={0} />
      <Skills slideNo={1} />
      <Contact slideNo={2} />
    </div>
  );
}
