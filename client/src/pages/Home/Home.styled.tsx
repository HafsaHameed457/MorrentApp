import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f6f7f9 !important;
  padding: 2rem 5rem;

  height: auto;
  min-height: 30vh;
  position: relative;
  z-index: 1;

  color: #fff;
  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 0 4vw;
    height: auto;
    margin-top: none;
  }

  @media screen and (max-width: 480px) {
    justify-content: center;
    padding: 0 5vw;
    margin-top: none;
  }
`;
export const CarContainer: React.FC<any> = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 360px;
  width: 640px;
  border: none;
  border-radius: 10px;

  background-image: url(${(props: { backgroundImage: string }) =>
    props.backgroundImage});
`;

export const RentalDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  width: 308px;
  height: 388px;
  background-color: #fff;
  border: none;
  border-radius: 10px;
`;
export const CarTitle = styled.p`
  font-size: 20px;
  font-family: "Plus Jakarta Sans", sans-serif;
  line-height: 30px;
  font-weight: 700;
  color: #1a202c;
`;
// Styled component for the content
export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
`;
