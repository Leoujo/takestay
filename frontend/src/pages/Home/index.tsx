import { useEffect, useState } from "react";
import { MAXMOBILESIZE } from "../../constants";
import { DesktopHome } from "./DesktopHome";
import { MobileHome } from "./MobileHome";

export const Home = () => {
  const [screenSize, setScreenSize] = useState<number>(0);

  const checkIsMobile = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
  }, []);
  return <>{screenSize > MAXMOBILESIZE ? <DesktopHome /> : <MobileHome />}</>;
};
