import Footer from "../../components/footer";

export default function Skills(props) {
  return (
    <div className={props.currSlide === 1 ? "" : "hidden"}>
      <div className="flex justify-center w-screen h-screen">
        <div className="grid grid-cols-12 m-10">
          <div className="col-span-12">
            <h1 className="text-3xl sm:text-5xl font-bold">
              저는 이런 기술 스택을 보유하고 있어요.
            </h1>
          </div>
          <div className="col-span-12">
            <h2 className="text-xl font-semibold">Front-End</h2>
            <p className="py-1">
              <ul className="list-disc list-inside">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>React</li>
              </ul>
            </p>
          </div>
          <div className="col-span-12">
            <h2 className="text-xl font-semibold">Back-End</h2>
            <ul className="list-disc list-inside">
              <li>C</li>
              <li>Python</li>
              <li>JAVA</li>
            </ul>
          </div>
          <div className="col-span-12">
            <h2 className="text-xl font-semibold">그 외</h2>
            <ul className="list-disc list-inside">
              <li>Excel VBA</li>
              <li>Arduino</li>
            </ul>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
