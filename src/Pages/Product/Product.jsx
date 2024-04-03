import { useState } from "react";
import Product_Details from "./Product_Details/Product_Details";
import NavBar from "../../Components/Shareable_Components/NavBar/NavBar";

const Product = () => {
  const [navfix, setNavfix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
      //console.log(scrollY)
    } else {
      setNavfix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  const [cartCount, setCartCount] = useState(0);
  const [clickedProducts, setClickedProducts] = useState([]); // Array to hold clicked products
  // Function to handle adding item to cart
  const addToCart = (product) => {
    // Check if the product is already clicked
    if (!clickedProducts.some((p) => p.id === product.id)) {
      setCartCount(cartCount + 1);
      // Update clickedProducts array with new clicked product
      setClickedProducts((prevClickedProducts) => [ product,...prevClickedProducts,]);
    }
    console.log("Clicked products:", clickedProducts);
    //console.log(product);
  };

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Product 1",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-1.png",

      price: 300,
      discount: 70,
      category: "Photos",
      title: "Blooth speker",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T04:30:00",
      PostId: "123",
      quantity:1
    },
    {
      id: 2,
      name: "Product 2",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-2.png",

      price: 900,
      discount: 20,
      category: "Photos",
      title: "home cleaner ",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T10:30:00",
      PostId: "124",
      quantity:1
    },
    {
      id: 3,
      name: "Product 3",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-3.png",

      price: 1300,
      discount: 55,
      category: "Photos",
      title: "candel",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T10:30:00",
      PostId: "125",
      quantity:1
    },
    {
      id: 4,
      name: "Product 4",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-4.png",

      price: 200,
      discount: 50,
      category: "Photos",
      title: "digital watch",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T09:30:00",
      PostId: "126",
      quantity:1
    },
    {
      id: 5,
      name: "Product 5",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-5.png",

      price: 900,
      // discount: 35,
      category: "Photos",
      title: "light ",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T01:30:00",
      PostId: "127",
      quantity:1
    },
    {
      id: 6,
      name: "Product 6",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-6.png",

      price: 100,
      // discount: 10,
      category: "Photos",
      title: "digital pad",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T20:30:00",
      PostId: "128",
      quantity:1
    },
    // Add more products as needed
  ];
  return (
    <>
      <section>
        <div
          className={`z-20 fixed top-0 bg-white w-full transition-all duration-300 ease-in-out ${
            navfix ? "shadow-lg bg-white" : ""
          }`}
        >
          <NavBar
            cartCount={cartCount}
            addToCart={addToCart}
            product={products}
            clickedProducts={clickedProducts}
          />
        </div>
        <div className="mt-24">
          <Product_Details addToCart={addToCart} products={products} />
        </div>
      </section>
    </>
  );
};

export default Product;
