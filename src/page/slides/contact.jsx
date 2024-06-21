import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  // faGoogle,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Template from "./template";

export default function Contact(props) {
  return (
    <Template
      slideNo={props.slideNo}
      title="꾸준히 성장하고 있습니다"
      content={
        <div>
          <ul>
            <li className="py-1">
              <a
                href="https://github.com/JIUUOO"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                &nbsp;GitHub
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://linkedin.com/in/jiwoo-min-3836a6300"
                target="_blank"
                className="hover:underline"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
                &nbsp;LinkedIn
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://youtube.com/@nninjiuuoo?si=hq_XSa7yhb7i7JRh"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
                &nbsp;Youtube
              </a>
            </li>
            {/* <li className="py-1">
              <a href="mailto:nninjiuuoo@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faGoogle} /> Email
              </a>
            </li> */}
          </ul>
        </div>
      }
    />
  );
}
