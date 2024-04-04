import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navlogo from "../../../../public/images/Logo.png";
import { motion } from "framer-motion";
import { FaShoppingBag } from "react-icons/fa";
import QuantityCounter from "../QuantityCounter _Section/QuantityCounter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = ({ cartCount, clickedProducts }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEffect(() => {
    // Show a test toast notification when the component mounts
    toast.success('Test toast notification');
  }, []);
  let Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about_us" },
    { name: "Service", link: "/service" },
    { name: "Contact US", link: "/contact_us" },
    { name: "Product", link: "/product" },
  ];
  console.log("pass to navbar", clickedProducts);
  let [open, setOpen] = useState(false);
  // Define state for total price
  const [totalPrice, setTotalPrice] = useState("");

  const handleQuantityChange = (newQuantity, productId) => {
    // Find the index of the product in the clickedProducts array
    const productIndex = clickedProducts.findIndex(
      (product) => product.id === productId
    );
    if (productIndex !== -1) {
      // Update the quantity for the specific product
      const updatedProducts = [...clickedProducts];
      updatedProducts[productIndex].quantity = newQuantity;
      // Calculate the total price for the specific product
      updatedProducts[productIndex].totalPrice =
        newQuantity * updatedProducts[productIndex].price;

      setTotalPrice(updatedProducts[productIndex].totalPrice);
    }
  };
  console.log("***updated price", totalPrice);
  console.log(clickedProducts ?? []);
  //Modify receve arry to convert object.because i want to use map
  const clickedProductArray = clickedProducts? Object.values(clickedProducts): [];

  console.log("array of clicked item cart", clickedProductArray ?? []);

  return (
    <>
      <div> 
      <ToastContainer />
        <nav className="container mx-auto md:flex justify-between items-center text-black py-[18.5px] p-5 lg:py-5 px-0">
          <div className="p-2 md:p-0 lg:p-0 ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 2,
              }}
            >
              {" "}
              <img
                src={navlogo}
                alt=" main logo"
                className="w-[7rem] h-12  drop-shadow-xl"
              />
              {/* <h1>Smart home people</h1> */}
            </motion.div>
          </div>

          <motion.div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
            whileHover={{ scale: 1.1 }}
          >
            {open ? "x" : "..."}
          </motion.div>

          <motion.ul
            className={`md:flex md:items-center md:bg-inherit md:pb-0 pb-12 absolute md:static text-gray-600 bg-white md:z-auto z-[1] right-0 w-full h-screen md:h-full md:w-auto md:pl-0 pl-5 gap-5 transition-all duration-500 ease-in-out ${
              open ? "right-19" : "hidden"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "linear", duration: 2 }}
          >
            {Links.map((link) => (
              <motion.li
                key={link.name}
                className="md:ml-4 md:text-[11px] truncate md:my-0 my-7 lg:text-lg relative group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="absolute inset-x-0 bottom-0 h-.5 bg-[#089bab] border-b border-transparent transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                <Link to={link.link} className="duration-500 font-bold">
                  {link.name}
                </Link>
              </motion.li>
            ))}
            <motion.li
              className="md:hidden my-3 truncate"
              whileHover={{ scale: 1.1 }}
            >
              <Link to="booking">Booking Now</Link>
            </motion.li>
            <motion.li
              className="md:hidden truncate"
              whileHover={{ scale: 1.1 }}
            >
              <Link to="signup">Create An Account</Link>
            </motion.li>
          </motion.ul>

          <div
            className={`hidden md:flex md:items-center ml-2 md:justify-between md:gap-5 ${
              open ? "right-19" : "hidden"
            }`}
          >
            <button className="bg-[#d6e5f1] text-[#2c6777] md:text-[11px] lg:text-[16px] px-3 py-1 rounded font-semibold lg:font-medium truncate">
              <Link to="/booking">Booking now</Link>
            </button>
            <button className="bg-green-500 text-white md:text-[11px] lg:text-[16px] px-3 py-1 rounded font-semibold lg:font-medium truncate">
              <Link to="/sign_in">Sign up</Link>
            </button>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)} // Toggle drawer visibility
              className="relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <FaShoppingBag />
              {cartCount > 0 && ( // Only show the count if cartCount is greater than 0
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                  {cartCount}
                </div>
              )}
            </button>

            <div
              className={`${
                isDrawerOpen ? "translate-x-0" : "translate-x-full"
              } fixed top-0 right-0 z-40 h-screen w-[30%] p-4 overflow-y-auto transition-transform bg-white  dark:bg-gray-800`}
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
               {/* Conditional rendering based on cartCount */}
              {cartCount === 0 ? (
                <p className="mt-4 text-sm text-gray-500">
                  Add product to the cart
                </p>
              ) : (
                <div className="flex flex-col py-8 md:py-10 lg:py-8 border-t border-gray-50">
                  {clickedProductArray.map((product, index) => (
                    <div key={index} className="flex  w-full">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="h-28 w-28 object-center object-cover md:block hidden"
                      />
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="md:hidden h-28 w-28 object-center object-cover"
                      />
                      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                          {product.id}
                        </p>
                        <div className="flex items-center justify-between w-full">
                          <p className="text-base font-black leading-none text-gray-800">
                            {product.name}
                          </p>
                          <QuantityCounter
                            initialValue={product.quantity}
                            availability={product.availability}
                            onQuantityChange={(newQuantity) =>
                              handleQuantityChange(newQuantity, product.id)
                            }
                          />
                        </div>
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                          Height: 10 inches
                        </p>
                        <p className="text-xs leading-3 text-gray-600 py-4">
                          Color: Black
                        </p>
                        <p className="w-96 text-xs leading-3 text-gray-600">
                          Composition: 100% calf leather
                        </p>
                        <div className="flex items-center justify-between pt-5">
                          <div className="flex items-center">
                            <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                              Add to favorites
                            </p>
                            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                              Remove
                            </p>
                          </div>
                          <p className="text-base font-black leading-none text-gray-800">
                            {/* {totalPrice ? totalPrice : product.price} */}
                            {product.totalPrice
                              ? `$${product.totalPrice.toFixed(2)}`
                              : `$${product.price}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
      <div></div>
    </>
  );
};

export default NavBar;