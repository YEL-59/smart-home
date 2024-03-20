const Card_title_Section = ({ card_title }) => {
    return (
      <>
        <div className="max-w-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
            {card_title}
          </h2>
        </div>
      </>
    );
  };
  
  export default Card_title_Section