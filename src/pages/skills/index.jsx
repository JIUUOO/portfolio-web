export default function Skills(props) {
  return (
    <div className={props.currSlide === 1 ? "" : "hidden"}>
      <div className="flex w-screen h-screen bg-blue-100">
        <div>제 기술 스택이에요</div>
        <div>클릭하여 다음 슬라이드로 이동하세요</div>
      </div>
    </div>
  );
}
