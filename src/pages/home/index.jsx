export default function Home(props) {
  return (
    <div className={props.currSlide === 0 ? "" : "hidden"}>
      <div className="flex w-screen h-screen bg-red-100">
        <div className="">안녕하세요</div>
        <div>클릭하여 다음 슬라이드로 이동하세요</div>
      </div>
    </div>
  );
}
