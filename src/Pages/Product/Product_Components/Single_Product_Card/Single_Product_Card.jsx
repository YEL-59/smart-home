import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Single_Product_Card = ({ product, postId, addToCart }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Calculate discounted price
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  // Calculate time difference in hours
  const currentTime = new Date();
  const productTime = new Date(product.timestamp);
  const timeDifferenceMs = currentTime - productTime;
  const timeDifferenceHours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));

  // Check if discount is 50% or higher
  const isHighDiscount = product.discount >= 50;

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    addToCart(product); // Pass the product object to the addToCart function
  };
  return (
    <>
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <Link to={`/Product/${postId}`}>
          <div className="relative">
            <img className="w-full" src={product.imageUrl} alt="Product" />
            <div className="hover:bg-transparent rounded-2xl transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            {product.discount && (
              <span
                className={`discount-tag rounded-lg right-0 top-0 mr-2 mt-2 px-2 py-1 bg-red-500 text-white absolute ${
                  isHighDiscount
                    ? "transition transform duration-700 animate-pulse font-bold bg-gradient-to-r from-red-500 to-pink-500"
                    : "bg-red-500"
                }`}
              >
                {product.discount}% OFF
              </span>
            )}
          </div>
        </Link>
        <div className="px-6">
          <a
            href="#"
            className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            {product.name}
          </a>
          <p className="text-gray-500 text-sm">{product.description}</p>
        </div>
        <div className="px-6 py-2 flex flex-row items-center relative">
          <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
            <svg
              height="13px"
              width="13px"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
                                    c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
                                    c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                  ></path>
                </g>
              </g>
            </svg>
            <span className="ml-1">{timeDifferenceHours} hours ago</span>
            {product.discount ? (
              <>
                <del className="ml-1">${product.price}</del>
                <span className="ml-1">${discountedPrice.toFixed(2)}</span>
              </>
            ) : (
              <span className="ml-1">${product.price}</span>
            )}
          </span>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="button"
            onClick={handleAddToCart} // Call handleAddToCart function when the button is clicked
            //onClick={addToCart}
            //onClick={() => setIsDrawerOpen(!isDrawerOpen)} // Toggle drawer visibility
          >
            +
          </button>
          <div
            className={`${
              isDrawerOpen ? "translate-x-0" : "translate-x-full"
            } fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800`}
          >
            {/* Drawer content */}
            <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
              Right drawer
            </h5>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)} // Close drawer
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              Supercharge your hiring by taking advantage of our{" "}
              <a
                href="#"
                className="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline"
              >
                limited-time sale
              </a>{" "}
              for Flowbite Docs + Job Board. Unlimited access to over 190K
              top-ranked candidates and the #1 design job board.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Learn more
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Get access{" "}
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Single_Product_Card;
