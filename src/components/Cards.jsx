import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "320px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "25px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Img = styled.img`
  width:  ${(props) => (props.type === "sm" ? "55%" : "100%")};
  height: ${(props) => (props.type === "sm" ? "100px" : "180px")};
  background-color: #999;
  object-fit: cover;
  border-radius: 10px;
 
`;
const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
  
`;

const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  object-fit: cover;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Text = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 12px;
  margin: 6px 0px;
  color: ${({ theme }) => theme.textSoft};
`;

const Info = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};

`;

const Cards = ({ type }) => {
  return (
    <Link to={"/video/test"} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Img
          type={type}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwmCNj21G3JtN_devZD6Q8LBMLzJg0rz_VBw&usqp=CAU"
        />
        <Details type={type}>
          <ChannelImg
            type={type}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwmCNj21G3JtN_devZD6Q8LBMLzJg0rz_VBw&usqp=CAU"
          />
          <Text>
            <Title>Test video</Title>
            <ChannelName>Web Dev</ChannelName>
            <Info>60000 Views . 1 day ago</Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
};

export default Cards;
