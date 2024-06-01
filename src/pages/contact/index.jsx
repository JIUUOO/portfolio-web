import Footer from "../../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faGoogle,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact(props) {
  return (
    <div className={props.currSlide === 2 ? "" : "hidden"}>
      <div className="flex justify-center w-screen h-screen">
        <div className="grid grid-cols-12 m-10">
          <div className="col-span-12">
            <h1 className="text-3xl sm:text-5xl font-bold">같이 소통해요</h1>
          </div>
          <div className="col-span-12 text-lg">
            <ul>
              <li className="py-1">
                <a href="https://github.com/JIUUOO" target="_blank">
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
              </li>
              <li className="py-1">
                <a
                  href="https://linkedin.com/in/jiwoo-min-3836a6300"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
                </a>
              </li>
              <li className="py-1">
                <a
                  href="https://youtube.com/@nninjiuuoo?si=hq_XSa7yhb7i7JRh"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faYoutube} /> Youtube
                </a>
              </li>
              <li className="py-1">
                <a href="mailto:nninjiuuoo@gmail.com" target="_blank">
                  <FontAwesomeIcon icon={faGoogle} /> Email
                </a>
              </li>
            </ul>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}