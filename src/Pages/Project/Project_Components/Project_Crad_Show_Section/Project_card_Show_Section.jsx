import Project_Section_Single_card from "../Project_Section_Single_card/Project_Section_Single_card";
import project from "../../../../../public/images/Project_Page_Images/project_img-1.png";
import { useEffect, useState } from "react";
const Project_card_Show_Section = () => {



   const [projects, setProjects] = useState([]);

   useEffect(() => {
    
     fetch("api")
       .then((response) => response.json())
       .then((data) => {
         setProjects(data); // Set the fetched data to the projects state
       })
       .catch((error) => {
         console.error("Error fetching projects:", error);
       });
   }, []); 
  return (
    <>
      <section>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 p-2 lg:p-0">
          {/* {projects.map((project, index) => (
            <Project_Section_Single_card
              key={index} 
              src={project.image} 
              additionalContent={project.additionalContent} 
          ))} */}

          <Project_Section_Single_card
            postId="111"
            src={project} // Pass image src as prop
            additionalContent="Additional Content 1" // Pass  additional content text as a prop
          />
          <Project_Section_Single_card
            postId="112"
            src={project} // Pass image src as prop
            additionalContent="Additional Content 1" // Pass  additional content text as a prop
          />
          <Project_Section_Single_card
            postId="113"
            src={project} // Pass image src as prop
            additionalContent="Additional Content 1" // Pass  additional content text as a prop
          />

          <Project_Section_Single_card
            postId="114"
            src={project} // Pass image src as prop
            additionalContent="Additional Content 1" // Pass  additional content text as a prop
          />
          <Project_Section_Single_card
            postId="115"
            src={project} // Pass image src as prop
            additionalContent="Additional Content 1" // Pass  additional content text as a prop
          />
          <Project_Section_Single_card
            postId="116"
            src={project} // Pass image src as prop
            additionalContent="Additional Content 1" // Pass  additional content text as a prop
          />
        </div>
      </section>
    </>
  );
}

export default Project_card_Show_Section
