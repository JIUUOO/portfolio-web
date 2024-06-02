import { useContext } from "react";
import { GlobalContext } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

// import { faKeyboard } from "@fortawesome";

export default function Footer() {
  let hasTouchScreen = false;

  // find out whether user's device is on mobile or desktop
  if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
  }

  const onDesktopMessage = (
    <span>
      <FontAwesomeIcon icon={faKeyboard} />로
    </span>
  );
  const onMobileMessage = "화면을 눌러";

  const { currSlide } = useContext(GlobalContext);

  return (
    <div className="text-center">
      <p className="text-xs">
        <span className="block italic">
          {hasTouchScreen ? onMobileMessage : onDesktopMessage} 다음 슬라이드로
          이동하세요
        </span>
        <span className="block pt-1">{currSlide + 1}</span>
      </p>
    </div>
  );
}
