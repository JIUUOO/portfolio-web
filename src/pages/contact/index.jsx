export default function Contact(props) {
  return (
    <div className={props.currSlide === 2 ? "" : "hidden"}>
      <div className="flex justify-center w-screen h-screen">
        <div className="grid grid-cols-12 m-10">
          <div className="col-span-12">
            <h1 className="text-3xl sm:text-5xl font-bold">같이 소통해요</h1>
          </div>
          <div className="col-span-12 font-semibold">
            <ul>
              <li>
                <a href="https://github.com/JIUUOO" target="_blank">
                  <svg href="../../github-mark.svg" alt="fuck"></svg> GitHub
                </a>
              </li>
              <li>
                <a href="linkedin.com/in/jiwoo-min-3836a6300" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:nninjiuuoo@gmail.com" target="_blank">
                  📧 Email
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-12 text-center italic">
            <p className="text-xs">클릭하여 다음 슬라이드로 이동하세요</p>
          </div>
        </div>
      </div>
    </div>
  );
}
