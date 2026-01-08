import { FaRegFaceSmileBeam } from "react-icons/fa6";
import Feature from "./feature";
import "./FeatureList.css";
import { RxUpdate } from "react-icons/rx";
import { BiSupport } from "react-icons/bi";
import { useSelector } from "react-redux";

const featureList = [
  {
    id: 1,
    title: "پشتیبانی قوی",
    icon: <BiSupport />,
    desc: " ",
  },
  {
    id: 2,
    title: "رضایت دانشجوها ",
    icon: <FaRegFaceSmileBeam />,
    desc: " ",
  },
  {
    id: 3,
    title: " بروز رسانی",
    icon: <RxUpdate />,
    desc: " ",
  },
];
function FeatureList() {
    const {theme} = useSelector(store => store.global);
  return (
    <div className={`featureListContainer ${theme}`}>
      <div className="container">
        <h2>چرا آناناس قرمز؟</h2>
        <div className="featuresList">
          {featureList.map((feature) => (
            <Feature key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default FeatureList;
