import CoursesSection from "../../components/courseCard/CoursesSection";
import CoursesIcons from "../../components/coursesIcons/CoursesIcons";
import FeatureList from "../../components/features/FeatureList";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <CoursesIcons />
      <FeatureList />
      <CoursesSection />
     
    </>
  );
}
export default HomePage;
