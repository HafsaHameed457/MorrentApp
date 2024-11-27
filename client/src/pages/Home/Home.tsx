import { Content, HomeContainer, ParallaxContainer } from "./Home.styled";
import HomeImg from "../../assets/home.jpg";
import { useEffect, useState } from "react";
import {
  H2,
  H4,
  StyledButton,
} from "../../components/helpers/GeneralComponents.styled";
import useMediaQuery from "../../components/helpers/MediaQuery";

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const isMobile = useMediaQuery("(max-width: 450px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return <HomeContainer></HomeContainer>;
};

export default Home;
