import SkillsCarousel from "./SkillsCarousel";
import { skillsStyle, skillsJs, skillsBackend } from "../public/skills.json";

export default function SKillSection() {
  return (
    <>
      <div
        id="skills"
        className="skills-section w-full min-h-screen bg-white pt-10 pb-20"
      >
        <div className="md:container md:mx-auto">
          <h2 className="text-black text-center text-2xl font-bold">
            My Skills
          </h2>
          <div className="h-1 bg-blue-700 w-10 rounded my-4 mx-auto"></div>
          <p className="text-gray-900 text-center mt-3 px-5">
            The technologies I have learned and used over the years.
          </p>
          <div className="md:w-3/4 w-full mx-auto mt-10">
            <SkillsCarousel
              directionDefault={true}
              data={skillsStyle}
              title="Web Layout and Styling"
            />
            <SkillsCarousel
              directionDefault={false}
              data={skillsJs}
              title="Javascript Development"
            />
            <SkillsCarousel
              directionDefault={true}
              data={skillsBackend}
              title="Backend • Database • State Management"
            />
          </div>
        </div>
      </div>
    </>
  );
}
