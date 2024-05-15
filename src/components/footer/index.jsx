export default function Footer() {
  let hasTouchScreen = false;

  if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
  }

  if (hasTouchScreen) {
    alert("mobile");
  }

  return (
    <div className="col-span-12 text-center italic">
      <p className="text-xs">클릭하여 다음 슬라이드로 이동하세요</p>
    </div>
  );
}
