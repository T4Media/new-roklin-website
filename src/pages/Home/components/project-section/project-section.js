import ProjectCarousel from "./../../../../components/project-carousel/project-carousel";
import img_1 from "../../../../images/projects/1.jpg";
import img_2 from "../../../../images/projects/2.jpg";
import img_3 from "../../../../images/projects/3.jpg";
import img_4 from "../../../../images/projects/4.jpg";
import img_5 from "../../../../images/projects/5.jpg";
import img_6 from "../../../../images/projects/6.jpg";

const ProjectSection = () => {
  var items = [
    { image: img_1, name: "Privacy Curtains" },
    { image: img_2, name: "Custom Branded Chair Covers" },
    { image: img_3, name: "Clear Window Shower Curtains" },
    { image: img_4, name: "Urban Air Custom Table Covers" },
    { image: img_5, name: "Privacy Curtains" },
    { image: img_6, name: "Custom Branded Chair Covers" },
  ];
  return (
    <div className="projects">
      <h1>Case Studies</h1>
      <h6>
        See some of our past projects with custom capabilities and design across
        industries
      </h6>
      <ProjectCarousel items={items} active={0} />
    </div>
  );
};

export default ProjectSection;
