export default function Footer() {
  let hasTouchScreen = false;

  if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
  }

  const desktopMessage = "클릭하여";
  const mobileMessage = "화면을 눌러";

  return (
    <div className="col-span-12 text-center italic">
      <p className="text-xs">
        {hasTouchScreen ? mobileMessage : desktopMessage} 다음 슬라이드로
        이동하세요
      </p>
    </div>
  );
}
