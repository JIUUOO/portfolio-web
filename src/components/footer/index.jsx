import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function Footer() {
  let hasTouchScreen = false;

  if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
  }

  const desktopMessage = "클릭하여";
  const mobileMessage = "화면을 눌러";

  const { currSlide } = useContext(GlobalContext);

  return (
    <div className="col-span-12 text-center">
      <p className="text-xs italic">
        {hasTouchScreen ? mobileMessage : desktopMessage} 다음 슬라이드로
        이동하세요
      </p>
      <p className="text-xs mt-2">{currSlide + 1}</p>
    </div>
  );
}
