import ProjectCarousel from "./../../../../components/project-carousel/project-carousel";
import img_1 from "../../../../images/projects/cotton.jpeg";
import img_2 from "../../../../images/projects/designer.jpeg";
import img_3 from "../../../../images/projects/faux_silk.jpeg";
import img_4 from "../../../../images/projects/hotel_blackout.jpeg";
import img_5 from "../../../../images/projects/linen.jpeg";
import img_6 from "../../../../images/projects/sheer.jpeg";
import img_7 from "../../../../images/projects/signature.jpeg";
import img_8 from "../../../../images/projects/velvet.jpeg";

const ProjectSection = () => {
  var items = [
    {
      image: img_1,
      name: "Cotton Curtains",
      link: "https://www.sierratextiles.com.pk/cotton_curtains",
    },
    {
      image: img_2,
      name: "Designer Curtains",
      link: "https://www.sierratextiles.com.pk/designer_curtains",
    },
    {
      image: img_3,
      name: "Faux Silk Curtains",
      link: "https://www.sierratextiles.com.pk/faux_silk_curtains",
    },
    {
      image: img_4,
      name: "Hotel Blackout Curtains",
      link: "https://www.sierratextiles.com.pk/hotel_blackout_curtains",
    },
    {
      image: img_5,
      name: "Linen Curtains",
      link: "https://www.sierratextiles.com.pk/linen_curtains",
    },
    {
      image: img_6,
      name: "Sheer Curtains",
      link: "https://www.sierratextiles.com.pk/sheer_curtains",
    },
    {
      image: img_7,
      name: "Signature Silk Curtains",
      link: "https://www.sierratextiles.com.pk/signature_silk_curtains",
    },
    {
      image: img_8,
      name: "Velvet Curtains",
      link: "https://www.sierratextiles.com.pk/velvet_curtains",
    },
  ];
  return (
    <div className="projects">
      <h1>Our Promising Quality</h1>
      <h6>
        See some of our past projects with custom capabilities and design across
        lifestyles.
      </h6>
      <ProjectCarousel items={items} active={0} />
    </div>
  );
};

export default ProjectSection;
