import { useState } from "react";
import Secondary_Title_Section from "../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section";
import Product_Category from "../Product_Components/Product_Category/Product_Category";
import Price_Range_Selector from "../Product_Components/Price_Range_Selector/Price_Range_Selector";
import Slider from "../Product_Components/Slider/Slider";
import Product_List from "../Product_Components/Product_List/Product_List";
import Product_Search from "../Product_Components/Product_Search/Product_Search";


const Product_Details = ({ addToCart, products }) => {
  const priceRanges = [
    { label: "$0 - $50", min: 0, max: 50, index: 1 },
    { label: "$51 - $100", min: 51, max: 100, index: 2 },
    { label: "$200 - $700", min: 200, max: 700, index: 2 },
    { label: "$700 - $1500", min: 700, max: 1500, index: 2 },
    // Add more price ranges as needed
  ];

  const [filteredProducts, setFilteredProducts] = useState([]);

  // Function to set the filtered products
  const handleFilteredProducts = (filtered) => {
    setFilteredProducts(filtered);
  };



  const slides = [
    {
      image: "../../../public/images/Slider/Slider_img.png",
      heading: "Smart Air Purifier",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      buttonText: "Shop now",
    },
    {
      image: "../../../public/images/Slider/Slider_img.png",
      heading: "Another Heading",
      description: "Another description goes here.",
      buttonText: "Shop now",
    },
    {
      image: "../../../public/images/Slider/Slider_img.png",
      heading: "Yet Another Heading",
      description: "Yet another description goes here.",
      buttonText: "Shop now",
    },
  ];

  // const [slides, setSlides] = useState([]);

  // useEffect(() => {
  // Fetch data from the API
  // const fetchData = async () => {
  // try {
  //  const response = await fetch("your_api_endpoint");
  //  if (!response.ok) {
  //    throw new Error("Failed to fetch data");
  //  }
  //      const data = await response.json();
  //      setSlides(data.slides);
  //    } catch (error) {
  //      console.error("Error fetching data:", error);
  //    }
  //  };

  //    fetchData();
  //  }, []);
  return (
    <>
      <section>
        <div>
          <div className="container mx-auto grid grid-cols-12">
            <div className="col-span-12 lg:col-span-3">
              <div>
                <div className=" border-blue-400 border-l-8">
                  <Secondary_Title_Section
                    secondary_title={"Product Category"}
                  />
                </div>
                <div>
                  <Product_Category />
                </div>
                <div className="mt-5">
                  <div className=" border-blue-400 border-l-8">
                    <Secondary_Title_Section
                      secondary_title={"Product Price"}
                    />
                  </div>
                  <div>
                    <Price_Range_Selector
                      ranges={priceRanges}
                      products={products}
                      setFilteredProducts={setFilteredProducts}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <div>
                <Slider slides={slides} />
              </div>
              <div>
                <div className="mt-2">
                  <Secondary_Title_Section
                    secondary_title={"Our Collection Of Products"}
                  />
                </div>
                {/* Pass products and handleFilteredProducts as props to Product_Search */}
                <Product_Search
                  products={products}
                  setFilteredProducts={handleFilteredProducts}
                />
              </div>
              <div className="mt-10">
                {/* Render Product_List with filteredProducts if available, otherwise render all products */}
                {filteredProducts.length > 0 ? (
                  <Product_List
                    products={filteredProducts}
                    addToCart={addToCart}
                  />
                ) : (
                  <Product_List
                    products={products}
                    postId={products.PostId}
                    addToCart={addToCart}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product_Details;
