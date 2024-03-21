"use client";
import { useEffect, useState } from "react";

const useFindDevice = () => {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">(
    "mobile"
  );

  useEffect(() => {
    const checkIfMobile = () => {
      if (window.innerWidth < 768) {
        return "mobile";
      }
      if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        return "tablet";
      }
      if (window.innerWidth >= 1024) {
        return "desktop";
      } else {
        return "mobile";
      }
    };
    setDevice(checkIfMobile());

    const handleResize = () => {
      setDevice(checkIfMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};

export default useFindDevice;
