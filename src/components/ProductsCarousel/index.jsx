import React from "react";
import Panel from "./panel";
import roman from "../../images/carousel/roman.jpg";
import blackout from "../../images/carousel/blackout2.jpg";
import curtains from "../../images/carousel/curtain.jpg";

const Products = () => {
  const [currentProduct, setCurrentProduct] = React.useState(1);

  React.useEffect(() => {
    setTimeout(() => {
      if (currentProduct > 2) {
        setCurrentProduct(1);
      } else if (currentProduct < 2) {
        setCurrentProduct(currentProduct + 1);
      }
    }, 20000);
  });

  console.log(currentProduct);

  const productsDescription = [
    {
      id: 1,
      image: roman,
      name: "ROMAN SHADE FABRIC",
      description:
        "Simplistic yet chic …roman shades enhances the beauty of any room with its minimalistic appearance and sleek appeal.",
      isButton: true,
    },
    {
      id: 2,
      image: blackout,
      name: "100% BLACKOUT FABRIC",
      description:
        "“Create night in your room when its daylight outside for calmness and peaceful rejuvenation of your energy after an exhausting activity.“",
      isButton: false,
    },
    {
      id: 3,
      image: curtains,
      name: "CURTAIN FABRIC",
      description:
        "“ …Indulge in the vastness of our collection from solid colors to printed to sheers with vibrating themes of contemporary, classic and traditional blends to showcase your taste.”",
      isButton: true,
    },
  ];

  return (
    <div className="products-panel">
      {productsDescription.map((description) => {
        if (description.id === currentProduct)
          return (
            <Panel
              image={productsDescription[currentProduct - 1].image}
              name={productsDescription[currentProduct - 1].name}
              description={productsDescription[currentProduct - 1].description}
              isButton={productsDescription[currentProduct - 1].isButton}
              productsDescription={productsDescription}
              currentProduct={currentProduct}
              setCurrentProduct={setCurrentProduct}
            />
          );
      })}
    </div>
  );
};

export default Products;
