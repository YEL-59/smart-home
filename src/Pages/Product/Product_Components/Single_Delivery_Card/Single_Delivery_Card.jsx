

const Single_Delivery_Card = ({ icon, title, description, linkText }) => {
  return (
    <a
      href="#"
      className="flex flex-col p-2 gap-4  transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-4 lg:flex-row"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-green-100 border border-green-200 rounded-full shadow-inner">
        <div className="flex items-center justify-center w-20 h-20 text-green-500">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <h5 className="text-xl font-bold">{title}</h5>
        <p className="mb-2 text-sm text-gray-600">{description}</p>
        <span className="flex items-center text-xs font-bold text-indigo-600">
          {linkText}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
      </div>
    </a>
  );
};

export default Single_Delivery_Card;
