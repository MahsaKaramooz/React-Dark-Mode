import { FaBootstrap, FaReact } from "react-icons/fa";
import "./CoursesIcons.css";
import { SiMongodb, SiMysql, SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { useSelector } from "react-redux";

function CoursesIcons() {
  const {theme} = useSelector(store => store.global)
  return (
    <div className={`coursesIconContainer ${theme}`}>
      <div className="container">
        <h2>دنبال چه آموزشی میگردی؟</h2>
        <div className="courseIconsList">
          <div className="courseIcon">
            <FaReact />
          </div>
          <div className="courseIcon">
            <SiNextdotjs />
          </div>
          <div className="courseIcon">
            <FaNodeJs />
          </div>
          <div className="courseIcon">
            <IoLogoJavascript />
          </div>
          <div className="courseIcon">
            <FaBootstrap />
          </div>
          <div className="courseIcon">
            <RiTailwindCssFill />
          </div>
          <div className="courseIcon">
            <SiMongodb />
          </div>
          <div className="courseIcon">
            <SiMysql />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesIcons;
