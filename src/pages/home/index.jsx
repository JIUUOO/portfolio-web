import Footer from "../../components/footer";

export default function Home(props) {
  return (
    <div className={props.currSlide === 0 ? "" : "hidden"}>
      <div className="flex justify-center w-screen h-screen">
        <div className="grid grid-cols-12 m-10">
          <div className="col-span-12">
            <h1 className="text-3xl sm:text-5xl font-bold">
              웹 백엔드 개발자 민지우입니다.
            </h1>
          </div>
          <div className="col-span-12">
            <h2 className="text-xl font-semibold">
              저는 단{" "}
              <span className="underline underline-offset-3">3가지</span>만
              실천합니다.
            </h2>
            <p className="py-1">
              그것은 바로 <span className="font-extrabold">일</span>,{" "}
              <span className="font-extrabold">공부</span>,{" "}
              <span className="font-extrabold">운동</span>
              입니다.
              <ul className="list-disc list-inside">
                <li>
                  (2024.01~02) 🏢 배달 어플 회사에서 BO를 이용한 점주 및 고객
                  데이터 관리 근무 경험이 있습니다.
                </li>
                <li>
                  (2024.03 ~) 👨‍🏫 로봇코딩 학원에서 C언어 및 Python 코칭을 하는
                  보조교사로 근무하고 있습니다.
                </li>
                <li>
                  (2024.03 ~) 👨‍🏫 영어 학원에서 중고등부 보조교사로 근무하고
                  있습니다.
                </li>
              </ul>
            </p>
            <p className="py-1">
              📚 웹 개인공부를 하고 있고 📷 공부 영상을 기록하여 Youtube에
              업로드하고 있습니다.
            </p>
            <p className="py-1">
              👟 유산소 러닝과 💪 웨이트 운동을 꾸준히 하며 뒤처지지 않는 체력과
              에너지를 기르고 있습니다.
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
