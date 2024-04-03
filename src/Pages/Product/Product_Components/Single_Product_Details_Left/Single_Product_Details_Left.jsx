import React, { useState } from "react";
import img1 from "../../../../../public/images/Product_Details_Page_Images/productdetails_img1.png";
import img2 from "../../../../../public/images/Product_Details_Page_Images/productdetails_img-2.png";
import img3 from "../../../../../public/images/Product_Details_Page_Images/productdetails_img-3.png";
import img4 from "../../../../../public/images/Product_Details_Page_Images/productdetails_img-4.png";
import img5 from "../../../../../public/images/Product_Details_Page_Images/productdetails_img-5.png";

const Single_Product_Details_left = () => {
  const [mainImg, setMainImg] = useState(img1);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [isMagnifierVisible, setIsMagnifierVisible] = useState(false);

  const handleImgClick = (imgSrc) => {
    setMainImg(imgSrc);
  };

  const handleMouseEnter = () => {
    setIsMagnifierVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMagnifierVisible(false);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const mouseX = e.pageX - left;
    const mouseY = e.pageY - top;
    const magnifierX = mouseX / width;
    const magnifierY = mouseY / height;
    setMagnifierPosition({ x: magnifierX, y: magnifierY });
  };

  return (
    <div className="relative flex gap-2">
      <div className="grid grid-rows-4 gap-2">
        <img
          src={img2}
          alt="product2"
          className="w-full cursor-pointer border"
          onClick={() => handleImgClick(img2)}
        />
        <img
          src={img3}
          alt="product3"
          className="w-full cursor-pointer border"
          onClick={() => handleImgClick(img3)}
        />
        <img
          src={img4}
          alt="product4"
          className="w-full cursor-pointer border"
          onClick={() => handleImgClick(img4)}
        />
        <img
          src={img5}
          alt="product5"
          className="w-full cursor-pointer border"
          onClick={() => handleImgClick(img5)}
        />
      </div>
      <div
        className="relative"
        style={{ overflow: "hidden", cursor: "crosshair" }}
        onMouseMove={handleMouseMove}
      >
        <img
          src={mainImg}
          alt="product"
          className="w-[38rem] h-[38rem] cursor-pointer border"
          onClick={() => handleImgClick(mainImg)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {isMagnifierVisible && (
          <div
            className="absolute border border-gray-500 rounded-full"
            style={{
              width: "200px",
              height: "200px",
              top: `calc(${magnifierPosition.y * 100}% - 100px)`,
              left: `calc(${magnifierPosition.x * 100}% - 100px)`,
              backgroundImage: `url(${mainImg})`,
              backgroundPosition: `calc(${
                magnifierPosition.x * 100
              }% - 100px) calc(${magnifierPosition.y * 100}% - 100px)`,
              backgroundSize: "auto 400%",
              zIndex: 999,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Single_Product_Details_left;
