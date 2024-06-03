import { useContext } from "react";
import Footer from "../../components/footer";
import { GlobalContext } from "../../context";
import "./style.css";

export default function Template({ slideNo, title, content, isEnd = false }) {
  const { currSlide } = useContext(GlobalContext);

  return (
    <div className={currSlide === slideNo ? "" : "hidden"}>
      <div
        className={
          "flex place-items-center h-screen overflow-hidden" +
          (isEnd ? " bg-black" : "")
        }
      >
        <div className="container mx-auto px-4 flex flex-col place-content-between gap-5 screen">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
          </div>
          <div>{content}</div>
          <div>
            {isEnd ? (
              <div className="text-xs text-white text-center">
                <span className="block italic">마지막 슬라이드입니다</span>
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
