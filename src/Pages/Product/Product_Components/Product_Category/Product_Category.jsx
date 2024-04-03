import { useState } from "react";


const Product_Category = () => {
  //   const [category, setCategory] = useState([]);

  // useEffect(() => {
   
  //   const fetchCategory = async () => {
  //     try {
  //       const response = await fetch("your_api_endpoint");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const data = await response.json();
  //       setCategory(data.category);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchCategory();
  // }, []);

  const mockData = {
    category: [
      {index:1,
        category: "Safe and Security (3)",
        titles: ["Title 1", "Title 2", "Title 3"],
      },
      {index:2,
        category: "Smart Lighting (6)",
        titles: ["Title 4", "Title 5", "Title 6"],
      },
      {
        category: "Climate Control (10)",
        titles: ["Title 4", "Title 5", "Title 6"],
      },
      {
        category: "Thermostat (120)",
        titles: ["Title 4", "Title 5", "Title 6"],
      },
      {
        category: "Entertainment (150)",
        titles: ["Title 4", "Title 5", "Title 6"],
      },
      {
        category: "Display (100)",
        titles: ["Title 4", "Title 5", "Title 6"],
      },
      // Add more categories as needed
    ],
  };
//    const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

//  const handleCategoryClick = (index) => {
//    console.log("Clicked category index:", index);
//    setOpenCategoryIndex((prevIndex) => (prevIndex === index ? null : index));
//  };


  return (
    <>
      <ul className="flex flex-col gap-2 max-w-[250px] mt-5">
        {mockData.category.map((category, index) => (
          <li key={index}>
            <details
              className="group"
              // open={index === openCategoryIndex}
              // onClick={() => handleCategoryClick(index)}
            >
              <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                <span className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  <span>{category.category}</span>
                </span>
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </summary>
              <article className="px-4 pb-4">
                <ul className="flex flex-col gap-1 pl-2">
                  {category.titles.map((title, idx) => (
                    <li key={idx}>
                      <a href="">{title}</a>
                    </li>
                  ))}
                </ul>
              </article>
            </details>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Product_Category

