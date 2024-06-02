import Template from "./template";

export default function End(props) {
  return <Template slideNo={props.slideNo} isEnd={true} />;
}
