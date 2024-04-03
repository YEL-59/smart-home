
import Single_Product_Details_left from "../Single_Product_Details_Left/Single_Product_Details_Left";
import { CiStar } from "react-icons/ci";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";

import Single_Delivery_Card from "../Single_Delivery_Card/Single_Delivery_Card";
import Single_Product_Delivery_Section from "../Single_Product_Delivery_Section/Single_Product_Delivery_Section";
import Secondary_Title_Section from "../../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section";
import Product_List from "../Product_List/Product_List";
const Single_Product_Details = () => {
  // Sample products data
  const products = [
    {
      name: "Product 1",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-1.png",

      price: 300,
      discount: 70,
      category: "Photos",
      title: "Best View in New Yjlork City",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T04:30:00",
      postId: "123",
    },
    {
      name: "Product 2",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-2.png",

      price: 900,
      discount: 20,
      category: "Photos",
      title: "Best View in ",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T10:30:00",
      postId: "124",
    },
    {
      name: "Product ",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-3.png",

      price: 1300,
      discount: 55,
      category: "Photos",
      title: "Best View in New ",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T10:30:00",
      postId: "125",
    },
    {
      name: "Product ",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-4.png",

      price: 200,
      discount: 50,
      category: "Photos",
      title: "Best View in New York Cit",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T09:30:00",
      postId: "126",
    },
    {
      name: "Product 1",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-5.png",

      price: 900,
      // discount: 35,
      category: "Photos",
      title: "Best View in New York ",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T01:30:00",
      postId: "127",
    },
    {
      name: "Product 8",
      imageUrl: "../../../public/images/Product_Page_Images/product_img-6.png",

      price: 100,
      // discount: 10,
      category: "Photos",
      title: "Best View in New York Ci",
      description: "The city that never sleeps",
      timestamp: "2024-03-17T20:30:00",
      postId: "128",
    },
    // Add more products as needed
  ];

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <Single_Product_Details_left />

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            Smart Things Small DIY
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <CiStar />
              </span>
              <span>
                <CiStar />
              </span>
              <span>
                <CiStar />
              </span>
              <span>
                <CiStar />
              </span>
              <span>
                <CiStar />
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
            <div className="border-l-2 ml-2 ">
              <span className="ml-2">In Stock</span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span className="text-green-600">In Stock</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600">Apex</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              <span className="text-gray-600">Sofa</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU: </span>
              <span className="text-gray-600">BE45VGRT</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-primary font-semibold">$45.00</p>
            <p className="text-base text-gray-400 line-through">$55.00</p>
          </div>

          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius
            eum reprehenderit dolore vel mollitia optio consequatur hic
            asperiores inventore suscipit, velit consequuntur, voluptate
            doloremque iure necessitatibus adipisci magnam porro.
          </p>

          {/* <div className="pt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
            <div className="flex items-center gap-2">
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xs"
                  className="hidden"
                />
                <label
                  for="size-xs"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XS
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xs"
                  className="hidden"
                />
                <label
                  for="size-xs"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XS
                </label>
              </div>
              
            </div>
          </div> */}

          <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
            <a
              href="#"
              className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
            >
              <i className="fa-solid fa-bag-shopping"></i> Add to cart
            </a>
            <a
              href="#"
              className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
            >
              <i className="fa-solid fa-heart"></i> Wishlist
            </a>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-5 p-6 ">
            <Single_Delivery_Card
              icon={<TbTruckDelivery className="w-10 h-10" />}
              title="Free Delivery"
              description="Enter your postal code for Delivery Availability"
              linkText="View the option"
            />
            <Single_Delivery_Card
              icon={<TbTruckReturn className="w-10 h-10" />}
              title="Return Delivery"
              description="Free 30 Days Delivery Returns. Details"
              linkText="View the policy"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
          Product details
        </h3>

        <div className="w-3/5 pt-6">
          <div className="text-gray-600"></div>

          <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                Color
              </th>
              <th className="py-2 px-4 border border-gray-300 ">
                Blank, Brown, Red
              </th>
            </tr>
          </table>
        </div>
      </div>
      <div className="">
        <Single_Product_Delivery_Section />
      </div>
      <div className="mt-5 mb-5 container mx-auto">
        <Secondary_Title_Section
          secondary_title={"Related Product"}
          active={"active"}
        />

        <div className="container mx-auto  mt-5">
          <Product_List products={products} />
        </div>
      </div>
    </>
  );
};

export default Single_Product_Details;
