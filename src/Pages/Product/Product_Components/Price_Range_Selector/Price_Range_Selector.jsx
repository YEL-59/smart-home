import { useState } from "react";


const Price_Range_Selector = ({ ranges, products, setFilteredProducts }) => {
   const [selectedRange, setSelectedRange] = useState(null);

   const handleRangeChange = (range) => {
     setSelectedRange(range);
      console.log("Selected Range:", selectedRange);
     // Filter products based on the selected range
     const filteredProducts = products.filter(
       (product) => product.price >= range.min && product.price <= range.max
     );
     setFilteredProducts(filteredProducts);
   };
  return (
    <>
      <ul className="mt-5 ml-5">
        {ranges.map((range, index) => (
          <li key={index}>
            <input
              type="checkbox"
              id={`range_${index}`}
              value={range}
              checked={selectedRange === range}
              onChange={() => handleRangeChange(range)}
            />
            <label htmlFor={`range_${index}`}>{range.label}</label>
          </li>
        ))}
      </ul>
      
    </>
  );
};

export default Price_Range_Selector
