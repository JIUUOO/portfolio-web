import Template from "./template";

export default function Intro({ slideNo }) {
  return (
    <Template
      slideNo={slideNo}
      title="웹 백엔드 개발자로 성장하는 민지우입니다"
      content={
        <div>
          <h2 className="text-xl font-semibold">
            저는 단 <span className="underline underline-offset-3">3가지</span>
            만 실천하여 성장하고 있습니다.
          </h2>
          <p>
            <span className="block">
              그것은 바로 <span className="font-extrabold">일</span>,{" "}
              <span className="font-extrabold">공부</span>,{" "}
              <span className="font-extrabold">운동</span>
              입니다.
            </span>
          </p>
          <ul className="list-disc list-inside">
            <li>
              (2024.01~02) 🏢 배달 어플 회사에서 BO를 이용한 점주 및 고객 데이터
              관리 근무 경험이 있습니다.
            </li>
            <li>
              (2024.03~) 👨‍🏫 코딩 학원에서 C언어 및 Python 코칭을 하는 보조교사로
              근무하고 있습니다.
            </li>
            <li>
              (2024.03~) 👨‍🏫 영어 학원에서 중고등부 보조교사로 근무하고 있습니다.
            </li>
          </ul>
          <p>
            <span className="block py-2">
              📚 웹 개인공부를 하고 있고 📷 공부 영상을 기록하여 Youtube에
              업로드하고 있습니다.
            </span>
            <span className="block">
              👟 유산소 러닝과 💪 근력 운동을 꾸준히 하며 뒤처지지 않는 체력과
              에너지를 기르고 있습니다.
            </span>
          </p>
        </div>
      }
    />
  );
}
