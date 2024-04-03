import Single_Product_Card from "../Single_Product_Card/Single_Product_Card";


const Product_List = ({ products, addToCart }) => {
  return (
    <>
      {console.log(products.length)}
      <div className="grid grid-cols-3 gap-5 ">
        {products.map((product, index) => (
          <Single_Product_Card
            key={index}
            product={product}
            postId={product.postId}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
};

export default Product_List
