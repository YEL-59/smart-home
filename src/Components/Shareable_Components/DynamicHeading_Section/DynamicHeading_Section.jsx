import { useLocation } from "react-router-dom";

const DynamicHeading_Section = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const pageTitle = getPageTitle(pathname);

  function getPageTitle(pathname) {
    // Split the URL path by '/' and get the last segment
    const segments = pathname.split("/");
    const lastSegment = segments[segments.length - 1];

    // Convert the last segment to title case
    return lastSegment
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }

  return (
    <h2 className="text-6xl font-bold text-white text-start mt-32 mb-4">
      {pageTitle}
    </h2>
  );
};

export default DynamicHeading_Section;