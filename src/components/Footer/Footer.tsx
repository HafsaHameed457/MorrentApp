import {
  CopyRightText,
  FooterContainer,
  FooterContent,
  FooterHeadingText,
  FooterText,
} from "./Footer.styled";
import Logo from "../../assets/logo.svg";
const Footer = () => {
  const navLinks = [
    {
      title: "About",
      subLinks: [
        "How it works",
        "Featured",
        "Partnership",
        "Bussiness Relation",
      ],
    },
    {
      title: "Community",
      subLinks: ["Events", "Blog", "Podcast", "Invite a friend"],
    },
    {
      title: "Socials",
      subLinks: ["Discord", "Instagram", "Twitter", "Facebook"],
    },
  ];
  return (
    <FooterContainer>
      <FooterContent>
        <div className="flex flex-col h-[108px] justify-between w-[292px]">
          <a href="/">
            <img src={Logo} alt="Favourite" />
          </a>
          <FooterText>
            Our vision is to provide convenience and help increase your sales
            business.
          </FooterText>
        </div>
        <div className="flex w-[500px] h-[244px] justify-between w-[292px] mr-[50px]">
          {navLinks.map((link: any) => {
            return (
              <div className="flex flex-col h-[100%] justify-between">
                <FooterHeadingText>{link.title}</FooterHeadingText>
                <div className="flex flex-col h-[100%] justify-between mt-10">
                  {link.subLinks.map((sublink: any) => {
                    return <FooterText>{sublink}</FooterText>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </FooterContent>
      <hr />
      <FooterContent className="mt-7">
        <CopyRightText>©2022 MORENT. All rights reserved</CopyRightText>
        <div className="flex gap-5">
          <CopyRightText>Privacy Policy</CopyRightText>
          <CopyRightText>Terms & Condition</CopyRightText>
        </div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
