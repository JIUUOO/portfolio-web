import { useContext } from "react";
import Footer from "../../components/footer";
import { GlobalContext } from "../../context";

export default function Template(props) {
  const { currSlide } = useContext(GlobalContext);

  return (
    <div className={currSlide === props.slideNo ? "" : "hidden"}>
      <div className="container mx-auto flex place-content-center">
        <div className="flex flex-col place-content-between min-h-screen p-16">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">{props.title}</h1>
          </div>
          <div>{props.content}</div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
