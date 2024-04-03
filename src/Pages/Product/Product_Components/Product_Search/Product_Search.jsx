import { useState } from "react";
import Single_Product_Card from "../Single_Product_Card/Single_Product_Card";

const Product_Search = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    // console.log(query)
    setSearchQuery(query);

    // Filter products based on search query
    const filtered = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        (product.discount && product.discount.toString().includes(query))
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <section>
      <div>
        <form className="max-w-4xl mt-5 mb-5 ">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              value={searchQuery}
              onChange={handleSearch}
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {/* Display filtered products */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-3 gap-5">
          {filteredProducts.map((product, index) => (
            <div key={index}>
              <Single_Product_Card product={product} />
              {/* Render each filtered product */}
            </div>
          ))}
        </div>
      ) : (
        <p>No matching products found.</p>
      )}
    </section>
  );
};

export default Product_Search;
