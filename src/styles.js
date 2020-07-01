//styles
import styled, { createGlobalStyle } from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.darkBlue};
`;

const Count = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.black};
`;

const Timeline = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.purple};
  margin-top: 40px;
`;

const Welcome = styled.h5`
  text-align: center;
  color: ${(props) => props.theme.blue};
  margin: 25px;
`;

const GlobalStyle = createGlobalStyle`
body {
  color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.backgroundColor};
}
`;

const EventListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const EventWrapper = styled.div`
  border: ${(props) => props.theme.green} solid;
  border-radius: 5px;
  margin: auto;
  width: 50%;
  margin-bottom: 30px;

  p {
    &.event-name {
      font-size: small;
      text-align: center;
      margin-left: 8px;
      margin-right: 8px;
      color: ${(props) => props.theme.darkBlue};
    }
    &.event-description {
      font-size: small;
      text-align: center;
      margin-left: 8px;
      margin-right: 8px;
      color: ${(props) => props.theme.purple};
      font-weight: bold;
    }

    
`;

export {
  Title,
  GlobalStyle,
  Welcome,
  Timeline,
  EventWrapper,
  EventListWrapper,
  Count,
};
