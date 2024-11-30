import { useEffect } from "react";
import Capacity from "../../assets/capacity.svg";
import BlueNew from "../../assets/cars/bluenew.svg";
import NewVX from "../../assets/cars/newvx.svg";
import SilverNew from "../../assets/cars/silvernew.svg";
import VX from "../../assets/cars/vx.svg";
import WhiteNew from "../../assets/cars/whitenew.svg";
import Favourite from "../../assets/favouriteempty.svg";
import FilledFavourite from "../../assets/favouritenew.svg";
import Fuel from "../../assets/fuel.svg";
import BuyBg from "../../assets/lowprice.svg";
import RentBg from "../../assets/rent.svg";
import Transmission from "../../assets/transmission.svg";
import { FooterText } from "../../components/Footer/Footer.styled";
import { StyledButton } from "../../components/helpers/GeneralComponents.styled";

import {
  CarContainer,
  CarTitle,
  HomeContainer,
  RentalDisplay,
} from "./Home.styled";
import { useDispatch, useSelector } from "react-redux";
import { userLoginSuccess } from "../../store/actions/userActions";

const Home = () => {
  const selectedUser = useSelector((state: any) => state);
  const dispatch = useDispatch();

  console.log(selectedUser.user.user.name);
  const rentCarsData = [
    {
      name: "Toyota Corolla",
      type: "Sedan",
      price: "$70.00",
      fuel: "70L",
      transmission: "Automatic",
      capacity: "5",
      car_pic: "bluenew",
    },

    {
      name: "CR-V",
      type: "Sedan",
      price: "$80.00",
      fuel: "70L",
      transmission: "Manual",
      capacity: "6",
      car_pic: "newvx",
    },
    {
      name: "New MG ZS",
      type: "SUV",
      price: "$90.00",
      fuel: "70L",
      transmission: "Automatic",
      capacity: "5",
      car_pic: "silvernew",
    },
    {
      name: "Toyota Corolla",
      type: "Sedan",
      price: "$70.00",
      fuel: "70L",
      transmission: "Automatic",
      capacity: "5",
      car_pic: "vx",
    },
    {
      name: "CR-V",
      type: "Sedan",
      price: "$80.00",
      fuel: "70L",
      transmission: "Manual",
      capacity: "6",
      car_pic: "whitenew",
    },
    {
      name: "New MG ZS",
      type: "SUV",
      price: "$90.00",
      fuel: "70L",
      transmission: "Automatic",
      capacity: "5",
      car_pic: "bluenew",
    },
    {
      name: "Toyota Corolla",
      type: "Sedan",
      price: "$70.00",
      fuel: "70L",
      transmission: "Automatic",
      capacity: "5",
      car_pic: "newvx",
    },
    {
      name: "CR-V",
      type: "Sedan",
      price: "$80.00",
      fuel: "70L",
      transmission: "Manual",
      capacity: "6",
      car_pic: "silvernew",
    },
    {
      name: "New MG ZS",
      type: "SUV",
      price: "$90.00",
      fuel: "70L",
      transmission: "Automatic",
      capacity: "5",
      car_pic: "vx",
    },
    {
      name: "CR-V",
      type: "Sedan",
      price: "$80.00",
      fuel: "70L",
      transmission: "Manual",
      capacity: "6",
      car_pic: "silvernew",
    },
    {
      name: "New MG ZS",
      type: "SUV",
      price: "$90.00",
      fuel: "70L",
      transmission: "Automatic",
      capacity: "5",
      car_pic: "vx",
    },
    {
      name: "New MG ZS",
      type: "SUV",
      price: "$90.00",
      fuel: "70L",
      transmission: "Automatic",
      capacity: "5",
      car_pic: "vx",
    },
    {
      name: "Toyota Corolla",
      type: "Sedan",
      price: "$70.00",
      fuel: "70L",
      transmission: "Automatic",
      capacity: "5",
      car_pic: "whitenew",
    },
    {
      name: "CR-V",
      type: "Sedan",
      price: "$80.00",
      fuel: "70L",
      transmission: "Manual",
      capacity: "6",
      originalPrice: "$100.00",
      car_pic: "bluenew",
    },
    {
      name: "New MG ZS",
      type: "SUV",
      price: "$90.00",
      fuel: "70L",
      transmission: "Automatic",
      capacity: "5",
      car_pic: "newvx",
    },
    {
      name: "Toyota Corolla",
      type: "Sedan",
      price: "$70.00",
      fuel: "70L",
      transmission: "Automatic",
      capacity: "5",
      originalPrice: "$100.00",
      car_pic: "silvernew",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {}, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <HomeContainer>
      <div className="flex justify-between gap-5">
        <CarContainer backgroundImage={RentBg}></CarContainer>
        <CarContainer backgroundImage={BuyBg}></CarContainer>
      </div>
      <div className="flex justify-between w-full my-3 mt-6">
        <FooterText className="!text-[#90A3BF]">Popular cars</FooterText>
        <FooterText className="!text-[#3563E9] cursor-pointer">
          View all
        </FooterText>
      </div>
      <div className="flex flex-wrap gap-10 justify-between">
        {rentCarsData.map((car, index) => (
          <RentalDisplay key={index}>
            <div className="w-full flex justify-between items-start">
              <div className="w-full flex flex-col ">
                <CarTitle>{car.name}</CarTitle>
                <FooterText className="!text-[#90A3BF]">{car.type}</FooterText>
              </div>

              <img
                src={index % 2 === 0 ? Favourite : FilledFavourite}
                alt="Car"
              />
            </div>
            <div className="py-3">
              <img
                src={
                  car.car_pic === "bluenew"
                    ? BlueNew
                    : car.car_pic === "newvx"
                    ? NewVX
                    : car.car_pic === "silvernew"
                    ? SilverNew
                    : car.car_pic === "vx"
                    ? VX
                    : WhiteNew
                }
                alt="Car"
              />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex items-center">
                <img src={Fuel} />

                <FooterText className="!text-[#90A3BF]">{car.fuel}</FooterText>
              </div>
              <div className="flex items-center">
                <img src={Transmission} />

                <FooterText className="!text-[#90A3BF]">
                  {car.transmission}
                </FooterText>
              </div>

              <div className="flex items-center">
                <img src={Capacity} />
                <FooterText className="!text-[#90A3BF]">
                  {car.capacity}
                </FooterText>
              </div>
            </div>
            <div className="flex justify-between w-full !items-center">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <CarTitle>{car.price}/</CarTitle>
                  <FooterText className="!text-[#90A3BF]">day</FooterText>
                </div>
                {car.originalPrice ? (
                  <FooterText className="!text-[#90A3BF] !line-through">
                    {car.originalPrice}
                  </FooterText>
                ) : null}
              </div>

              <StyledButton className="p-3">Rent Now</StyledButton>
            </div>
          </RentalDisplay>
        ))}
      </div>
      <div className="!relative my-10 py-4 w-full flex justify-center">
        <StyledButton className="p-3">Show more car</StyledButton>
        <div className="absolute right-5 top-2 py-4">
          <FooterText className="!text-[#90A3BF] cursor-pointer">
            120 cars
          </FooterText>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;
