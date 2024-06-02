import Template from "./template";

export default function Skills(props) {
  return (
    <Template
      slideNo={props.slideNo}
      title="저는 이런 기술 스택을 보유하고 있습니다"
      content={
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-1">
            <h2 className="text-xl font-semibold">Front-End</h2>
            <ul className="list-disc list-inside">
              <li>HTML</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>JavaScript</li>
              <li>
                <b>R</b>eact.js
              </li>
            </ul>
          </div>
          <div className="p-1">
            <h2 className="text-xl font-semibold">Back-End</h2>
            <ul className="list-disc list-inside">
              <li>Python</li>
              <li>Java</li>
              <li>
                <b>N</b>ode.js
              </li>
              <li>
                <b>E</b>xpress.js
              </li>
              <li>
                <b>M</b>ongoDB
              </li>
            </ul>
          </div>
          <div className="p-1">
            <h2 className="text-xl font-semibold">그 외</h2>
            <ul className="list-disc list-inside">
              <li>C</li>
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
