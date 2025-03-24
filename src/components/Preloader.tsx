import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 700); // Adjust timing as needed
    return () => clearTimeout(timeout);
  }, [location.pathname]); // Runs on route change

  if (!loading) return null; // Hide preloader when not loading

  return (
    <div className="preloader">
      <div className="custom-loader"></div>
    </div>
  );
};

export default Preloader;
