import Template from "./template";

export default function Skills(props) {
  return (
    <Template
      slideNo={props.slideNo}
      title="저는 이런 기술 스택을 보유하고 있습니다"
      content={
        <div>
          <div className="col-span-12">
            <h2 className="text-xl font-semibold">Front-End</h2>
            <p className="py-1">
              <ul className="list-disc list-inside">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
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
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="col-span-12">
            <h2 className="text-xl font-semibold">그 외</h2>
            <ul className="list-disc list-inside">
              <li>Excel VBA</li>
              <li>Google Sheets</li>
              <li>Arduino</li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
