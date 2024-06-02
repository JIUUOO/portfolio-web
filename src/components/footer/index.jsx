import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function Footer() {
  let hasTouchScreen = false;

  // find out whether user's device is on mobile or desktop
  if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
  }

  const desktopMessage = "클릭하여";
  const mobileMessage = "화면을 눌러";

  const { currSlide } = useContext(GlobalContext);

  return (
    <div className="text-center">
      <p className="text-xs">
        <span className="block italic">
          {hasTouchScreen ? mobileMessage : desktopMessage} 다음 슬라이드로
          이동하세요
        </span>
        <span className="block">{currSlide + 1}</span>
      </p>
    </div>
  );
}
