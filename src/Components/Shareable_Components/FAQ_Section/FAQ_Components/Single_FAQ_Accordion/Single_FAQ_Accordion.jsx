


const Single_FAQ_Accordion = ({
  title,
  content,
  index,
  openIndex,
  setOpenIndex,
}) => {
  const isOpen = openIndex === index;

  const toggleAccordion = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className="border border-gray-200 rounded mb-5">
      <button
        className="w-full py-4 px-6 text-left font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={toggleAccordion}
      >
        {title}
        <span
          className={`float-right  transition-transform duration-300 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          &#x27F1;
        </span>
      </button>
      <div
        className={`overflow-hidden transition-height  ${
          isOpen ? "h-auto " : "h-0"
        }`}
      >
        <div className="p-6">
          <p className="text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  );
};



export default Single_FAQ_Accordion;