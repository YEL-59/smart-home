import { useState } from "react";


const Single_SocialIcon = ({ icon, hoverIconSrc, alt, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && hoverIconSrc ? (
          <img src={hoverIconSrc} alt={alt} />
        ) : (
          icon
        )}
      </a>
    </>
  );
};

export default Single_SocialIcon
