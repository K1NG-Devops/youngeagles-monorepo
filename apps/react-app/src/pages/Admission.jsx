import { useEffect } from "react";

const Admission = () => {
  useEffect(() => {
    window.location.href = "http://localhost:4200/login";
  }, []);

  return null; // Nothing shown
};

export default Admission;
