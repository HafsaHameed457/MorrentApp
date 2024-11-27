import Logo from "../../assets/logo.svg";
import Favorite from "../../assets/favourite.svg";
import Notification from "../../assets/notification.svg";
import Profile from "../../assets/profile.svg";
import Settings from "../../assets/settings.svg";
import useRouter from "../../hooks/useRouter";
import { StyledButton } from "../helpers/GeneralComponents.styled";
import useMediaQuery from "../helpers/MediaQuery";
import { LeftSection, NavLink, NavbarContainer } from "./Navbar.styled";
const navLinks = [
  {
    title: "Home",
    ref: "/",
  },
  {
    title: "Solutions",
    ref: "/solution",
  },
  {
    title: "Insights",
    ref: "/insight",
  },
  {
    title: "Contact",
    ref: "/contact",
  },
];
const Navbar: React.FC = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 750px)");

  return (
    <NavbarContainer
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        flexDirection: isMobile ? "column" : "row",
        zIndex: 100,
      }}
    >
      <a onClick={() => router.navigate("/")}>
        <img src={Logo} alt="Logo" />
      </a>

      <LeftSection>
        <img src={Favorite} alt="Favourite" />
        <img src={Notification} alt="Notification" />
        <img src={Settings} alt="Settings" />
        <img src={Profile} alt="Profile" />
      </LeftSection>
    </NavbarContainer>
  );
};

export default Navbar;
