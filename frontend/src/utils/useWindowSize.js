import { useEffect, useState } from "react";
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState([0, 0]);
  useEffect(() => {
    const updatesize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updatesize);
    return () => {
      window.removeEventListener("resize", updatesize);
    };
  }, []);
  return {
    width: windowSize[0],
    height: windowSize[1],
  };
};
