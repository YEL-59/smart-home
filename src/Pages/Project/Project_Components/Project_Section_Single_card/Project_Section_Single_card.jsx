import { Link } from "react-router-dom";


const Project_Section_Single_card = ({ src, additionalContent, postId }) => {
  return (
    <Link to={`/project_details/${postId}`}>
      {" "}
      <div className="relative group">
        <img className="w-full h-[400px]" src={src} alt="Project Image" />
        <div className="absolute bottom-0 left-0 right-0 bg-[#00ABE4] opacity-0 rounded-b-xl transition duration-300 group-hover:opacity-100 group-hover:rounded-b-xl h-[70px] w-full ">
          <div className="mt-2 ml-5">
            <p className="text-xs text-white">{additionalContent}</p>

            <p className="text-xl font-semibold text-white">
              {additionalContent}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project_Section_Single_card;
