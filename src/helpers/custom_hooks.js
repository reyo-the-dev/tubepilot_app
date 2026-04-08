import { useState, useEffect } from "react";

function useDeviceType() {
  const [device, setDevice] = useState({
    mobile: false,
    tablet: false,
    desktop: true,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setDevice({
        mobile: width < 768,
        tablet: width >= 768 && width <= 1024,
        desktop: width > 1024,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
}

export default useDeviceType;
