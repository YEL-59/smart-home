import ArrowIcon from "./Breadcrumb_Components/ArrowIcon";
import HomeIcon from "./Breadcrumb_Components/HomeIcon.jsx";


const Breadcrumb_Section = ({items}) => {
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          {items.map((item, index) => (
            <li key={index} className="inline-flex items-center">
              {item.icon && item.icon === "home" && <HomeIcon />}
              {item.icon && item.icon === "arrow" && <ArrowIcon />}
              <a href={item.href} className={item.linkClasses}>
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumb_Section