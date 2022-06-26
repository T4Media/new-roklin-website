import React from "react";
import Panel from "./panel";
import roman from "../../images/carousel/roman.jpg";
import blackout from "../../images/carousel/blackout.JPG";
import curtains from "../../images/carousel/curtains1.jpg";

const Products = () => {
  const productsDescription = [
    {
      id: 1,
      image: roman,
      name: "ROMAN SHADE FABRIC",
      description:
        "“Simplistic yet chic …roman shades enhances the beauty of any room with its minimalistic appearance and sleek appeal”",
    },
    {
      id: 2,
      image: blackout,
      name: "100% BLACKOUT FABRIC",
      description:
        "“Create night in your room outside for calmness and peaceful rejuvenation of your energy after an exhausting activity.“",
    },
    {
      id: 3,
      image: curtains,
      name: "CURTAIN FABRIC",
      description:
        "“ …Indulge in the vastness of our collection from solid colors to printed to sheers with vibrating themes of contemporary, classic and traditional blends to showcase your taste”",
    },
  ];

  return (
    <Panel
      image={productsDescription[0].image}
      name={productsDescription[0].name}
      description={productsDescription[0].description}
    />
  );
};

export default Products;
